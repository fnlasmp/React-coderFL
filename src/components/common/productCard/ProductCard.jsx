import "./productCard.css";

const ProductCard = (props) => {
  //{} desestructuro
  const { titulo, precio } = props;
  return (
    <div>
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      <button>ver detalles</button>
    </div>
  );
};

export default ProductCard;
