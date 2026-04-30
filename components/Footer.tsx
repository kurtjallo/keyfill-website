import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-hairline mt-auto">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Wordmark />
            <p className="mt-3 text-[14px] text-muted leading-[1.5] max-w-[260px]">
              Voice-to-form for Ontario real estate.
            </p>
          </div>
          <div className="font-mono text-[11px] text-muted uppercase tracking-[0.04em] leading-[1.7]">
            Built in Toronto
            <br />© 2026 Keyfill
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.04em] leading-[1.7] md:text-right">
            <a
              href="mailto:hello@keyfill.app"
              className="text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              hello@keyfill.app
            </a>
            <br />
            <a
              href="mailto:hello@keyfill.app?subject=Talking%20to%20the%20Keyfill%20founders"
              className="text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Talk to us →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
