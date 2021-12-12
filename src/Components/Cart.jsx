import React from "react";

export default function Cart(props) {
  return (
    <div className="bg-light  col-sm-5 col-md-3 col-lg-3 my-3 d-none">
      <aside>
        <div className="container text-center ">
          <h5>Lista de compra</h5>
        </div>
        <ul>
          <li>{props.greeting}</li>
        </ul>
      </aside>
    </div>
  );
}
