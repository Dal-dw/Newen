import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Table } from "react-bootstrap";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ModalCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, setProducts, tPrice } = useContext(CartContext);

  const removeItem = (id) => {
    const newCart = products.filter((product) => product.id !== id);
    setProducts(newCart);
  };
  const clearCart = () => {
    setProducts([]);
  };

  console.log("Items en el Carrito (CartContext):", products, products.length);

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        <CartWidget onClick={handleShow} cantidade={products.length} />
      </div>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                          onClick={() => removeItem(product.id)}
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
                    <h4 className="my-1 text-secondary">
                      ${tPrice}(Todavia no suma bien)
                    </h4>
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Seguir Comprando
          </Button>

          <Link to="/cart">
            <Button variant="success" onClick={handleClose}>
              Finalizar Compra
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
