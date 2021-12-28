import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/logo.png";

import { Link } from "react-router-dom";
import ModalCart from "./ModalCart";
import ThemeContext from "../context/ThemeContext";
import SwitchTheme from "./SwitchTheme";

export default function NaviBar() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar
        bg={theme === false ? "primary" : "dark"}
        expand="lg"
        variant="dark"
        className="border border-secondary bg-opacity-50"
      >
        <Container fluid>
          <Link to={`/`}>
            <div className="navbar-brand p-2 ">
              <img
                alt=""
                src={logo}
                width="110%"
                height="100"
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
                      to="/productos/remeras"
                      className="text-decoration-none text-dark"
                    >
                      Remeras
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/productos/gorras"
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
          </Navbar.Collapse>
        </Container>

        <SwitchTheme changeTheme={changeTheme} />
        <ModalCart />
      </Navbar>
    </div>
  );
}
