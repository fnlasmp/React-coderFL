import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../config-firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      name: "",
      phone: "",
      email: "",
    });

    if (user.name.length < 20) {
      setErrors({ ...errors, name: "La longitud no es valida" });
    }

    setIsLoading(true);

    let total = getTotalAmount();

    const order = {
      buyer: user,
      items: cart,
      total,
    };

    // guardamos la orden en firebase
    let refCollection = collection(db, "Ordenes");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((elemento) => {
      updateDoc(doc(db, "Productos", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (isLoading) {
    return <h2>cargando....</h2>;
  }

  return (
    <div>
      {orderId ? (
        <h1>Gracias por su compra, el codigo de su orden es: {orderId}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="name"
          />
          <span>{errors.name}</span>
          <input
            type="number"
            placeholder="telefono"
            onChange={handleChange}
            name="phone"
            required
          />
          <input
            type="text"
            placeholder="email"
            onChange={handleChange}
            name="email"
          />
          <button>Comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
