import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export default function ItemDetail({ data }) {
  let [itemCount, setItemCount] = useState(1);

  let [stockCount, setStockCount] = useState(data.stock);
  console.log(stockCount);

  const updateItem = () => {
    if (itemCount < data.stock) {
      setItemCount(itemCount + 1);
      setStockCount(stockCount - 1);
    }
  };

  const removeItem = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
      setStockCount(stockCount + 1);
    }
  };
  const agregar = () => {
    console.log(data);
    var botonAgregar = document.getElementById("botonAgregar");
    var botonMas = document.getElementById("botonMas");
    var botonMenos = document.getElementById("botonMenos");

    botonAgregar.setAttribute("disabled", "");
    botonMas.setAttribute("disabled", "");
    botonMenos.setAttribute("disabled", "");
  };
  //-------------------RETURN

  return (
    <div className="d-flex justify-content-center m-4 container">
      <Card.Img
        className="border border-primary  p-4"
        src={`${process.env.PUBLIC_URL}/img/${data.img}`}
        style={{ width: "45%" }}
      />
      <Card className="bg-light p-3" style={{ width: "40%" }}>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>Descripcion del Producto en cuestion</Card.Text>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>PRECIO: $ {data.precio}</ListGroupItem>
            <ListGroupItem>Stock Disponible: {data.stock}</ListGroupItem>
            <ListGroupItem>TALLES</ListGroupItem>
          </ListGroup>
        </Card.Body>
        <Card.Body className="container col-5 text-center">
          <div className="d-flex p-3 bd-highlight justify-content-around">
            <button
              className="btn btn-secondary boton"
              onClick={removeItem}
              id={"botonMenos"}
            >
              -
            </button>
            <span className="m-3">{itemCount}</span>

            <button
              className="btn btn-success boton"
              onClick={updateItem}
              id={"botonMas"}
            >
              +
            </button>
          </div>

          <Button
            variant="success"
            id={"botonAgregar"}
            className="col-12 my-2 boton"
            onClick={agregar}
          >
            Agregar
          </Button>
          <span className="m-3">{stockCount}</span>
        </Card.Body>

        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
