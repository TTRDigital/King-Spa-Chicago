<?php
/*
 * E-coupon form handler for SiteGround (the static site has no Node server).
 * Validates the request like the form does, filters spam and posts it as flat
 * JSON to the GoHighLevel inbound webhook, where an automation sends the
 * $45 e-coupon e-mail (the old WordPress form did that itself).
 *
 * The webhook URL lives in lead-config.php (next to public_html or in this
 * folder; blocked from the web by .htaccess), returning
 *   ['webhook_url' => 'https://services.leadconnectorhq.com/hooks/...']
 * The deploy workflow writes it when the GHL_WEBHOOK_URL secret is set.
 * Until then, requests are accepted (the visitor sees the confirmation) but
 * NOT forwarded anywhere, and the server error log says so.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

function reply(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    reply(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Same-site posts only.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
if ($origin !== '' && strtolower((string) parse_url($origin, PHP_URL_HOST)) !== $host) {
    reply(403, ['ok' => false, 'error' => 'Forbidden.']);
}

/* Best-effort per-IP rate limit: 10 requests per 10 minutes. */
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/ks-lead-' . md5($ip);
$now = time();
$recent = array_filter(
    json_decode((string) @file_get_contents($bucket), true) ?: [],
    fn($t) => is_int($t) && $now - $t < 600
);
$recent[] = $now;
@file_put_contents($bucket, json_encode(array_values($recent)), LOCK_EX);
if (count($recent) > 10) {
    reply(429, ['ok' => false, 'error' => 'Too many requests. Please try again later or call (847) 972-2540.']);
}

$raw = file_get_contents('php://input', false, null, 0, 64 * 1024);
$in = json_decode((string) $raw, true);
if (!is_array($in)) {
    reply(400, ['ok' => false, 'error' => 'Invalid request.']);
}

function text(array $in, string $key, int $max): string {
    $v = $in[$key] ?? '';
    if (is_int($v)) $v = (string) $v;
    if (!is_string($v)) return '';
    return mb_substr(trim($v), 0, $max);
}

// Same fields as the old e-coupon form (Name, Email, Number Of Visitors, Visiting Date).
// Keep in sync with components/sections/ECouponForm.tsx.
$lead = [
    'name' => text($in, 'name', 120),
    'email' => text($in, 'email', 200),
    'visitors' => text($in, 'visitors', 6),
    'visit_date' => text($in, 'visit_date', 40),
];

$errors = [];
if (!preg_match('/^[1-9]\d{0,3}$/', $lead['visitors'])) $errors['visitors'] = 'Please enter the number of visitors.';
if ($lead['email'] !== '' && !filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Please enter a valid email address.';
if ($errors) {
    reply(422, ['ok' => false, 'error' => 'Please check the form.', 'fields' => $errors]);
}

// Spam: drop only when both signals agree (hidden field filled AND sent faster
// than a person can type). One signal alone can be autofill or a fast typist,
// so that request is delivered with a "suspected-spam" tag.
$trapFilled = text($in, 'website_url', 200) !== '';
$elapsed = is_int($in['elapsed_ms'] ?? null) ? $in['elapsed_ms'] : null;
$tooFast = $elapsed !== null && $elapsed < 2500; // MIN_FILL_MS in lib/lead-options.ts
if ($trapFilled && $tooFast) {
    reply(200, ['ok' => true]);
}
$spamCheck = $trapFilled ? 'suspect: hidden field filled' : ($tooFast ? "suspect: sent in {$elapsed} ms" : 'ok');

// Settings
$config = [];
foreach ([dirname(__DIR__, 2) . '/lead-config.php', __DIR__ . '/lead-config.php'] as $file) {
    if (is_file($file)) {
        $config = (array) include $file;
        break;
    }
}
$webhook = trim((string) ($config['webhook_url'] ?? ''), " \t\n\r\0\x0B\"'");
if ($webhook === '') {
    error_log('[lead] No GoHighLevel webhook configured (lead-config.php): request accepted but NOT sent.');
    reply(200, ['ok' => true, 'delivered' => false]);
}
// https only; plain http is allowed for a local test webhook (localhost).
if (!preg_match('#^https://#', $webhook) && !preg_match('#^http://(localhost|127\.0\.0\.1)(:\d+)?/#', $webhook)) {
    error_log('[lead] GoHighLevel webhook URL is not https: request accepted but NOT sent. Check lead-config.php.');
    reply(200, ['ok' => true, 'delivered' => false]);
}

$parts = preg_split('/\s+/', $lead['name']);
$tags = ['website-lead', 'e-coupon-45'];
if ($spamCheck !== 'ok') $tags[] = 'suspected-spam';

$payload = [
    'source' => 'Website e-coupon form',
    'form' => 'e-coupon',
    'submitted_at' => gmdate('c'),
    'name' => $lead['name'],
    'first_name' => $parts[0] ?? '',
    'last_name' => implode(' ', array_slice($parts, 1)),
    'email' => $lead['email'],
    'number_of_visitors' => (int) $lead['visitors'],
    'visiting_date' => $lead['visit_date'],
    'tags' => $tags,
    'spam_check' => $spamCheck,
];
foreach (['page_url', 'landing_page', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as $key) {
    $payload[$key] = text($in, $key, 1000);
}

// One retry for rate limits, server errors and network failures.
$body = json_encode($payload);
for ($attempt = 0; $attempt < 2; $attempt++) {
    $ch = curl_init($webhook);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 8,
    ]);
    $res = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);
    if ($status >= 200 && $status < 300) {
        reply(200, ['ok' => true, 'delivered' => true]);
    }
    error_log("[lead] GoHighLevel webhook answered {$status}: " . substr((string) $res, 0, 300));
    if ($status !== 0 && $status !== 429 && $status < 500) break;
    usleep(600000);
}

// Nothing saved the request: tell the visitor so they can call instead.
reply(502, ['ok' => false, 'error' => 'We could not send your request. Please try again or call (847) 972-2540.']);
