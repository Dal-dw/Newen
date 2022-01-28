import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Item(props) {
  return (
    <div className="d-flex  row col-12 my-3   ">
      <div
        className=" col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"
        key={props.id}
      >
        <Card className="w-100">
          <Card.Body>
            <img
              className="card-img-top border border-secondary bg-success bg-opacity-10 "
              src={`${process.env.PUBLIC_URL}/img/${props.img}`}
              alt="img"
            />
            <Card.Title className="text-secondary my-1">
              {props.nombre}
            </Card.Title>
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
