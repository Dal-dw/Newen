import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard(props) {
  let [itemCount, setItemCount] = useState(props.added);

  let [stockCount, setStockCount] = useState(props.stock);

  const updateItem = () => {
    if (itemCount < props.stock) {
      setItemCount(itemCount + 1);
      setStockCount(stockCount - 1);
    }
  };

  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      setStockCount(stockCount + 1);
    }
  };
  const agregar = () => {
    console.log(props);
  };

  //----------RETURN-------
  return (
    <div className="d-flex row col-9 m-3   ">
      <div
        className="  col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"
        key={props.id}
      >
        <Card style={{ width: "100%" }} className="p-1  bg-light">
          <Card.Body>
            <img
              className="card-img-top"
              src={`${process.env.PUBLIC_URL}/img/${props.img}`}
              alt="img"
            />
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text> {props.color} </Card.Text>
            <Card.Title> ${props.precio} </Card.Title>
            <div className="d-flex p-3 bd-highlight justify-content-around">
              <button className="btn btn-secondary" onClick={removeItem}>
                -
              </button>
              <span>{itemCount}</span>
              <button
                className="btn btn-success"
                onClick={updateItem}
                id={props.id}
              >
                +
              </button>
            </div>
            <span>Disponibles {stockCount}</span>
            <Button variant="success" className="col-12 my-2" onClick={agregar}>
              Agregar
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
