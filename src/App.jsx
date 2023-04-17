import { Outlet } from "react-router-dom";
import Header from "./header/Header"
import "./index.css";

export default function () {
  return (
    <>
   <Header />
      <Outlet />
    </>
  );
}
