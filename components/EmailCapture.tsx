"use client";

import { useState } from "react";

type State = "idle" | "submitted" | "error";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setState("error");
      return;
    }
    // TODO before launch: wire this to Resend / Formspree / similar.
    // Today's interim: open the user's mail client with a prefilled note.
    const subject = encodeURIComponent("Keyfill early access");
    const body = encodeURIComponent(
      `Email: ${email}\n\nI'm a [agent / investor / press]:\n`,
    );
    window.location.href = `mailto:hello@keyfill.app?subject=${subject}&body=${body}`;
    setState("submitted");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <div className="flex items-stretch border border-ink bg-paper focus-within:outline focus-within:outline-2 focus-within:outline-accent focus-within:outline-offset-2">
        <input
          id="email"
          type="email"
          required
          aria-required="true"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== "idle") setState("idle");
          }}
          placeholder="you@brokerage.com"
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? "email-error" : undefined}
          className="flex-1 min-w-0 bg-transparent border-0 px-[14px] py-[14px] md:py-[11px] font-sans text-[14px] text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="bg-ink text-paper border-0 px-[18px] py-[14px] md:py-0 font-sans font-medium text-[13px] cursor-pointer hover:bg-accent transition-colors min-h-[44px] md:min-h-0"
        >
          Get early access
        </button>
      </div>
      {state === "error" && (
        <p
          id="email-error"
          className="font-mono text-[11px] uppercase tracking-[0.04em] text-accent"
          role="alert"
        >
          That doesn't look like a valid email.
        </p>
      )}
      {state === "submitted" && (
        <p
          className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted"
          role="status"
        >
          Thanks — finish the send in your mail client.
        </p>
      )}
    </form>
  );
}
