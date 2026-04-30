export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-zinc-50 p-8 text-center dark:bg-black">
      <picture>
        <source
          srcSet="/keyfill-wordmark-dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <img
          src="/keyfill-wordmark-light.svg"
          alt="Keyfill"
          className="h-12 w-auto"
        />
      </picture>
      <p className="mt-8 max-w-md text-lg text-zinc-700 dark:text-zinc-300">
        Voice-to-form for Ontario real estate agents.
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
        Coming soon.
      </p>
    </main>
  );
}
