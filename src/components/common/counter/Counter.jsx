import { Button } from "@mui/material";
import { useState } from "react";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginLeft: "50px",
        marginTop: "20px",
      }}
    >
      <Button variant="contained" onClick={restar}>
        Restar
      </Button>
      <h2 style={{ margin: 0 }}>{contador}</h2>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
