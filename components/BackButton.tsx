"use client";

import Link from "next/link";

export function BackButton({ href }: { href: string }) {
  return (
    <Link className="back-btn" href={href}>
      ← Back
    </Link>
  );
}
