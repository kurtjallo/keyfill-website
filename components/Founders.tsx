export function Founders() {
  return (
    <section
      className="border-b border-hairline"
      aria-labelledby="founders-label"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 min-[920px]:grid-cols-[180px_1fr] gap-8 min-[920px]:gap-16">
          <div
            id="founders-label"
            className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]"
          >
            — Founders
          </div>
          <div className="max-w-[760px]">
            <h2 className="font-display italic text-[clamp(26px,3vw,34px)] leading-[1.2] tracking-[-0.01em] text-ink-deep mb-12">
              Built by two people who watched the pain.
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <dt className="font-display text-ink-deep text-[20px] leading-[1.2] mb-2">
                  Kurt Jallorina
                </dt>
                <dd className="text-[15.5px] leading-[1.55] text-ink">
                  Full-stack on the Keyfill app. Sat next to agents at 11pm
                  and watched them retype the same address into a fifth PDF.
                </dd>
              </div>
              <div>
                <dt className="font-display text-ink-deep text-[20px] leading-[1.2] mb-2">
                  Kav
                </dt>
                <dd className="text-[15.5px] leading-[1.55] text-ink">
                  Co-founder. Real estate background. Came up with the
                  parallel-fill thesis and the privacy-proxy architecture
                  that keeps client data out of the LLM.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
