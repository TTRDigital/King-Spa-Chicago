/**
 * On the old site the theme's archive and 404 pages never loaded the Recoleta font
 * (nor its backup), so their header menu showed in the browser's default serif and
 * the E-Coupon button in its default sans-serif. Kept that way on these pages only.
 */
export const headerFallbackFont = 'header .font-recoleta{font-family:serif}header div>a[href="/e-coupon/"]{font-family:sans-serif}';
