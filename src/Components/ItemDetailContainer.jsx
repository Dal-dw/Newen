import React, { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import DataProducts from "./products.json";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme, changeTheme } = useContext(ThemeContext);

  const getProduct = new Promise((resolve) => {
    resolve(DataProducts);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    getProduct.then((resultProducts) => {
      resultProducts.filter((resultProduct) => {
        if (resultProduct.id === parseInt(id)) {
          return setProduct(resultProduct);
        }
      });
    });
  }, [id]);

  //const siguiente = id < DataProducts.length ? parseInt(id) + 1 : parseInt(id);
  //const anterior = id > 1 ? parseInt(id) - 1 : parseInt(id);

  //-----RETURN------
  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <div
        className={theme === false ? "d-flex p-1  bg-default" : " bg-dark p-1"}
      >
        <Link className="d-flex text-decoration-none " to={`/${id}`}>
          <button className="btn  btn-outline-secondary btn-block text-secondary my-5">
            Producto anterior <br />
            <i className="fas fa-angle-double-left"></i>
          </button>
        </Link>

        <ItemDetail data={product} />

        <Link className="d-flex text-decoration-none " to={`/${id}`}>
          <button className="btn  btn-outline-secondary btn-block text-secondary my-5 p">
            Producto siguiente <br />
            <i className="fas fa-angle-double-right"></i>
          </button>
        </Link>
      </div>
    );
  }
}
