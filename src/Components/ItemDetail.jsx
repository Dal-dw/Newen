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
//import { useParams } from "react-router-dom";

export default function ItemDetail({ data }) {
  const [toggleButton, setToggleButton] = useState(false);
  //const { id } = useParams();

  const [itemCart, setItemCart] = useState({
    id: data.id,
    name: data.nombre,
    amount: 1,
    added: 1,
    img: data.img,
    price: data.precio,
  });
  console.log("amount: ", itemCart.amount);
  const { addProducts, products } = useContext(CartContext);

  const onAdd = (value) => {
    itemCart.amount = value;
  };

  const agregar = () => {
    addProducts(itemCart);

    itemCart.id ? setToggleButton(true) : setToggleButton(false);
  };

  //-------------------RETURN

  return (
    <div className="p-3 col-12">
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
          className="border  bg-light bg-opacity-10   w-sm-100 w-md-50   p-4"
          src={`${process.env.PUBLIC_URL}/img/${data.img}`}
        />
        <div className="    w-100  ">
          <Card.Title className="text-center text-success ">
            <h1>{data.nombre}</h1>
          </Card.Title>
          <Card.Text className="text-center">
            Descripcion del Producto en cuestion
          </Card.Text>
          <Card.Body className="card-body ">
            <ListGroup className="list-group-flush    ">
              <ListGroupItem>
                <h2 className="text-secondary ">${data.precio}</h2>
              </ListGroupItem>
              <ListGroupItem>Stock Disponible: {data.stock}</ListGroupItem>
              <ListGroupItem>TALLES</ListGroupItem>
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
                  Agregar
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
  );
}
