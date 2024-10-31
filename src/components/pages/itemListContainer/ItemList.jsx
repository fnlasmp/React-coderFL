import React from "react";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      <h2>Nuestros productos</h2>
      {items.length > 0 ? (
        items.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ItemList;
