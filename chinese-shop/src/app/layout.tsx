import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bold Beijing",
  description:
    "Chinese Shop that totally wouldn't log your information and send it to the ccp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        {children}
        <footer className="p-4 bg-gray-300 text-black text-center text-lg">
          <p>© 2022 Bold Beijing. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
