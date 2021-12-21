import React from "react";
import { Link } from "react-router-dom";

export default function GoToCart() {
  return (
    <div>
      <Link className="text-decoration-none" to="/cart">
        <button className="btn btn-secondary  d-flex col-12 justify-content-center p-2   boton">
          Ir al Carrito
        </button>
      </Link>
    </div>
  );
}
