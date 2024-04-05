"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "./unnamed.png";

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <nav className="flex p-4 gap-4 bg-gray-200 items-center">
        <Link href="/">
          <Image src={Logo} width={40} height={40} alt="Logo" />
        </Link>
        <Link href="/">
          <h1 className="text-xl hover:bg-gray-300 rounded p-2">
            {isOn ? "Bold Beijing" : "无所不有北京"}
          </h1>
        </Link>
        <Link href="/shop" className=" ml-auto">
          <h1 className="text-xl hover:bg-gray-300 rounded p-2">
            {isOn ? "Shop" : "店铺"}
          </h1>
        </Link>
        <Link href="/checkout">
          <h1 className="text-xl hover:bg-gray-300 rounded p-2 ">
            {isOn ? "Checkout" : "结帐"}
          </h1>
        </Link>
      </nav>
      <div className="bg-white p-4 flex items-center">
        <h1 className="mr-4">English On?</h1>
        <button
          onClick={() => setIsOn(!isOn)}
          className={`w-16 h-8 bg-gray-300 rounded-full p-1 ${
            isOn ? "bg-green-500" : ""
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
              isOn ? "translate-x-full" : ""
            }`}
          ></div>
        </button>
      </div>
      <header
        className="p-16"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/p/AF1QipNQzPrzyRJOKSeea5Vo7aAZAQ6i14WrFH7tUfAY=s680-w680-h510)",
        }}
      >
        <div
          className="p-8 bg-neutral-800 bg-opacity-70"
          style={{ maxWidth: "960px" }}
        >
          <h1 className="text-white text-6xl">
            {isOn ? "Bold Beijing" : "无所不有北京"}
          </h1>
          <p className="text-2xl text-white mt-6">
            {isOn
              ? "Welcome to Bold Beijing, your one-stop shop for all things Chinese!"
              : "欢迎来打无所不有北京，这里你所有都可以找到！"}
          </p>
        </div>
      </header>
      <main className="flex-grow p-16 backdrop-filter backdrop-blur-lg bg-opacity-40">
        <div style={{ maxWidth: "960px" }}>
          <section className="mb-8">
            <h2 className="text-4xl mb-2">
              {isOn ? "Our Products" : "我们的产品"}
            </h2>
            <p className="text-xl">
              {isOn
                ? "We offer a wide range of products from traditional Chinese clothing to delicious Chinese tea."
                : "我们有很多不同的产品，从中国传统服装到美味的中国茶。"}
            </p>
          </section>
          <section>
            <h2 className="text-4xl mb-2">
              {isOn ? "Contact Us" : "联系我们"}
            </h2>
            <p className="text-xl">
              {isOn
                ? "Feel free to reach out to us at boldbeijing@example.com or call us at 123-456-7890."
                : "如果有问题，可以电话 123-456-7890 或发送电子邮件至 boldbeijing@example.com"}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
