"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  { id: 3, name: "Rice 🍵", price: 1000, inStock: true },
  { id: 4, name: "Authentic Clothes 👘", price: 100, inStock: true },
  { id: 5, name: "Tea 🍵", price: 500, inStock: false },
  { id: 6, name: "Chinese Flag 🇨🇳", price: 200, inStock: true },

  // add more products as needed
];

export default function Shop() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    if (product.inStock) {
      setCart([...cart, product]);
    }
  };

  const checkout = () => {};

  return (
    <div className="p-8 bg-white">
      <h1 className="text-4xl mb-4">Bold Beijing Shop</h1>
      <div className="grid grid-cols-3 gap-4 bg-white mt-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col ">
            <h2 className="text-3xl mb-2">{product.name}</h2>
            <p className="mb-2 text-xl">${product.price}</p>
            <p className={"mb-2 text-xl " + ""}>
              {product.inStock ? "In Stock" : "Sold Out"}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 w-32 rounded mt-4 text-sm"
              disabled={!product.inStock}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl mt-4">Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button
        onClick={checkout}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Checkout
      </button>
    </div>
  );
}
