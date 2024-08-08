import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | Immortal Mags",
    default: "Immortal Mags",
  },
  description: "Immortal Mags - where magazines will never die.",
  creator: "Elia Orsini",
  applicationName: "Immortal Mags",
  keywords: ["Magazines", "Mags"],
  referrer: "origin-when-cross-origin",
};
