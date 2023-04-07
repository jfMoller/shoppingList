import React from 'react';
import { useEffect, useState } from "react";
import { items } from "../../server/mock-data";

interface Item {
  name: string;
  ingredients: string[];
  category: string;
  price: number;
}

export default function () {
  const [allItems, setAllItems] = useState<Item[]>([]);

  useEffect(() => {
    setAllItems(items);
  }, [items]);

  const listItems = allItems.map((item) => {
    return (
      <li
        key={item.name}
        className="flex items-center py-4 border-b border-gray-300"
      >
        <span
          className="flex-1 cursor-pointer hover:text-blue-500 w-5"
          onClick={() => {
            console.log("click1");
          }}
        >
          {item.name}
        </span>
        <button
          className="ml-4 text-sm font-semibold text-blue-500 hover:text-blue-700"
          onClick={() => {
            console.log("click2");
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="ml-4 text-sm font-semibold text-red-500 hover:text-red-700"
          onClick={() => {
            console.log("click3");
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </li>
    );
  });

  return (
    <section className="h-screen max-w-3xl mx-auto w-[15rem] flex flex-col justify-center">
      {listItems}
    </section>
  );
}
