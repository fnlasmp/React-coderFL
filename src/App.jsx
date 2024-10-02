import { useState } from "react";
import Counter from "./components/common/counter/Counter";
import Footer from "./components/layouts/footer/Footer";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";

// Para correr consola Npm run dev
//Para importar un default no lleva {}
//Importacion nombrada lleva {}

//ctrl + k + c para comentar una linea
//comentarios dentro del return usando llaves y /* */   {/* */}.
// o ctrl + } para comentar lo seleccionado
function App() {
  const [montarComponente, setMontarComponente] = useState(false);
  const montarDesmontar = () => {
    setMontarComponente(!montarComponente);
  };
  return (
    // <Navbar /> esto es lo mismo que Navbar() en js
    <div>
      <Navbar />
      {/* si montarComponente es un thruty pinto ItemList. sino null */}
      {/* {montarComponente ? <ItemListContainer /> : null} */}
      {/* <button onClick={montarDesmontar}>Montar/desmontar</button> */}
      <ItemListContainer />
      {/* <Footer /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
