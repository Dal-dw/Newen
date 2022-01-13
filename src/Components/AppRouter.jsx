import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Footer from "./Footer";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemListContainer";
import { CartProvider } from "../context/CartContext";

import NaviBar from "./NaviBar";
import NotFoundPage from "./NotFoundPage";
import Success from "./Sucess";
import BuyerData from "./BuyerData";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NaviBar />
        <Routes>
          <Route
            path="/productos/:categoria"
            element={<ItemList filter="Remeras" />}
          />
          <Route
            path="/productos/:categoria"
            element={<ItemList filter="Gorras" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/:id" element={<ItemDetailContainer />} />
          <Route path="/buyerdata" element={<BuyerData />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}
