import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "../../pages/cart/CartContainer";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext); // siempre devuelve el value del context

  const totalItems = getTotalItems();

  return (
    <div>
      <Badge badgeContent={totalItems} color="primary" max={50} showZero={true}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
