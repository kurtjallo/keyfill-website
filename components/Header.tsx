import { Wordmark } from "./Wordmark";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-[18px] flex items-center justify-between">
        <Wordmark />
        <div className="flex items-center gap-6">
          <span className="hidden md:inline font-mono text-[11px] text-muted uppercase tracking-[0.06em]">
            Private beta · Toronto
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
