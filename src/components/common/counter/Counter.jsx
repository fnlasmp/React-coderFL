import { Button } from "@mui/material";
import { useState } from "react";
const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div>
      <Button variant="contained" onClick={sumar} disabled={contador >= stock}>
        Sumar
      </Button>
      <h2>{contador}</h2>
      <Button variant="contained" onClick={restar} disabled={contador === 1}>
        Restar
      </Button>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
