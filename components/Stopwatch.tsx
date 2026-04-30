"use client";

import { useEffect, useRef, useState } from "react";

const TARGET_SECONDS = 92; // 1:32
const DURATION_MS = 3000;
const START_DELAY_MS = 600;

function fmt(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function Stopwatch() {
  const [display, setDisplay] = useState("00:00");
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      setDisplay(fmt(TARGET_SECONDS));
      return;
    }

    let raf = 0;
    const start = performance.now() + START_DELAY_MS;
    const step = (now: number) => {
      if (now < start) {
        raf = requestAnimationFrame(step);
        return;
      }
      const t = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 2.4);
      setDisplay(fmt(TARGET_SECONDS * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span
      className="font-mono text-[56px] font-light leading-none text-accent tabular-nums tracking-[-0.02em]"
      aria-label={`${TARGET_SECONDS} seconds elapsed`}
    >
      {display}
    </span>
  );
}
