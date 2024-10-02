import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";

const ProductCard = ({ title, price, description, image }) => {
  //{} desestructuro
  // const { title, price, description, image } = props;
  return (
    <Card sx={{ Width: 345, height: 320 }}>
      <CardMedia sx={{ height: 140 }} image={"image"} title="title cloth" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalles</Button>
      </CardActions>
    </Card>
  );
  // <div>
  {
    /* <h2>{title}</h2>
      <h3>{price}</h3>
      <h3>{description}</h3>
      <button>ver detalles</button> */
  }

  {
    /* </div> */
  }
};

export default ProductCard;
