import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  //va a ser falsy en home y thruty en la categoria

  // un fetching ---> esto devuelve una promesa
  //crear una promesa
  //resolve, reject, son dos funciones que van dentro de la promesa

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((res, rej) => {
      let isLoged = true;

      if (isLoged) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    //.then().catch() ---> manejar la promesa
    //res va al .then, rej al .catch

    getProducts
      .then((response) => {
        setTimeout(() => {
          setItems(response);
        }, 1500);
      })

      .catch((err) => {
        console.log("entro en el catch ", err);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
