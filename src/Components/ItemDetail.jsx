import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

export default function ItemDetail({ data }) {
  const onAdd = (value) => {};

  const agregar = () => {
    console.log(data);
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
          <ItemCount data={data} onAdd={onAdd} />
          <Button
            variant="success"
            id={"botonAgregar"}
            className="col-12 my-2 boton"
            onClick={agregar}
          >
            Agregar
          </Button>
        </Card.Body>

        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
