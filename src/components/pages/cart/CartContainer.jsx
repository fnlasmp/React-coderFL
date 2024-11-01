import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalAmount, getTotalItems } =
    useContext(CartContext);

  let total = getTotalAmount();
  let totalItems = getTotalItems();

  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteProductById={deleteProductById}
      total={total}
      totalItems={totalItems}
    />
  );
};

export default CartContainer;
