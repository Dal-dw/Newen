import React, { useState, useEffect } from "react";
import DataProducts from "../Components/remeras.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  let [itemCount, setItemCount] = useState(products.added);

  let [stockCount, setStockCount] = useState(products.stock);

  const updateItem = (id) => {
    itemCount < stockCount
      ? setItemCount(itemCount + 1)
      : setStockCount(stockCount - 1);
  };
  console.log(itemCount);
  const removeItem = (id) => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      setStockCount(stockCount + 1);
    }
  };
  const useProducts = new Promise((resolve) => {
    resolve(DataProducts);
  });

  useEffect(() => {
    useProducts.then((data) => {
      setProducts(data);
    });
  }, []);
  //----------RETURN-------
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div
            className="m-3 col sm-4 col-md-5 col-lg-4 col-xl-3 text-center"
            key={product.id}
          >
            <Card style={{ width: "100%" }} className="p-1 bg-light">
              <Card.Body>
                <img
                  className="card-img-top"
                  src={`${process.env.PUBLIC_URL}/img/${product.img}`}
                  alt="img"
                />
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text> {product.color} </Card.Text>
                <Card.Title> ${product.precio} </Card.Title>
                <div className="d-flex p-3 bd-highlight justify-content-around">
                  <button className="btn btn-secondary" onClick={removeItem}>
                    -
                  </button>
                  <span>{product.added}</span>
                  <button
                    className="btn btn-success"
                    onClick={updateItem}
                    id={product.id}
                  >
                    +
                  </button>
                </div>
                <span>Disponibles {product.stock}</span>
                <Button variant="success" className="col-12">
                  Agregar
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
