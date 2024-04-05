"use client";

import { useState } from "react";
export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
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
  );
}
