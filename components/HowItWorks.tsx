const steps = [
  {
    number: "01",
    title: "Dictate the deal",
    body: "Talk through the deal — names, address, rent, term, deposits. About forty seconds.",
  },
  {
    number: "02",
    title: "Every form fills",
    body: "We extract the thirteen fields and fill every applicable lease form at once. You don't pick — you get all of them.",
  },
  {
    number: "03",
    title: "Review and email",
    body: "Skim the tile, fix anything we got wrong, email the PDFs. Skyslope takes it from there.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-hairline" aria-labelledby="how-label">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 min-[920px]:grid-cols-[180px_1fr] gap-8 min-[920px]:gap-16 mb-12">
          <div
            id="how-label"
            className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]"
          >
            — How it works
          </div>
          <h2 className="font-sans font-semibold text-[clamp(26px,3.2vw,36px)] leading-[1.15] tracking-[-0.02em] text-ink-deep max-w-[700px]">
            Three steps. The evening is yours.
          </h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline list-none">
          {steps.map((step) => (
            <li key={step.number} className="bg-paper p-8 lg:p-10">
              <div className="font-mono text-[11px] text-muted uppercase tracking-[0.08em] mb-5">
                {step.number}
              </div>
              <h3 className="font-display italic text-ink-deep text-[24px] leading-[1.2] tracking-[-0.005em] mb-3">
                {step.title}
              </h3>
              <p className="text-[15.5px] leading-[1.55] text-ink">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
