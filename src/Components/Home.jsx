import React, { useContext } from "react";
import img from "../img/portada.png";
import ItemList from "./ItemListContainer";
import ThemeContext from "../context/ThemeContext";

export default function Home() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className={theme === false ? " bg-default " : " bg-dark "}>
      <div className="">
        <img className="w-100" src={img} alt="banner" />
      </div>
      <div className="text-center bg-light bg-opacity-50 p-1 my-3">
        <h2 className="m-1">Productos Destacadosss</h2>
      </div>
      <div
        className={
          theme === false
            ? "col-12 bg-default justify-content-center"
            : "col-12 bg-dark justify-content-center"
        }
      >
        <ItemList destacado={true} />
      </div>
    </div>
  );
}
