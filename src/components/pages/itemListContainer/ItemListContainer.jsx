import { useState, useEffect } from "react";
import ProductCard from "../../common/productCard/ProductCard";

const itemListContainer = (props) => {
  //fetching de datos
  console.log("Hacemos la peticion");
  //todos los hooks son funciones
  //useEffect Se puede colocar en cualquier partes ante del return, recibe una funcion y un array

  useEffect(() => {
    //Todo lo que se coloque aqui dentro no se volvera a actualizar, solo el primer renderizado, y se ejecuta despues de todo
  }, []); //array de dependencia, dentro se coloca una excepcion para volver a ejecutar todo siempre y cuando encuentre cambios
  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        {/* productos */}
        <div>
          <ProductCard titulo="remera" precio={800} />
          <ProductCard titulo="jean" precio={1300} />
        </div>
      </div>
    </div>
  );
};

export default itemListContainer;
