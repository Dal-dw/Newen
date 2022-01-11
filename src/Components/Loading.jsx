import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Loading() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={theme === false ? "bg-default " : "  bg-dark"}
      style={{ height: "100vh" }}
    >
      <div className="spinner-border text-danger m-5" role="status"></div>
    </div>
  );
}
