import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Table } from "react-bootstrap";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const [show, setShow] = useState(false);

  const { products, setProducts } = useContext(CartContext);
  const totalPrice = products.reduce((a, c) => a + c.price * c.amount, 0);

  const removeItem = (event) => {
    console.log(event.target.id);
    const deleted = products.filter(
      (product) => product.id !== parseInt(event.target.id)
    );
    setProducts(deleted);
    console.log(products);
  };
  const clearCart = () => {
    setProducts([]);
  };

  return (
    <div className="container bg-info bg-opacity-25 text-dark text-center  col-sm-5 col-md-3 col-lg-12 my-3 ">
      <div className="container text-center text-light">
        {products.length === 0 ? (
          <h2 className="text-center">Carrito Vacío :(</h2>
        ) : (
          <Table hover className="text-center fw-bold">
            <thead>
              <tr>
                <th className="col-1">Código#</th>
                <th className="col-3"></th>
                <th className="col-3">Nombre</th>
                <th className="col-1">Cantidad</th>
                <th className="col-1">Precio</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr className="" key={product.id}>
                    <td className="p-4">{product.id}</td>
                    <td className="p-1">
                      <img
                        className="w-50 "
                        src={`../../img/${product.img}`}
                        alt="imagenProductoMini"
                        style={{ background: "rgba(255, 255, 255, 0, 1)" }}
                      />
                    </td>
                    <td className="p-4">
                      <h4>{product.name}</h4>
                    </td>
                    <td className="p-4">{product.amount}</td>
                    <td className="p-4">
                      <h5>${product.price}</h5>
                    </td>
                    <td className="p-3">
                      <button
                        id={product.id}
                        className="btn btn-md btn btn-outline-primary  p-2 text-secondary"
                        onClick={removeItem}
                      >
                        <i className="fas fa-trash-alt "></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <button
                    onClick={clearCart}
                    className="btn btn-secondary my-4"
                  >
                    Limpiar Carrito
                  </button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h5 className="my-2 text-secondary">PRECIO TOTAL</h5>
                  <h4 className="my-1 text-secondary">${totalPrice}</h4>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="btn btn-success">PAGAR</button>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}
