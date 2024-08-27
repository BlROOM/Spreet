import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Header from "../component/Header";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
        <div id="root-modal"></div>
        {modal}
      </body>
    </html>
  );
}
