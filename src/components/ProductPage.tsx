import React from "react";
import { Product } from "../types";

interface Props {
  product: Product;
}

const ProductPage = ({ product }: Props) => {
  return (
    <div>
      <img src={`/img/${product.imagen}`} alt={product.instrumento} />
      <h1>{product.instrumento}</h1>
      <p>{product.marca}</p>
      <p>{product.modelo}</p>
      <p>{product.precio}</p>
      {product.costoEnvio === "G" && <p>Envio Gratis</p>}
      <p>{product.cantidadVendida}</p>
      <p>{product.descripcion}</p>
    </div>
  );
};

export default ProductPage;
