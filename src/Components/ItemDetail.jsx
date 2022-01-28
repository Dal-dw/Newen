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
            className="border border-secondary  bg-light bg-opacity-10 m-3  w-75 h-75 p-3 "
            src={`${process.env.PUBLIC_URL}/img/${data.img}`}
          />
          <div className="    w-100  ">
            <Card.Title className="text-center ">
              <h1 className="text-success">{data.nombre}</h1>
            </Card.Title>
            <Card.Body className="card-body  ">
              <ListGroup className="list-group-flush border border-secondary                  ">
                <ListGroupItem>
                  <h2 className="text-secondary ">${data.precio}</h2>
                </ListGroupItem>
                <ListGroupItem>Stock Disponible: {data.stock}</ListGroupItem>
                <ListGroupItem>
                  TALLES:{" "}
                  <span className="border border-secondary p-1 mx-1">S</span>
                  <span className="border border-secondary p-1 mx-1">M</span>
                  <span className="border border-secondary p-1 mx-1">L</span>
                  <span className="border border-secondary p-1 mx-1">XL</span>
                  <span className="border border-secondary p-1 mx-1">XXL</span>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>

            <Card.Body className=" text-center">
              {toggleButton === false ? (
                <div className="d-flex">
                  <ItemCount data={data} onAdd={onAdd} />

                  <Button
                    variant="success"
                    id={"botonAgregar"}
                    className=" d-flex w-100 justify-content-center h-50 mt-3 p-2   boton"
                    onClick={agregar}
                  >
                    Comprar
                  </Button>
                </div>
              ) : (
                <GoToCart />
              )}
            </Card.Body>
            <Card.Text className="p-3 m-3 border border-secondary text-left bg-primary bg-opacity-10">
              {data.descripcion}
            </Card.Text>
          </div>
        </Card>
        <div className="d-none">
          <Cart />
        </div>
      </div>
    </div>
  );
}
