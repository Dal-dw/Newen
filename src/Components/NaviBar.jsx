import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
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
        className="border border-secondary bg-opacity-50 "
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

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav
              className="me-auto my-3 my-lg-3"
              style={{ maxHeight: "300" }}
              navbar
            >
              <Link
                href="#2"
                to="/"
                className="text-decoration-none text-light"
              >
                <Navbar.Brand>Newen Brand</Navbar.Brand>
              </Link>

              <Link
                href="#"
                to="/productos/remeras"
                className="text-decoration-none mx-1 mt-3 "
              >
                Remeras
              </Link>

              <Link
                href="#1"
                to="/productos/gorras"
                className="text-decoration-none mx-1 mt-3"
              >
                Gorras
              </Link>

              <Link
                href="#1"
                to="/ref"
                className="text-decoration-none mx-1 mt-3"
              >
                Como comprar
              </Link>
              <Link
                href="#1"
                to="/ref"
                className="text-decoration-none mx-1 mt-3"
              >
                Quienes somos
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <SwitchTheme changeTheme={changeTheme} />
        <ModalCart />
      </Navbar>
    </div>
  );
}
