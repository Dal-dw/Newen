import React, { useState, useEffect } from "react";
//import Cart from "./Cart";
import ProductCard from "./Item";
import Loading from "./Loading";
import DataProducts from "./products.json";

import gorras from "../img/portadaGorras.jpg";

export default function ItemList(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(DataProducts);
      setLoading(false);
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((resultProducts) => {
      setProducts(resultProducts);
    });
  }, []);

  //------------------RETURN----------------/ acà envío un prop desde el padre para filtrar los productos por categorìa osi es destacado y asì poder reutilizar este componente
  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <>
        <div className="w-100">
          <img className="w-100" src={gorras} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="container row ">
            {products.map((product) => {
              if (
                product.categoria === props.filter ||
                product.destacado === props.destacado
              ) {
                return (
                  <div
                    className="col-sm-12 col-md-6 col-xl-4 "
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
        </div>
      </>
    );
  }
}
