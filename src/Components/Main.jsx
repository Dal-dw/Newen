import React from "react";
import ItemListContainer from "./ItemListContainer";
import ProductCard from "./ProductCard";

export default function Main() {
  return (
    <div className="d-flex  p-3 bd-highlight ">
      <div className="d-flex  col-9 mx-1">
        <ProductCard initial={1} stockInicial={20} />
        <ProductCard initial={1} stockInicial={15} />
      </div>
      <div className="bg-light col-3  ">
        {" "}
        {/* visually-hidden */}
        <ItemListContainer greeting="Este es el greeting" />
      </div>
    </div>
  );
}
