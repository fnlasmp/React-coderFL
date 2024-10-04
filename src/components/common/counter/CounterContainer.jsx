import React from "react";
import Counter from "./Counter";
import { useState } from "react";

const CounterContainer = () => {
  const [contador, setContador] = useState(1); //x = [variable, funcion que hace camb.](array)

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  let childProps = {
    contador,
    sumar,
    restar,
  };

  return <Counter {...childProps} />;
};

export default CounterContainer;
