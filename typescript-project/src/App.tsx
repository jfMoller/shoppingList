import { useEffect, useState } from "react";
import { items } from "./mock-data";

export default function () {

  const [allItems, setAllitems] = useState<object[]>([])

  useEffect(()=>{
    setAllitems(items)
  },[items])

  const listItems = allItems.map(item => {
    return(
      <li key={item.name} className="
      flex items-center justify-between
       py-2">
        <span
          onClick={() => {console.log("click1")}}
        >
          {item.ingredients}
        </span>
        <button onClick={() => {console.log("click2")}}>X</button>
      </li>
    )
  })

  return (
    <section>{listItems}</section>
  );
}
