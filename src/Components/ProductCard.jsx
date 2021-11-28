import React, { useState, useEffect } from "react";
import remera1 from "../img/remera1.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard({ stock, initial }) {
  const [itemCount, setItemCount] = useState(initial);

  const updateItem = () => {
    if (itemCount < stock) {
      setItemCount(itemCount + 1);
    }
  };
  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div className="m-3 col-3 text-center">
      <Card style={{ width: "100%" }} className="p-1 bg-light">
        <Card.Img variant="top" src={remera1} />
        <Card.Body>
          <Card.Title>VOLCÁN | AZUL MARINO</Card.Title>
          <Card.Text>$2.590</Card.Text>
          <div className="d-flex p-3 bd-highlight justify-content-around">
            <button className="btn btn-secondary" onClick={removeItem}>
              -
            </button>
            <span>{itemCount}</span>
            <button className="btn btn-success" onClick={updateItem}>
              +
            </button>
          </div>
          <span>Disponibles {stock}</span>
          <Button variant="success" className="col-12">
            Agregar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
