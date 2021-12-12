import React from "react";
import img from "../img/portada.png";
import ItemList from "./ItemList";

export default function Home() {
  return (
    <div>
      <img className="w-100" src={img} alt="" />
      <div className="text-center bg-light">
        <h2>Productos Destacados</h2>
      </div>
      <div className="col-12  d-flex justify-content-center  ">
        <ItemList destacado={true} />
      </div>
    </div>
  );
}
