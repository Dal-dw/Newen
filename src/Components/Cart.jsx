import React from "react";

export default function Cart() {
  const cartContain = [];
  return (
    <div className="container bg-info bg-opacity-25 text-dark text-center  col-sm-5 col-md-3 col-lg-12 my-3 ">
      <div className="container text-center text-light">
        <h3>Lista de compra</h3>

        <h5>Cart Items</h5>
        <ul>
          <li>{cartContain}</li>
        </ul>
      </div>
    </div>
  );
}
