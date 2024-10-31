import { Button } from "@mui/material";
import { useState } from "react";
const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={{ marginLeft: "50px" }}>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <h2>{contador}</h2>
      <Button variant="contained" onClick={restar}>
        Restar
      </Button>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
