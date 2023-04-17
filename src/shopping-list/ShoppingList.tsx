import React from "react";
import { useEffect, useState } from "react";
import { items } from "../../server/mock-data";

interface Item {
  _id: string;
  name: string;
  isCompleted: boolean;
}

export default function() {
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setAllItems(items);
  }, [items]);

  function handleInputChange(event: any) {
    setInputValue(event.target.value);
  }

  function addItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      inputValue !== "" &&
      inputValue !== " " &&
      inputValue !== null &&
      inputValue !== undefined
    ) {
      let newItem = {
        _id: (Math.random() * 99999).toString(),
        name: inputValue,
        isCompleted: false,
      };
      let updatedItems = [...allItems, newItem];
      setAllItems(updatedItems);
      setInputValue("");
    }
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
  function removeItem(event: React.MouseEvent<HTMLElement>, _id: string) {
    event.preventDefault();
    let updatedItems = [...allItems];
    updatedItems = updatedItems.filter((item) => item._id !== _id);
    setAllItems(updatedItems);
  }

  const listItems = allItems.map((item) => {
    const itemClass = item.isCompleted
      ? "flex-1 cursor-pointer hover:text-blue-500 w-5 line-through text-gray-400"
      : "flex-1 cursor-pointer hover:text-blue-500 w-5";

    return (
      <li
        key={(Math.random() * 99999).toString()}
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
          <i className="fa-solid fa-pen-to-square ml-[-3rem]"></i>
        </button>
        <button
          className="ml-4 text-sm font-semibold text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out"
          onClick={(event) => removeItem(event, item._id)}
        >
          <i className="fa-solid fa-xmark ml-[-2.5rem]"></i>
        </button>
   
      </li>
    );
  });

  return (
    <section className="h-screen w-screen flex flex-col items-center bg-gray-50 rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        My Shopping List
      </h1>
      <form
        onSubmit={(event) => addItem(event)}
        className="flex items-center w-full max-w-lg"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item..."
          className="border border-gray-400 px-2 py-1 rounded-md w-full text-black focus:outline-none"
        />
        <button
          type="submit"
          className="ml-4 py-2 px-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Add
        </button>
      </form>

      <ul className="mt-4 w-full max-w-lg">{listItems}</ul>
    </section>
  );
}
