import Link from "next/link";

export function Wordmark({
  href = "/",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-baseline font-semibold text-[18px] tracking-[-0.02em] text-ink no-underline ${className}`}
      aria-label="Keyfill home"
    >
      <span>Keyfill</span>
      <span className="text-accent font-bold" aria-hidden="true">.</span>
    </Link>
  );
}
