import { Stopwatch } from "./Stopwatch";

export function Hero() {
  return (
    <section className="border-b border-hairline" aria-labelledby="hero-statement">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 pt-[88px] pb-24">
        <div className="grid grid-cols-1 min-[920px]:grid-cols-[58fr_42fr] gap-16 items-start">

          <div>
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
              <span aria-hidden="true" className="block w-6 h-px bg-ink" />
              Voice-to-form for Ontario real estate
            </div>

            <h1
              id="hero-statement"
              className="font-display text-ink-deep mb-8 leading-[1.08] tracking-[-0.015em] text-[clamp(48px,6vw,84px)] font-normal"
            >
              Dictate the deal once.{" "}
              <em className="block text-accent italic">
                Every form fills in parallel.
              </em>
            </h1>

            <p className="text-[19px] leading-[1.5] text-ink mb-10 max-w-[520px] border-l-2 border-ink pl-[18px]">
              Two filled OREA-form PDFs in your inbox in ninety seconds.
              Skyslope handles the signatures from there.
            </p>

            <div
              className="font-mono text-[12.5px] leading-[1.7] text-muted py-4 px-[18px] bg-onion border border-hairline max-w-[540px] tracking-[-0.005em]"
              aria-label="Process: voice to thirteen extracted fields to two filled forms emailed in one minute thirty-two seconds"
            >
              <span className="text-ink">voice</span>{" "}
              <span className="text-accent mx-2" aria-hidden="true">→</span>
              13 fields extracted{" "}
              <span className="text-accent mx-2" aria-hidden="true">→</span>
              <span className="text-ink">form 2229E</span> +{" "}
              <span className="text-ink">OREA 400</span>{" "}
              <span className="text-accent mx-2" aria-hidden="true">→</span>
              emailed in <span className="text-ink">1:32</span>
            </div>
          </div>

          <DealPacket />
        </div>
      </div>
    </section>
  );
}

function DealPacket() {
  return (
    <div
      className="relative min-h-[540px]"
      aria-hidden="true"
      role="presentation"
    >
      <FormCard
        title="Residential Lease"
        formId="FORM 2229E"
        rotation="-1.5deg"
        zIndex={1}
        offsetTop={0}
        offsetLeft={0}
        rows={[
          ["Tenant", "John Smith"],
          ["Property", "123 Main St, Toronto ON"],
          ["Rent", "$2,400 / month"],
          ["Term", "12 months from May 1"],
          ["Deposit", "$2,400 last month"],
        ]}
      />
      <FormCard
        title="Agreement to Lease"
        formId="OREA FORM 400"
        rotation="1.2deg"
        zIndex={2}
        offsetTop={28}
        offsetLeft={32}
        rows={[
          ["Tenant", "John Smith"],
          ["Landlord", "Acme Holdings Ltd."],
          ["Property", "123 Main St, Toronto ON"],
          ["Irrev. by", "11:59 pm, Apr 30"],
          ["Utilities", "Tenant: hydro, gas. LL: water."],
        ]}
      />
      <figure className="absolute top-[380px] left-0 right-0 pt-6 border-t border-hairline m-0">
        <Stopwatch />
        <figcaption className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
          Every form ready
        </figcaption>
      </figure>
    </div>
  );
}

function FormCard({
  title,
  formId,
  rotation,
  zIndex,
  offsetTop,
  offsetLeft,
  rows,
}: {
  title: string;
  formId: string;
  rotation: string;
  zIndex: number;
  offsetTop: number;
  offsetLeft: number;
  rows: [string, string][];
}) {
  return (
    <article
      className="absolute w-[92%] bg-onion border border-sepia px-[22px] pt-6 pb-7"
      style={{
        top: `${offsetTop}px`,
        left: `${offsetLeft}px`,
        transform: `rotate(${rotation})`,
        zIndex,
      }}
    >
      <header className="flex justify-between items-baseline border-b border-sepia pb-2 mb-3">
        <span className="font-display text-[14px] tracking-[0.005em] text-ink">
          {title}
        </span>
        <span className="font-mono text-[9.5px] text-muted uppercase tracking-[0.06em]">
          {formId}
        </span>
      </header>
      {rows.map(([label, value], i) => (
        <div
          key={label}
          className={`grid grid-cols-[100px_1fr] gap-3.5 py-1 text-[11px] ${
            i < rows.length - 1
              ? "border-b border-dotted border-hairline"
              : ""
          }`}
        >
          <span className="font-mono text-[9.5px] text-muted uppercase tracking-[0.04em] self-center">
            {label}
          </span>
          <span
            className="font-sans font-medium text-ink"
            style={{
              background:
                "linear-gradient(transparent 60%, var(--accent-fill) 60%)",
              padding: "1px 2px",
            }}
          >
            {value}
          </span>
        </div>
      ))}
    </article>
  );
}
