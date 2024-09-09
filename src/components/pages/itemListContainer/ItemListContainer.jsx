import ProductCard from "../../common/productCard/ProductCard";

const itemListContainer = (props) => {
  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        {/* productos */}
        <div>
          <ProductCard titulo="remera" precio={800} />
          <ProductCard titulo="jean" precio={1300} />
          <h2>{props.greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default itemListContainer;
