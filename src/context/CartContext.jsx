import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteProductById = (id) => {
    let arrayFiltrado = cart.filter((product) => product.id !== id);
    setCart(arrayFiltrado);
  };

  const getTotalAmount = () => {
    let totalCarrito = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCarrito;
  };

  const getTotalItems = () => {};

  const clearCart = () => {
    setCart([]);
  };

  let data = { cart, addToCart };
  return <CartContextProvider value={data}>{children}</CartContextProvider>;
};
