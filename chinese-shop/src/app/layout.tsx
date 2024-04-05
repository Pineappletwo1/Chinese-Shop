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
        <nav className="flex p-4 gap-4 bg-gray-200">
          <Link href="/">
            <h1 className="text-xl hover:bg-gray-300 rounded p-2">
              Bold Beijing
            </h1>
          </Link>
          <Link href="/shop" className=" ml-auto">
            <h1 className="text-xl hover:bg-gray-300 rounded p-2">Shop</h1>
          </Link>
          <Link href="/checkout">
            <h1 className="text-xl hover:bg-gray-300 rounded p-2 ">Checkout</h1>
          </Link>
        </nav>
        {children}
        <footer className="p-4 bg-gray-300 text-black text-center text-lg">
          <p>© 2022 Bold Beijing. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
