import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const description = "All Notes to help you ACE Computer Science at Western University";

function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  applicationName: "CSNotes",
  title: {
    default: `CSNotes - ${description}`,
    template: "%s · CSNotes",
  },
  description,
  icons: {
    icon: [{ url: "/CSNotesLogo.png", type: "image/png" }],
    apple: "/CSNotesLogo.png",
  },
  openGraph: {
    type: "website",
    siteName: "CSNotes",
    title: "CSNotes",
    description,
    images: [{ url: "/CSNotesLogo.png", alt: "CSNotes" }],
  },
  twitter: {
    card: "summary",
    title: "CSNotes",
    description,
    images: ["/CSNotesLogo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
