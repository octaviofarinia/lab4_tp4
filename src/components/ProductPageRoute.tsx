import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";
import productsData from "../../data.json";

const ProductPageRoute = () => {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === productId);

  return product ? (
    <ProductPage product={product} />
  ) : (
    <h2>Product not found</h2>
  );
};

export default ProductPageRoute;
