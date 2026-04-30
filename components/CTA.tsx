import { EmailCapture } from "./EmailCapture";

export function CTA() {
  return (
    <section className="border-b border-hairline" aria-labelledby="cta-label">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 min-[920px]:grid-cols-[180px_1fr] gap-8 min-[920px]:gap-16">
          <div
            id="cta-label"
            className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]"
          >
            <span className="text-ink">05</span>
            <span className="mx-2 text-hairline">/</span>
            Get involved
          </div>
          <div className="max-w-[640px]">
            <h2 className="font-display italic text-accent text-[clamp(36px,4.5vw,52px)] leading-[1.1] tracking-[-0.015em] mb-6">
              Get your evenings back.
            </h2>
            <p className="text-[17px] leading-[1.5] text-ink mb-10 max-w-[520px]">
              Onboarding Ontario rental agents now. Investors and press,
              same form — we&apos;ll know which one you are.
            </p>
            <EmailCapture />
            <div className="mt-8 pt-6 border-t border-hairline">
              <a
                href="mailto:hello@keyfill.app?subject=Talking%20to%20the%20Keyfill%20founders"
                className="group inline-flex items-center min-h-[44px] font-mono text-[12px] uppercase tracking-[0.06em] text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                Or talk to the founders{" "}
                <span className="inline-block ml-1 transition-transform duration-150 ease-out group-hover:translate-x-[3px]">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
