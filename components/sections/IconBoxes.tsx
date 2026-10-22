/** The rose-framed maroon icon squares used beside "ADDRESS" / "OPENING HOURS" on the old site. */
export function PinIcon({ size = 50 }: { size?: number }) {
  return <IconSquare size={size}><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="#fff" /></IconSquare>;
}
export function ClockIcon({ size = 50 }: { size?: number }) {
  return <IconSquare size={size}><circle cx="12" cy="12" r="9" fill="#fff" /><path d="M12 7v5.5l3.2 2" stroke="#57050d" strokeWidth="2" fill="none" strokeLinecap="round" /></IconSquare>;
}
function IconSquare({ size, children }: { size: number; children: React.ReactNode }) {
  const inner = Math.round(size * 0.74);
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center justify-center rounded-[22%] border border-[#d7aaa4] bg-[#ecd4cf]" style={{ width: size, height: size }}>
      <span className="flex items-center justify-center rounded-[18%] bg-maroon" style={{ width: inner, height: inner }}>
        <svg viewBox="0 0 24 24" width={Math.round(inner * 0.5)} height={Math.round(inner * 0.5)}>{children}</svg>
      </span>
    </span>
  );
}
