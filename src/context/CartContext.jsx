import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    const exist = products.find((x) => x.id === product.id);
    if (exist) {
      setProducts(
        products.map((x) =>
          x.id === product.id
            ? {
                ...exist,
                amount: exist.amount + product.amount,
              }
            : x
        )
      );

      console.log(product.price * product.amount);
    } else {
      setProducts([...products, { ...product, amount: product.amount }]);
    }
  };

  const data = {
    products,
    addProducts,

    setProducts,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
