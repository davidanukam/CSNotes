import type { Metadata } from "next";
import { cookies } from "next/headers";
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = (await cookies()).get("theme")?.value;
  const dataTheme = theme === "light" ? "light" : "dark";

  return (
    <html lang="en" data-theme={dataTheme} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
