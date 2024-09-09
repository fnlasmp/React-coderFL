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
  return (
    // <Navbar /> esto es lo mismo que Navbar() en js
    <div>
      <Navbar />
      <ItemListContainer greeting={"saludos"} />
      <Footer />
    </div>
  );
}

export default App;
