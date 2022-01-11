import React, { useState, useEffect, useContext } from "react";
//import Cart from "./Cart";
import ProductCard from "./Item";
import Loading from "./Loading";
//import DataProducts from "./products.json";
//import { useParams } from "react-router-dom";
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
  const { theme, changeTheme } = useContext(ThemeContext);

  // const getProducts = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(DataProducts);
  //     setLoading(false);
  //   }, 2000);
  // });

  async function getProducts(db) {
    console.log(categoria);
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
  }, [categoria]);

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
        <div className="w-100 ">
          {props.filter === "Gorras" ? (
            <img className="w-100" src={gorras} alt="" />
          ) : (
            <img className="w-100" src={remeras} alt="" />
          )}
        </div>
        <div
          className={
            theme === false
              ? "d-flex justify-content-center"
              : "d-flex justify-content-center bg-dark"
          }
        >
          <div className="container row ">
            {products.map((product) => {
              return (
                <div className="col-sm-12 col-md-6 col-xl-4 " key={product.id}>
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
        </div>
      </>
    );
  }
}
