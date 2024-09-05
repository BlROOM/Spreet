import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Header from "@/components/Header";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
        <div id="root-modal"></div>
      </body>
    </html>
  );
}
