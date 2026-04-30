import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keyfill — voice-to-form for Ontario real estate agents",
  description:
    "Dictate the deal once. Every form fills in parallel. Two filled OREA-form PDFs in your inbox in ninety seconds.",
  metadataBase: new URL("https://keyfill.app"),
  openGraph: {
    title: "Keyfill — voice-to-form for Ontario real estate agents",
    description:
      "Dictate the deal once. Every form fills in parallel.",
    type: "website",
    locale: "en_CA",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('keyfill-theme');
    var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = stored || (prefers ? 'dark' : 'light');
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
