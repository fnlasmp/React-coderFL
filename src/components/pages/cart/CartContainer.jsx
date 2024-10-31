import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteProductById={deleteProductById}
      total={total}
    />
  );
};

export default CartContainer;
