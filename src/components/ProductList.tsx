import { Link } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import productsData from "../../data.json";
import { Product } from "../types";

const ProductList = () => {
  return (
    <div>
      {productsData.map((product: Product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductListItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
