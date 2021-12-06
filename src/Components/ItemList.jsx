import React, { useState, useEffect } from "react";
import ItemListContainer from "./Cart";
import ProductCard from "./Item";
import DataProducts from "./remeras.json";

export default function Main() {
  const [products, setProducts] = useState([]);

  const useProducts = new Promise((resolve) => {
    resolve(DataProducts);
  });

  useEffect(() => {
    useProducts.then((data) => {
      setTimeout(() => {
        setProducts(data);
      }, 2000);
    });
  });
  return (
    <div className="d-flex">
      <div className="row   ">
        {products.map((product) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-xl-4  bd-highlight"
              key={product.id}
            >
              <div className="mx-1 ">
                <ProductCard
                  id={product.id}
                  nombre={product.nombre}
                  color={product.color}
                  precio={product.precio}
                  img={product.img}
                  stock={product.stock}
                  added={product.added}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Esto lo debería transformar en un componente individual e importarlo en App. */}
      <div className="bg-light  col-sm-5 col-md-3 col-lg-3 my-3 ">
        <ItemListContainer greeting="Este es el greeting" />
      </div>
    </div>
  );
}
