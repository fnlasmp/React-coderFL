import { Button } from "@mui/material";
import { useState } from "react";
const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <h1>{contador}</h1>
      <Button onClick={restar}>Restar</Button>

      <Button variant="outlined">Agregar al carrito</Button>
    </div>
  );
};

export default Counter;
