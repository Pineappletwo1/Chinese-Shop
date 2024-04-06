"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import Switch from "../../components/Switch";
import Image from "next/image";
import Logo from "../unnamed.png";

interface Product {
  id: number;
  nameEn: string;
  nameCn: string;
  price: number;
  inStock: boolean;
  discount: number;
}

const products: Product[] = [
  {
    id: 1,
    nameEn: "A bag of rice 🍚",
    nameCn: "一袋米 🍚",
    price: 800,
    inStock: true,
    discount: 0,
  },
  {
    id: 2,
    nameEn: "Jeans 👖",
    nameCn: "一条牛仔裤 👖",
    price: 2000,
    inStock: true,
    discount: 25,
  },
  {
    id: 3,
    nameEn: "Green Tea 🍵",
    nameCn: "一杯绿茶 🍵",
    price: 300,
    inStock: false,
    discount: 0,
  },
  {
    id: 4,
    nameEn: "White and Red T-Shirt 👕",
    nameCn: "一件白色和红色的T恤衫 👕",
    price: 500,
    inStock: true,
    discount: 0,
  },
  {
    id: 6,
    nameEn: "Red Dress 👗",
    nameCn: "一条红色的连衣裙 👗",
    price: 5000,
    inStock: true,
    discount: 10,
  },
  {
    id: 7,
    nameEn: "Oolong Tea 🍵",
    nameCn: "一杯乌龙茶🍵",
    price: 400,
    inStock: true,
    discount: 50,
  },
  {
    id: 8,
    nameEn: "Sneakers 👟",
    nameCn: "一双运动鞋 👟",
    price: 2000,
    inStock: true,
    discount: 0,
  },
  {
    id: 9,
    nameEn: "Backpack 🎒",
    nameCn: "一个书包 🎒",
    price: 3000,
    inStock: true,
    discount: 20,
  },
  {
    id: 10,
    nameEn: "Instant Noodles 🍜",
    nameCn: "一包方便面 🍜",
    price: 100,
    inStock: true,
    discount: 0,
  },
  {
    id: 11,
    nameEn: "Hat 🧢",
    nameCn: "一顶帽子 🧢",
    price: 1000,
    inStock: true,
    discount: 0,
  },
];

export default function Shop() {
  const [cart, setCart] = useState<Product[]>([]);

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
  const addToCart = (product: Product) => {
    if (product.inStock) {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
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
        <div className="grid grid-cols-3 gap-6 bg-white mt-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col ">
              <h2 className="text-3xl mb-2">
                {product[isOn ? "nameEn" : "nameCn"]}
              </h2>
              {product.discount > 0 ? (
                <>
                  <p className="mb-2 text-xl text-green-600">
                    {isOn ? `${product.discount}% off` : `${100 - product.discount} 折`}
                  </p>
                  <p>
                    <s>${product.price / 100}</s> - $
                    {product.price * 0.0001 * (100 - product.discount)}{" "}
                  </p>
                </>
              ) : (
                <p className="mb-2 text-xl">${product.price / 100}</p>
              )}

              <p className={"mb-2 text-xl " + ""}>
                {isOn
                  ? product.inStock
                    ? "In Stock"
                    : "Sold Out"
                  : product.inStock
                  ? "有货"
                  : "卖完了"}
              </p>
              <button
                onClick={() => addToCart(product)} //价钱 7折 im pretty sure
                className={`px-4 py-2 w-32 rounded mt-4 text-md ${product.inStock ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white cursor-not-allowed'}`}
                disabled={!product.inStock}
              >
                {isOn ? "Add to Cart" : "添加到购物车"}
              </button>
            </div>
          ))}
        </div>
        <h2 className="text-4xl mt-6 mb-4">{isOn ? "Cart" : "购物车"}</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="text-xl">
              {product[isOn ? "nameEn" : "nameCn"]}

              {product.discount > 0 ? (
                <>
                  <s>${product.price / 100}</s> - $
                  {product.price * 0.0001 * (100 - product.discount)}{" "}
                </>
              ) : (
                `$${product.price / 100}`
              )}
            </li>
          ))}
        </ul>
        <Link href="/checkout">
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 text-xl">
            {isOn ? "Checkout" : "结帐"}
          </button>
        </Link>
      </div>
    </>
  );
}
