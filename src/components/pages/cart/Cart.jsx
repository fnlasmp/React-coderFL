import { Button } from "@mui/material";
import React from "react";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Este es el carrito</h2>

      {cart.map((product) => {
        return (
          <div>
            <h2 key={product.id}>Titulo {product.title}</h2>
            <h3>Precio {product.price}</h3>
            <h3>Cantidad {product.quantity}</h3>
            <h3>Subtotal: {product.price * product.quantity}</h3>
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <Button sx={{ marginTop: 20 }} variant="contained" onClick={clearCart}>
        Limpiar carrito
      </Button>

      <h2>El total a pagar es : $ {total}</h2>
    </div>
  );
};

export default Cart;
