import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";

import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ModalCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, setProducts } = useContext(CartContext);

  const totalPrice = products.reduce((a, c) => a + c.price * c.amount, 0);

  const removeItem = (id) => {
    const newCart = products.filter((product) => product.id !== id);
    setProducts(newCart);
  };
  const clearCart = () => {
    setProducts([]);
  };

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        <CartWidget onClick={handleShow} cantidade={products.length} />
      </div>

      <Modal show={show} onHide={handleClose} size="md" className=" p-2 ">
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>

        {products.length === 0 ? (
          <h2 className="text-center p-3">El Carrito está vacío :(</h2>
        ) : (
          <Modal.Body className="bg-info bg-opacity-25">
            {products.map((product) => {
              return (
                <div>
                  <ul
                    className="list-group bg-dark bg-opacity-25 p-3  m-1 d-flex"
                    key={product.id}
                  >
                    <li className="list-group-item">
                      <img
                        className="w-100 border border-light bg-dark bg-opacity-10"
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

            <Modal.Footer className="d-flex flex-column ">
              <div>
                <h5 className="my-2 text-secondary text-center">
                  PRECIO TOTAL
                </h5>
                <h3 className="my-1 text-secondary text-center text-success">
                  ${totalPrice}
                </h3>
                <Link to="/cart">
                  <Button variant="success" onClick={handleClose}>
                    Finalizar Compra
                  </Button>
                </Link>
              </div>
              <div className="d-flex flex-column m-1">
                <button onClick={clearCart} className="btn btn-secondary m-1 ">
                  Limpiar Carrito
                </button>
                <Button
                  className=" m-1"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Seguir Comprando
                </Button>
              </div>
            </Modal.Footer>
          </Modal.Body>
        )}
      </Modal>
    </>
  );
}
