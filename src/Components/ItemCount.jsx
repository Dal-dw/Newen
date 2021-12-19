import React, { useState } from "react";

export const ItemCount = ({ data, onAdd }) => {
  let [itemCount, setItemCount] = useState(1);

  const updateItem = () => {
    if (itemCount < data.stock) {
      setItemCount(itemCount + 1);
      onAdd(itemCount + 1);
    }
  };

  const removeItem = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
      onAdd(itemCount - 1);
    }
  };

  return (
    <div>
      <div className="d-flex p-3 bd-highlight justify-content-around">
        <button
          className="btn btn-secondary  boton"
          onClick={removeItem}
          id={"botonMenos"}
          style={{ height: "50px" }}
        >
          -
        </button>
        <span className="m-2" style={{ height: "50px" }}>
          <b>{itemCount}</b>
        </span>

        <button
          className="btn btn-success boton"
          onClick={updateItem}
          id={"botonMas"}
          style={{ height: "50px" }}
        >
          +
        </button>
      </div>
    </div>
  );
};
