"use client";

import Header from "./Header";

export default function ClientAppFrame({ children }: { children: React.ReactNode }) {
  /**
   * Client component frame to contain header and page content, preserving client/server boundaries.
   */
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4">{children}</main>
    </>
  );
}
