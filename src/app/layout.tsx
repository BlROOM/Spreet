import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 flex align-middle justify-between">
            <nav>
              <h1 className="text-2xl font-bold">Spreet</h1>
              <p className="text-sm">Spreed Street culture</p>
            </nav>
            <nav>
              <ul className="flex gap-3">
                <li>
                  <Link href='./search'>행사</Link>
                </li>
                <li>
                  <Link href='./'>강의</Link>
                </li>
                <li>
                  <Link href='./login'>로그인</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}</body>
    </html>
  );
}
