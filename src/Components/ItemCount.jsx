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
          className="btn btn-secondary boton"
          onClick={removeItem}
          id={"botonMenos"}
        >
          -
        </button>
        <span className="m-3">{itemCount}</span>

        <button
          className="btn btn-success boton"
          onClick={updateItem}
          id={"botonMas"}
        >
          +
        </button>
      </div>
    </div>
  );
};
