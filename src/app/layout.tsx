import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "YB Immersive Experiences",
    template: "%s — YB",
  },

  description:
    "YB creates immersive experiences through technology, media and production.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/dwz5pyv.css"
        />
      </head>

      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
