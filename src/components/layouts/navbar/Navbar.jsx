import { Category } from "@mui/icons-material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  const categories = ["Todo", "Hombre", "Mujer"];
  return (
    <div className="container-navbar">
      {/* logo */}
      <h3>Ubuy</h3>
      {/* listado */}
      <ul>
        {/* <li>Todo</li>
        <li>Hombre</li>
        <li>Mujer</li> */}

        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      {/* carrito */}
      <CartWidget />
    </div>
  );
};

export default Navbar;
