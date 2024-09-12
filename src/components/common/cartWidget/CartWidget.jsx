import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="secondary">
        <LocalMallIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
