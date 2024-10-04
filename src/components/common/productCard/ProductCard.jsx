import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, description, imageUrl, id }) => {
  //{} desestructuro
  // const { title, price, description, image } = props;
  return (
    <Card sx={{ Width: 350, height: 320 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="title cloth" />
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
        <Link to={`/productDetail/${id}`}>
          <Button size="small">Ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
