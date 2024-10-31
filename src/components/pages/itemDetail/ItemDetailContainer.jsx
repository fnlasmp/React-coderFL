import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams(); //Siempre devuelve un objeto {}

  let totalItems = getTotalQuantityById(id);

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    } else {
      console.error("Product not found");
    }
    setLoading(false); // Cambia el estado de carga
  }, [id]);

  const onAdd = (quantity) => {
    let productoCarrito = { ...item, quantity };
    addToCart(productoCarrito);
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Se agrego al carrito",
      showConfirmButton: false,
      timer: 1800,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};
export default ItemDetailContainer;
