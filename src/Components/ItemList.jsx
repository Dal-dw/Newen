import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import ProductCard from "./Item";
import DataProducts from "./remeras.json";

export default function ItemList(props) {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(DataProducts);
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((resultProducts) => {
      setProducts(resultProducts);
    });
  }, []);

  //------------------RETURN----------------/ acà envío un prop desde el padre para filtrar los productos por categorìa osi es destacado y asì poder reutilizar este componente
  return (
    <div className="d-flex justify-content-center">
      <div className="container row ">
        {products.map((product) => {
          if (
            product.categoria === props.filter ||
            product.destacado === props.destacado
          ) {
            return (
              <div
                className="col-sm-12 col-md-6 col-xl-4   bd-highlight"
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
          }
        })}
      </div>
      <Cart />
    </div>
  );
}
