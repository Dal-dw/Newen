import React from "react";

export default function ItemListContainer(props) {
  return (
    <aside>
      <div className="container text-center">
        <h5>Lista de compra</h5>
      </div>
      <ul>
        <li>{props.greeting}</li>
      </ul>
    </aside>
  );
}
