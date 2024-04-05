"use client"

import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  { id: 1, name: 'temu worker', price: 100, inStock: false },
  { id: 2, name: '🌿', price: 421, inStock: true },
  // add more products as needed
];

export default function Shop() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    if (product.inStock) {
      setCart([...cart, product]);
    }
  };

  const checkout = () => {
    
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Bold Beijing Shop</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center justify-between p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl mb-2">{product.name}</h2>
            <p className="mb-2">${product.price}</p>
            <p className="mb-2">{product.inStock ? 'In Stock' : 'Sold Out'}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded" disabled={!product.inStock}>
              Add to Cart
            </button>
            <button className="text-red-500">
              ❤️
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl mt-4">Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <button onClick={checkout} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Checkout
      </button>
    </div>
  );
}