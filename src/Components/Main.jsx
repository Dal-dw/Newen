import React, { useState, useEffect } from "react";
import ItemListContainer from "./ItemListContainer";
import ProductCard from "./ProductCard";
import DataProducts from "../Components/remeras.json";

export default function Main() {
  const [products, setProducts] = useState([]);
  //let [itemCount, setItemCount] = useState(products.added);

  //let [stockCount, setStockCount] = useState(products.stock);

  /* const updateItem = (id) => {
    itemCount < stockCount
      ? setItemCount(itemCount + 1)
      : setStockCount(stockCount - 1);
  };
  console.log(itemCount);
  const removeItem = (id) => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      setStockCount(stockCount + 1);
    }
  }; */
  const useProducts = new Promise((resolve) => {
    resolve(DataProducts);
  });

  useEffect(() => {
    useProducts.then((data) => {
      setProducts(data);
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
      <div className="bg-light  col-sm-5 col-md-3 col-lg-3 my-3 ">
        <ItemListContainer greeting="Este es el greeting" />
      </div>
    </div>
  );
}
