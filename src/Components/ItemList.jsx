import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./Item";
import Loading from "./Loading";
import gorras from "../img/portadaGorras.jpg";
import remeras from "../img/portadaRemeras.jpg";
import ThemeContext from "../context/ThemeContext";
import db from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export default function ItemList(props) {
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  async function getProducts(db) {
    if (categoria) {
      const productosCol = query(
        collection(db, "productos"),
        where("categoria", "==", categoria)
      );

      const productosSnapshot = await getDocs(productosCol);
      const productosList = productosSnapshot.docs.map((doc) => doc.data());

      setLoading(false);
      return productosList;
    } else {
      const productosCol = query(
        collection(db, "productos"),
        where("destacado", "==", true)
      );

      const productosSnapshot = await getDocs(productosCol);
      const productosList = productosSnapshot.docs.map((doc) => doc.data());

      setLoading(false);
      return productosList;
    }
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
        <div className="w-100 ">
          {categoria === "remeras" ? (
            <img className="w-100" src={remeras} alt="" />
          ) : (
            <img className="w-100 " src={gorras} alt="" />
          )}
        </div>

        <div
          className={
            theme === false
              ? "d-flex justify-content-center"
              : "d-flex justify-content-center bg-dark"
          }
        >
          <div className="container row  ">
            {products.map((product) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                  key={product.id}
                >
                  <div className="   ">
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
