import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { products, setProducts, totalPrice } = useContext(CartContext);

  const removeItem = (id) => {
    const newCart = products.filter((product) => product.id !== id);
    setProducts(newCart);
  };
  const clearCart = () => {
    setProducts([]);
  };

  return (
    <div className="container bg-info bg-opacity-25 text-dark text-center animate__animated animate__fadeIn ">
      <h2 className="text-center text-light p-3">Carrito</h2>
      <div className="container text-center text-light">
        {products.length === 0 ? (
          <h2 className="text-center">El Carrito está vacío :(</h2>
        ) : (
          <div>
            {products.map((product) => {
              return (
                <div className="d-flex flex-column align-items-center ">
                  <ul
                    className="list-group bg-info bg-opacity-25 p-3 p-3   my-1 "
                    key={product.id}
                  >
                    <li className="list-group-item">
                      <img
                        className=" border border-light bg-dark bg-opacity-10"
                        src={`../../img/${product.img}`}
                        alt="imagenProductoMini"
                        style={{ background: "rgba(255, 255, 255, 0, 1)" }}
                      />
                    </li>
                    <li className="list-group-item">
                      <h3>Nombre: {product.name}</h3>
                    </li>
                    <li className="list-group-item">
                      Cantidad: {product.amount}
                    </li>
                    <li className="list-group-item">
                      <h4>Precio: ${product.price}</h4>
                    </li>
                    <li className="list-group-item">
                      <button
                        id={product.id}
                        className="btn btn-md btn btn-outline-primary mx-5 p-2 text-secondary"
                        onClick={() => removeItem(product.id)}
                      >
                        <i className="fas fa-trash-alt "></i>
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
            <div className="d-flex flex-column ">
              <div>
                <h5 className="my-2 text-secondary text-center">
                  PRECIO TOTAL
                </h5>
                <h3 className="my-1 text-secondary text-center text-success">
                  ${totalPrice}
                </h3>
              </div>
              <Link to="/buyerdata">
                <button className="btn btn-success">Finalizar compra</button>
              </Link>
              <button onClick={clearCart} className="btn btn-secondary mt-3 ">
                Limpiar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}
