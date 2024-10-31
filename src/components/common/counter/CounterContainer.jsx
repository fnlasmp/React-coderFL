import React from "react";
import Counter from "./Counter";
import { useState } from "react";

const CounterContainer = ({ onAdd, stock, totalItems }) => {
  const [contador, setContador] = useState(totalItems); //x = [variable, funcion que hace camb.](array)

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Maximo stock");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo 1 producto");
    }
  };

  let childProps = {
    contador,
    sumar,
    restar,
    onAdd,
  };

  return <Counter {...childProps} />;
};

export default CounterContainer;
