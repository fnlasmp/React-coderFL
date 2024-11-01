import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../../config-firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams(); //Siempre devuelve un objeto {}

  let totalItems = getTotalQuantityById(id);

  useEffect(() => {
    let productCollection = collection(db, "Productos");
    let refDoc = doc(productCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
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
