import { categories } from "./categories";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <Link to="/" className="logo">
        Ubuy Store
      </Link>
      <ul className="nav-links">
        {categories.map(({ title, path }) => (
          <li key={title}>
            <Link to={path} className="nav-link">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/cart" className="cart-link">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
