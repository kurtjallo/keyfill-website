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
          <p className="font-display text-[clamp(22px,2.4vw,30px)] leading-[1.4] tracking-[-0.01em] text-ink-deep max-w-[760px]">
            Every Ontario rental deal ends the same way. The agent types the
            same thirteen fields — tenants, address, rent, term, deposits,
            irrevocability, utilities — into Form 2229E. Then again into OREA
            Form 400. Then again into the brokerage&apos;s PDF. The signing
            problem is solved; DocuSign, Skyslope, Dotloop all handle that.
            The{" "}
            <em className="text-accent italic">filling</em>{" "}
            problem is what eats the night. That&apos;s the wedge — the part
            nobody got out of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
