import { useState } from "react";
const Counter = () => {
  //estados
  const [contador, setContador] = useState(0); //x = [variable, funcion que hace camb.](array)

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador:{contador} </h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
