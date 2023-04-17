import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header
      className="
        w-screen h-[3rem]
        bg-gradient-to-r from-teal-400 to-blue-500
        "
    >
      <NavBar />
    </header>
  );
}
