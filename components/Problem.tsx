export function Problem() {
  return (
    <section className="border-b border-hairline" aria-labelledby="problem-label">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 min-[920px]:grid-cols-[180px_1fr] gap-8 min-[920px]:gap-16">
          <div
            id="problem-label"
            className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]"
          >
            — The wedge
          </div>
          <div className="max-w-[640px] space-y-5">
            <p className="text-[18px] leading-[1.65] text-ink">
              Every Ontario rental deal ends the same way. The agent types the
              same thirteen fields — tenants, address, rent, term, deposits,
              irrevocability, utilities — into Form 2229E. Then again into
              OREA Form 400. Then again into the brokerage&apos;s PDF.
            </p>
            <p className="text-[18px] leading-[1.65] text-ink">
              The signing problem is solved; DocuSign, Skyslope, and Dotloop
              all handle that. The{" "}
              <em className="font-display italic text-ink-deep text-[20px]">
                filling
              </em>{" "}
              problem is what eats the night.
            </p>
            <p className="font-display italic text-[clamp(22px,2.2vw,28px)] leading-[1.35] tracking-[-0.005em] text-ink-deep pt-2">
              That&apos;s the wedge — the part nobody got out of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
