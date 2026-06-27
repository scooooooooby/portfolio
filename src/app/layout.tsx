import { Analytics } from "@vercel/analytics/next";
import React, { Metadata } from "next";
import {
  Irish_Grover,
  Jacquard_24,
  Kablammo,
  League_Script,
  Modak,
  Oi,
} from "next/font/google";

import "./globals.css";

import {
  Clickable,
  Columns,
  Container,
  Cursor,
  Footer,
  Label,
} from "~/components";
import Nav from "~/components/Nav";

export const metadata: Metadata = {
  description: "Portfolio website of Helen V. Holmes, designer.",
  title: "Helen V. Holmes · Designer",
};

const jacquard = Jacquard_24({
  subsets: ["latin"],
  variable: "--font-jacquard",
  weight: "400",
});
const irishGrover = Irish_Grover({
  subsets: ["latin"],
  variable: "--font-irish-grover",
  weight: "400",
});
const kablammo = Kablammo({
  subsets: ["latin"],
  variable: "--font-kablammo",
  weight: "400",
});
const modak = Modak({
  subsets: ["latin"],
  variable: "--font-modak",
  weight: "400",
});
const leagueScript = League_Script({
  subsets: ["latin"],
  variable: "--font-league-script",
  weight: "400",
});
const oi = Oi({
  subsets: ["latin"],
  variable: "--font-oi",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jacquard.variable} ${irishGrover.variable} ${modak.variable} ${kablammo.variable} ${leagueScript.variable} ${oi.variable} bg-background`}
    >
      <body className="text-color">
        <main>
          <div className="hidden lg:block">
            <Cursor />
          </div>
          <Container>
            <Columns
              label={
                <div className="flex flex-col gap-2">
                  —
                  <Clickable href="/" type="unstyled" destination="internal">
                    <Label>Helen V. Holmes</Label>
                  </Clickable>
                  Designer
                </div>
              }
              collapseBehavior="twoCol"
              firstColumn={
                <div className="flex flex-col items-start gap-1">
                  —
                  <Clickable destination="internal" href="/">
                    helenvholmes.com
                  </Clickable>
                  <Clickable
                    destination="external"
                    href="mailto:sayhi@helenvholmes.com"
                    type="inline"
                  >
                    sayhi@helenvholmes.com
                  </Clickable>
                </div>
              }
              numberOfColumns={2}
              secondColumn={<Nav />}
              secondColumnClassName="fixed top-6 right-0 z-30 items-end"
            />
          </Container>
          <div style={{ minHeight: "calc(100vh - 180px)" }}>{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
