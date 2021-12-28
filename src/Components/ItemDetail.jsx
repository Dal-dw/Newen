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
  //console.log("data item: ", data);

  const [itemCart, setItemCart] = useState({
    id: data.id,
    name: data.nombre,
    amount: 1,
    added: 1,
    img: data.img,
    price: data.precio,
  });
  //console.log("data item2: ", itemCart);
  const { addProducts, products } = useContext(CartContext);

  const onAdd = (value) => {
    itemCart.amount = value;
  };

  const agregar = () => {
    //setToggleButton(true);

    addProducts(itemCart);
    console.log("agregar", itemCart);
  };
  //-------------------RETURN

  return (
    <div className="col-12 p-3 col-sm-12  container ">
      <Link to={`/productos/${data.categoria}`}>
        <button
          type="button"
          className="btn btn-outline-secondary text-light my-1"
        >
          Volver
        </button>
      </Link>
      <Card className="d-flex p-2  flex-row   " key={data.id}>
        <Card.Img
          className="border bg-light bg-opacity-10   p-4"
          style={{ width: "100%" }}
          src={`${process.env.PUBLIC_URL}/img/${data.img}`}
        />
        <div className="p-3 " style={{ width: "100%" }}>
          <Card.Title className="text-center text-success">
            <h2>{data.nombre}</h2>
          </Card.Title>
          <Card.Text className="text-center">
            Descripcion del Producto en cuestion
          </Card.Text>
          <Card.Body className="card-body">
            <ListGroup className="list-group-flush  ">
              <ListGroupItem>PRECIO: $ {data.precio}</ListGroupItem>
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
                  Agregar{data.id}
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
