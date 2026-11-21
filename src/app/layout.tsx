import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathew Alexander | AI Engineer",
  description: "AI Engineer focused on Generative AI, agentic systems and backend engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
