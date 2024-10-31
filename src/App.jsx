import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Footer from "./components/layouts/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route
            path={"/category/:categoryName"}
            element={<ItemListContainer />}
          />
          <Route path={"/cart"} element={<CartContainer />} />
          <Route
            path={"/productDetail/:id"}
            element={<ItemDetailContainer />}
          />
          <Route path={"*"} element={<h2>404 page not found</h2>} />
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
