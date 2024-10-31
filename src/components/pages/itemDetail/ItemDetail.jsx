import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      {/*<h2>Ya tienes {totalItems} unidades en el carrito</h2>*/}

      <CounterContainer
        onAdd={onAdd}
        stock={item.stock}
        totalItems={totalItems}
      />
    </div>
  );
};
