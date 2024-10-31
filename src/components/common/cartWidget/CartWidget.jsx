import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "../../pages/cart/CartContainer";

const CartWidget = () => {
  const { cart } = useContext(CartContext); // siempre devuelve el value del context

  return (
    <div>
      <Badge badgeContent={cart.length} color="secondary">
        <LocalMallIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
