import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Founders } from "@/components/Founders";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Problem } from "@/components/Problem";
import { WhyItWorks } from "@/components/WhyItWorks";

export default function Home() {
  return (
    <>
      <a
        href="#hero-statement"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.06em]"
      >
        Skip to main content
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <WhyItWorks />
        <Founders />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
