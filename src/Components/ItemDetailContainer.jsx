import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import DataProducts from "./remeras.json";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const getProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(DataProducts);
    }, 2000);
  });

  useEffect(() => {
    getProduct.then((resultProducts) => {
      resultProducts.filter((resultProduct) => {
        if (resultProduct.id === parseInt(id)) {
          return setProducts(resultProduct);
        }
      });
    });
  }, []);

  //-----RETURN------

  return (
    <div>
      <ItemDetail data={products} />;
    </div>
  );
}
