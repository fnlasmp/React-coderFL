import { categories } from "./categories";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-navbar">
      {/* logo */}
      {/* El Link solo se usa para nuestras rutas, para pag. externas (a href) */}
      {/* Para darle estilo en css es considerado un anchor 'a' */}
      <Link to="/">Ubuy</Link>
      {/* listado */}
      <ul>
        {/* <li>Todo</li>
        <li>Hombre</li>
        <li>Mujer</li> */}

        {/* <Link to="">Todas</Link>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/pantalones">Pantalones</Link>
        <Link to="/category/shorts">Shorts</Link> */}

        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>
      {/* carrito */}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
