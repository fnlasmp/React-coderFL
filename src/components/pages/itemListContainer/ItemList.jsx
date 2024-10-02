import React from "react";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {/* <ProductCard titulo={items[0].title} precio={items[0].price} />
      <ProductCard titulo={items[1].title} precio={items[1].price} />
      <ProductCard titulo={items[2].title} precio={items[2].price} />
      <ProductCard titulo={items[3].title} precio={items[3].price} /> 
      esto se puede hacer de la siguiente forma*/}

      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
        //   <div key={item.title}>
        //     <h2>{item.title}</h2>
        //     <h3>{item.price}</h3>
        //     <h3>{item.description}</h3>

        // title={item.title}
        // price={item.price}
        // description={item.description}
      })}
    </div>
  );
};

export default ItemList;
