import { Button } from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteProductById, total, totalItems }) => {
  const limpiarConAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se limpio el carrito con exito.",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "No se realizaron cambios.",
        });
      }
    });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Este es el carrito</h2>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>Titulo {product.title}</h2>
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

      {total > 0 ? (
        <>
          <h2>El total a pagar es : $ {total}</h2>
          <h2>El total de productos es: {totalItems}</h2>
          <Button
            sx={{ marginTop: 20 }}
            variant="contained"
            onClick={limpiarConAlert}
          >
            Limpiar carrito
          </Button>
        </>
      ) : (
        <h2>No tienes items en el carrito.</h2>
      )}
    </div>
  );
};

export default Cart;
