import type { Metadata } from "next";
import "./globals.css";
// import { Noto_Sans } from "next/font/google";
import Header from "@/components/Header";
import LoginModal from "@/components/login/LoginModal";
import localFont from "next/font/local";

// const notoSans = Noto_Sans({
//   subsets: ["latin"],
// });

const pretendard = localFont({
  src: "../assets/fonts/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} bg-grayscale-900 overflow-x-hidden`}
      >
        <Header />
        {children}
        <div id="root-modal"></div>
        <LoginModal />
      </body>
    </html>
  );
}
