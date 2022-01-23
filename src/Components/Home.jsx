import React, { useContext } from "react";
import img from "../img/portada.png";
import img2 from "../img/portada2.png";
import img3 from "../img/portadaRemeras2.jpg";
import ItemListHome from "./ItemListHome";
import ThemeContext from "../context/ThemeContext";
import { Carousel } from "react-bootstrap";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === false ? " bg-default " : " bg-dark "}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="text-center bg-light bg-opacity-50 p-1 my-3">
        <h2 className="m-1">Productos Destacados</h2>
      </div>
      <div
        className={
          theme === false
            ? "col-12 bg-default justify-content-center"
            : "col-12 bg-dark justify-content-center"
        }
      >
        <ItemListHome destacado={true} />
      </div>
    </div>
  );
}
