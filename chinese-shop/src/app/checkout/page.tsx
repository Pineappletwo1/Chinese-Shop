"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../unnamed.png";

type Product = {
  id: number;
  nameEn: string;
  nameCn: string;
  price: number;
  inStock: boolean;
};

export default function Checkout() {
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
    const isOn = localStorage.getItem("isOn");
    if (isOn) {
      setIsOn(JSON.parse(isOn));
    }
  }, []);

  const [cart, setCart] = useState<Product[]>([]);
  const removeFromCart = (index: any) => {
    //get rid
    setCart(cart.filter((p, i) => i !== index));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((p, i) => i !== index))
    );
  };
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <nav className="flex p-4 gap-4 bg-gray-200">
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
          onClick={() => {
            setIsOn(!isOn);
            localStorage.setItem("isOn", JSON.stringify(!isOn));
          }}
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
      <div className="p-8 bg-white">
        <h1 className="text-4xl mb-4">
          {isOn ? "Bold Beijing Shop" : "无所不有北京店铺"}
        </h1>

        <h2 className="text-2xl mt-4">{isOn ? "Cart" : "购物车"}</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <h3 className="text-xl">
                  {product[isOn ? "nameEn" : "nameCn"]}
                </h3>
                <p className="text-lg">
                  {product.discount > 0 ? (
                    <>
                      <s>${product.price / 100}</s> - $
                      {product.price * 0.0001 * (100 - product.discount)}{" "}
                    </>
                  ) : (
                    `$${product.price / 100}`
                  )}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 w-32 rounded mt-4 text-sm"
              >
                {isOn ? "Remove" : "除去项目"}
              </button>
            </li>
          ))}
        </ul>
        <h1 className="mt-6 text-4xl">{isOn ? "Total" : "全部的钱"}</h1>
        <h2 className="text-2xl mb-8 mt-2">
          $
          {cart.reduce((acc, p) => acc + p.price * (100 - p.discount), 0) /
            10000}
        </h2>
        <form>
          <h1 className="text-2xl">{isOn ? "Full Name:" : "全名:"}</h1>
          <input className="w-96 border-gray-200 rounded border-2 my-2 p-2" />
          <h1 className="text-2xl">{isOn ? "Email" : "电子邮件地址:"}:</h1>
          <input className="w-96 border-gray-200 rounded border-2 my-2  p-2" />
          <h1 className="text-2xl">{isOn ? "Address:" : "地址:"}</h1>
          <input className="w-96 border-gray-200 rounded border-2 my-2  p-2" />
          <h1 className="text-2xl">
            {isOn ? "Credit Card Number:" : "信用卡号码:"}
          </h1>
          <input
            className="w-96 border-gray-200 rounded border-2 my-2  p-2"
            placeholder={
              isOn
                ? "Please do not input a real credit card number"
                : "请不要输入真实的信用卡号码"
            }
          />
        </form>
      </div>
    </>
  );
}
