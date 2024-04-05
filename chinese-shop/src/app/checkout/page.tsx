"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
            {isOn ? "Checkout" : "查看"}
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

        <h2 className="text-2xl mt-4">{isOn ? "Cart" : "购物车"}</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <h3 className="text-xl">
                  {product[isOn ? "nameEn" : "nameCn"]}
                </h3>
                <p className="text-lg">${product.price / 100}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 w-32 rounded mt-4 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h1 className="mt-6 text-4xl">{isOn ? "Total" : "全部的钱"}</h1>
        <h2 className="text-2xl">
          ${cart.reduce((acc, p) => acc + p.price, 0) / 100}
        </h2>
      </div>
    </>
  );
}
