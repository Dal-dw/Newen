import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Item(props) {
  //----------RETURN-------
  return (
    <div className="d-flex  row col-9 m-5   ">
      <div
        className=" col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"
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

            <Link to={`/${props.id}`}>
              <Button
                variant="success"
                id={`botonDetalles + ${props.id}`}
                className="col-12 my-2 boton"
              >
                Detalles
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
