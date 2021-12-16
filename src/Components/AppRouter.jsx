import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";

import NaviBar from "./NaviBar";
import NotFoundPage from "./NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NaviBar />
      <Routes>
        <Route
          path="/productos/remeras"
          element={<ItemList filter="Remeras" />}
        />
        <Route
          path="/productos/gorras"
          element={<ItemList filter="Gorras" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
