import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      {/* logo */}
      <h3>Ubuy</h3>
      {/* listado */}
      <ul>
        <li>Todo</li>
        <li>Hombre</li>
        <li>Mujer</li>
      </ul>
      {/* carrito */}
      <CartWidget />
    </div>
  );
};

export default Navbar;
