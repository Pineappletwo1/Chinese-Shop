"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import Switch from "../../components/Switch";

interface Product {
  id: number;
  nameEn: string;
  nameCn: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    nameEn: "Rice",
    nameCn: "一杠米大米",
    price: 800,
    inStock: true,
  },
  { id: 2, nameEn: "Jeans", nameCn: "一条牛仔裤", price: 500, inStock: true },
  { id: 3, nameEn: "Green Tea", nameCn: "一杯绿茶", price: 300, inStock: false },
  {
    id: 4,
    nameEn: "White T-Shirt",
    nameCn: "一件白色T恤",
    price: 200,
    inStock: true,
  },
  {
    id: 5,
    nameEn: "Canned Beans",
    nameCn: "一罐装豆类",
    price: 150,
    inStock: true,
  },
  {
    id: 6,
    nameEn: "Black Dress",
    nameCn: "一条黑色连衣裙",
    price: 800,
    inStock: true,
  },
  { id: 7, nameEn: "Oolong Tea", nameCn: "一杯乌龙茶", price: 400, inStock: true },
  { id: 8, nameEn: "Sneakers", nameCn: "一双运动鞋", price: 600, inStock: true },
  {
    id: 9,
    nameEn: "Laptop Bag",
    nameCn: "一个手提电脑包",
    price: 300,
    inStock: true,
  },
  {
    id: 10,
    nameEn: "Instant Noodles",
    nameCn: "一包方便面",
    price: 100,
    inStock: true,
  },
  {
    id: 11,
    nameEn: "Hat",
    nameCn: "一顶帽子🧢",
    price: "500",
    inStock: true,
  },
];

export default function Shop() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
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
      <div className="p-8 bg-white">
        <h1 className="text-4xl mb-4">
          {isOn ? "Bold Beijing Shop" : "无所不有北京店铺"}
        </h1>
        <div className="grid grid-cols-3 gap-4 bg-white mt-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col ">
              <h2 className="text-3xl mb-2">
                {product[isOn ? "nameEn" : "nameCn"]}
              </h2>
              <p className="mb-2 text-xl">${product.price / 100}</p>
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
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 w-32 rounded mt-4 text-md"
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
              {product[isOn ? "nameEn" : "nameCn"]} - ${product.price / 100}
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
