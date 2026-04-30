export function Founders() {
  return (
    <section
      className="border-b border-hairline"
      aria-labelledby="founders-label"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 min-[920px]:grid-cols-[180px_1fr] gap-8 min-[920px]:gap-16">
          <div
            id="founders-label"
            className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]"
          >
            <span className="text-ink">04</span>
            <span className="mx-2 text-hairline">/</span>
            Founders
          </div>
          <div className="max-w-[760px]">
            <h2 className="font-display italic text-[clamp(26px,3vw,34px)] leading-[1.2] tracking-[-0.01em] text-ink-deep mb-12">
              Two people who watched the pain.
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <dt className="font-sans font-semibold text-ink-deep text-[16px] leading-[1.3] mb-1 tracking-[-0.01em]">
                  Kurt Jallorina
                </dt>
                <dd className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted mb-3">
                  Founder · full-stack
                </dd>
                <dd className="text-[15.5px] leading-[1.6] text-ink">
                  Full-stack on the Keyfill app. Sat next to agents at 11pm
                  and watched them retype the same address into a fifth PDF.
                </dd>
              </div>
              <div>
                <dt className="font-sans font-semibold text-ink-deep text-[16px] leading-[1.3] mb-1 tracking-[-0.01em]">
                  Kav
                </dt>
                <dd className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted mb-3">
                  Co-founder · OCR + business
                </dd>
                <dd className="text-[15.5px] leading-[1.6] text-ink">
                  Real estate background. Came up with the parallel-fill
                  thesis and the privacy proxy that keeps client data out
                  of the LLM.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
