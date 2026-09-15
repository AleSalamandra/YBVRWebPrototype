import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "YB",
    template: "%s — YB",
  },

  description:
    "YB creates immersive media, technology and experiences across entertainment, culture and sport.",
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

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}