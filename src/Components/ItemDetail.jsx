import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import GoToCart from "./GoToCart";
import CartContext from "../context/CartContext";

export default function ItemDetail({ data }) {
  const [toggleButton, setToggleButton] = useState(false);

  const [itemCart] = useState({
    id: data.id,
    name: data.nombre,
    amount: 1,
    added: 1,
    img: data.img,
    price: data.precio,
  });
  console.log("amount: ", itemCart.amount);
  const { addProducts } = useContext(CartContext);

  const onAdd = (value) => {
    itemCart.amount = value;
  };

  const agregar = () => {
    addProducts(itemCart);

    itemCart.id ? setToggleButton(true) : setToggleButton(false);
  };

  //-------------------RETURN

  return (
    <div className="container">
      <div className=" col-12 animate__animated animate__fadeIn ">
        <Link to={`/productos/${data.categoria}`}>
          <button
            type="button"
            className="btn btn-outline-secondary text-light my-1"
          >
            Volver
          </button>
        </Link>
        <Card
          className="d-flex p-3 w-100  flex-md-row flex-sm-column   "
          key={data.id}
        >
          <Card.Img
            className="border  bg-light bg-opacity-10 m-3  w-75 h-75 p-3 "
            src={`${process.env.PUBLIC_URL}/img/${data.img}`}
          />
          <div className="    w-100  ">
            <Card.Title className="text-center ">
              <h1 className="text-success">{data.nombre}</h1>
            </Card.Title>
            <Card.Text className="">
              <p className="p-3 text-left">{data.descripcion}</p>
            </Card.Text>
            <Card.Body className="card-body ">
              <ListGroup className="list-group-flush    ">
                <ListGroupItem>
                  <h2 className="text-secondary ">${data.precio}</h2>
                </ListGroupItem>
                <ListGroupItem>Stock Disponible: {data.stock}</ListGroupItem>
                <ListGroupItem>TALLES: S - M - L - XL - XXL </ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body className="container col-5 text-center">
              {toggleButton === false ? (
                <div>
                  <ItemCount data={data} onAdd={onAdd} />
                  <Button
                    variant="success"
                    id={"botonAgregar"}
                    className=" d-flex col-12 justify-content-center p-2   boton"
                    onClick={agregar}
                  >
                    Comprar
                  </Button>
                </div>
              ) : (
                <GoToCart />
              )}
            </Card.Body>
          </div>
        </Card>
        <div className="d-none">
          <Cart />
        </div>
      </div>
    </div>
  );
}
