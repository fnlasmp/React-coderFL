import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams(); //Siempre devuelve un objeto {}

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
    console.log("Se agrego al carrito");
    let productoCarrito = { ...item, quantity };
    addToCart(productoCarrito);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};
export default ItemDetailContainer;
