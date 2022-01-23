import React, { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
//import DataProducts from "./products.json";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ThemeContext from "../context/ThemeContext";

import { doc, getDoc } from "firebase/firestore/lite";
import db from "../firebase";
import ItemListRelated from "./ItemListRelated";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  console.log(product.categoria);

  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  async function getProduct(db) {
    const docRef = doc(db, "productos", id);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let producto = docSnap.data();
      setProduct(producto);
      setLoading(false);
    } else {
      console.log("NO EXISTE");
    }
  }
  useEffect(() => {
    getProduct(db);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <div
          className={
            theme === false ? "d-flex  p-1  bg-default" : " bg-dark p-1"
          }
        >
          <ItemDetail data={product} />
        </div>
        <ItemListRelated categoria={product.categoria} />
      </div>
    );
  }
}
