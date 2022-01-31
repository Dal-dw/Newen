import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

//firebase
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default function BuyerData() {
  const { products, setProducts, totalPrice } = useContext(CartContext);
  const [nroOrden, setNroOrden] = useState();

  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const [buyerData, setBuyerData] = useState({
    telefono: "",
    nombre: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var date = { currentTime: new Date().toLocaleString() };
    let compra = {};
    compra.cliente = buyerData;
    compra.items = products;
    compra.total = totalPrice;
    compra.fecha = date;
    pushCompra(compra);

    setProducts([]);
  };

  const pushCompra = async (compra) => {
    const compraFirebase = collection(db, "ordenes");
    const agregarCompra = await addDoc(compraFirebase, compra);

    setNroOrden(agregarCompra.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBuyerData({ ...buyerData, [name]: value });
  };

  const handleKeyUp = (e) => {
    setEmail(buyerData.email);
    setEmailConfirm(buyerData.confirmEmail);
  };

  return (
    <>
      <div>
        {products.length === 0 ? (
          <div className="bg-info bg-opacity-25 d-flex justify-content-center align-items-center m-5">
            Felicidades! Tu orden fué registrada bajo el ID: {nroOrden}
            <button className="btn btn-success m-2">Ir a Mercado Pago</button>
          </div>
        ) : (
          <div className="bg-info m-5 p-3 bg-opacity-25">
            <Form onSubmit={handleSubmit}>
              {email === emailConfirm ? (
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    autoComplete="off"
                    required
                  />

                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              ) : (
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    autoComplete="off"
                    className="border-danger"
                    required
                  />

                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              )}

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Confirmar Email </Form.Label>
                <Form.Control
                  type="email"
                  name="confirmEmail"
                  placeholder="Email"
                  onChange={handleChange}
                  onKeyUp={handleKeyUp}
                  autoComplete="off"
                  required
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={buyerData.nombre}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Teléfono"
                  name="telefono"
                  value={buyerData.telefono}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-end ">
                <Link to="/cart" className="text-decoration-none text-light">
                  <Button variant="secondary" className="m-1">
                    Volver
                  </Button>
                </Link>
                {email === emailConfirm ? (
                  <Form.Group>
                    <Button type="submit" variant="success" className="m-1">
                      Pagar
                    </Button>
                  </Form.Group>
                ) : (
                  <Form.Group>
                    <Button
                      type="submit"
                      variant="secondary"
                      className="m-1"
                      disabled
                    >
                      Pagar
                    </Button>
                  </Form.Group>
                )}
              </div>
            </Form>
          </div>
        )}
      </div>
    </>
  );
}
