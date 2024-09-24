import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const itemListContainer = () => {
  const [items, setItems] = useState([]);
  // un fetching ---> esto devuelve una promesa

  //crear una promesa
  //resolve, reject, son dos funciones que van dentro de la promesa

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      let isLoged = true;

      if (isLoged) {
        res(products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    //.then().catch() ---> manejar la promesa
    //res va al .then, rej al .catch

    getProducts
      .then((response) => {
        console.log("entro en el then ", response);
        setItems(response);
      })

      .catch((err) => {
        console.log("entro en el catch ", err);
      });
  }, []);

  return <ItemList items={items} />;
};

export default itemListContainer;
