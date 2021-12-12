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
import { Link } from "react-router-dom";

export default function NaviBar() {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container fluid>
          <Link to={`/`}>
            <div className="navbar-brand p-3 ">
              <img
                alt=""
                src={logo}
                width="110%"
                height="110"
                className="d-inline-block  bg-white p-1  "
              />
            </div>
          </Link>

          <Link to="/" className="text-decoration-none text-light">
            <Navbar.Brand className="font-weight-bold  text-decoration-none text-light ">
              Newen Brand
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav
              className="me-auto my-3 my-lg-3"
              style={{ maxHeight: "300" }}
              navbar
            >
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <ul>
                  <li>
                    <Link
                      to="/remeras"
                      className="text-decoration-none text-dark"
                    >
                      Remeras
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gorras"
                      className="text-decoration-none text-dark "
                    >
                      Gorras
                    </Link>
                  </li>
                </ul>

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
