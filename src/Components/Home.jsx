import React from "react";
import img from "../img/portada.png";
import ItemList from "./ItemListContainer";

export default function Home() {
  return (
    <div>
      <div className=" ">
        <img className="w-100" src={img} alt="banner" />
      </div>
      <div className="text-center bg-light bg-opacity-50 p-1 my-3">
        <h2 className="m-1">Productos Destacados</h2>
      </div>
      <div className="col-12   justify-content-center  ">
        <ItemList destacado={true} />
      </div>
    </div>
  );
}
