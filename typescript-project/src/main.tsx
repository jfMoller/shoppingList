import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import ShoppingList from './shopping-list/ShoppingList.tsx';

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path={"/"} element={<App />}>
      <Route index element={<ShoppingList/>} />
    </Route>
  )
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

