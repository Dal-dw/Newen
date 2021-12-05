import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/logo.png";
import CartWidget from "./CartWidget";

export default function NaviBar() {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100%"
              height="100"
              className="d-inline-block  bg-white p-1 "
            />
          </Navbar.Brand>
          <Navbar.Brand href="#3" className="font-weight-bold ">
            Newen Brand
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav
              className="me-auto my-3 my-lg-3"
              style={{ maxHeight: "300" }}
              navbar
            >
              <Nav.Link href="#action1">Home</Nav.Link>

              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Gorras</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Tabla de Talles
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Como comprar</Nav.Link>
              <Nav.Link href="#2">Quienes somos</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <CartWidget cantidade="10" />
      </Navbar>
    </div>
  );
}
