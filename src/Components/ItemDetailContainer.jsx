import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import DataProducts from "./products.json";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(DataProducts);
      setLoading(false);
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
  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="container">
        <ItemDetail data={products} />;
      </div>
    );
  }
}
