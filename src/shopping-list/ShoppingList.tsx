import React from "react";
import { useEffect, useState } from "react";
import { items } from "../../server/mock-data";

interface Item {
  _id: string;
  name: string;
  ingredients: string[];
  category: string;
  price: number;
  isCompleted: boolean;
}

export default function ShoppingList() {
  const [allItems, setAllItems] = useState<Item[]>([]);
  useEffect(() => {
    setAllItems(items);
  }, [items]);

  function addItem(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("add item");
  }
  function toggleItem(event: React.MouseEvent<HTMLSpanElement>, _id: string) {
    event.preventDefault();
    let updatedItems = allItems.map((item) => {
      if (item._id === _id) {
        if (!item.isCompleted) {
          return { ...item, isCompleted: true };
        } else {
          return { ...item, isCompleted: false };
        }
      }
      return item;
    });
    setAllItems(updatedItems);
  }

  function editItem(event: React.MouseEvent<HTMLElement>, _id: string) {
    event.preventDefault();
    let updatedItems = allItems.map((item) => {
      if (item._id === _id) {
        let input = prompt("Enter a new item: ");
        if (input !== "" && input !== " " && input !== null) {
          return { ...item, name: input };
        }
      }
      return item;
    });
    setAllItems(updatedItems);
  }
  function removeItem(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    console.log("remove item");
  }

  const listItems = allItems.map((item) => {
    const itemClass = item.isCompleted
      ? "flex-1 cursor-pointer hover:text-blue-500 w-5 line-through text-gray-400"
      : "flex-1 cursor-pointer hover:text-blue-500 w-5";

    return (
      <li
        key={item.name}
        className="flex items-center py-4 border-b border-gray-300 hover:bg-gray-100 transition-colors duration-200 ease-in-out"
      >
        <span
          className={itemClass}
          onClick={(event) => toggleItem(event, item._id)}
        >
          {item.name}
        </span>
        <button
          className="ml-4 text-sm font-semibold text-green-500 hover:text-green-700 transition-colors duration-200 ease-in-out"
          onClick={(event) => editItem(event, item._id)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="ml-4 text-sm font-semibold text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out"
          onClick={removeItem}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </li>
    );
  });

  return (
    <section className="h-screen max-w-3xl mx-auto w-[15rem] flex flex-col justify-center bg-gray-50 rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        My Shopping List
      </h1>

      <ul className="space-y-4">{listItems}</ul>
      <button
        onClick={addItem}
        className="mt-8 py-2 px-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Add Item
      </button>
    </section>
  );
}
