const reasons = [
  {
    label: "Parallel-fill thesis",
    title: "Fill once, fill everything",
    body: "Extraction is the expensive part. Once we've got the thirteen fields, filling Form 2229E and OREA 400 costs nothing extra. So we fill both. You pick at the tile.",
  },
  {
    label: "Privacy proxy",
    title: "Your clients' data never sees the LLM",
    body: "Real names, addresses, and deposits stay inside Keyfill. We swap in placeholders before any model call, then map them back on your machine. After the deal, the mapping deletes itself on a Redis TTL — even we can't reconstruct it.",
  },
  {
    label: "Skyslope handoff",
    title: "Plays nice with Skyslope",
    body: "Keyfill doesn't sign, doesn't store your listings, doesn't replace your CRM. It fills the forms. Skyslope signs them. Nothing to migrate, nothing to learn.",
  },
];

export function WhyItWorks() {
  return (
    <section
      className="border-b border-hairline bg-onion"
      aria-labelledby="why-label"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-20">
        <div className="mb-12">
          <div
            id="why-label"
            className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]"
          >
            — Why it works
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((r) => (
            <article key={r.label}>
              <div className="font-mono text-[10.5px] text-muted uppercase tracking-[0.08em] mb-4 pb-3 border-b border-hairline">
                {r.label}
              </div>
              <h3 className="font-sans font-semibold text-ink-deep text-[19px] leading-[1.3] tracking-[-0.01em] mb-3">
                {r.title}
              </h3>
              <p className="text-[15.5px] leading-[1.6] text-ink">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
