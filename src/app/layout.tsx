import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Header from "./_component/Header";

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
  console.log("------modal----", modal);
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
