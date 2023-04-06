import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import ShoppingList from "./shopping-list/ShoppingList";

export default function () {
  return (
    <>
      <Outlet/>
    </>
  );
}
