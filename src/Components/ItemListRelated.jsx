import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./Item";
import Loading from "./Loading";

import ThemeContext from "../context/ThemeContext";
import db from "../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export default function ItemListRelated(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  const { categoria } = useParams();

  var cat = props.categoria;

  async function getProducts(db) {
    const productosCol = query(
      collection(db, "productos"),
      where("categoria", "==", cat),
      limit(3)
    );

    const productosSnapshot = await getDocs(productosCol);
    const productosList = productosSnapshot.docs.map((doc) => doc.data());

    setLoading(false);
    return productosList;
  }

  useEffect(() => {
    getProducts(db).then((resultProducts) => {
      setProducts(resultProducts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria]);

  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="animate__animated animate__fadeIn">
        <div
          className={
            theme === false
              ? "d-flex justify-content-center"
              : "d-flex justify-content-center bg-dark"
          }
        >
          <div className="container row  ">
            <h2 className="text-center my-3">Productos Relacionados</h2>
            {products.map((product) => {
              return (
                <div
                  className="p-3  col-sm-12 col-md-6 col-lg-6 col-xl-4 bg-info bg-opacity-25"
                  key={product.id}
                >
                  <div className="  p-3 ">
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
        </div>
      </div>
    );
  }
}
