import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | Immortal Mags",
    default: "Immortal Mags",
  },
  description:
    "Immortal Mags, where magazines will never die. We aim to be the largest repository of independent magazines out there. Ranging from Fashion to Design, Coffee, Cycling (and many more!) we collect and document the best magazines we encounter.",
  creator: "Elia Orsini",
  applicationName: "Immortal Mags",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};

export const revalidate = 360; // revalidate at most every 6 minutes
