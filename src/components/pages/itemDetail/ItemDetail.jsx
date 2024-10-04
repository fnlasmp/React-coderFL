import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>

      <CounterContainer onAdd={onAdd} stock={item.stock} />
    </div>
  );
};
