import { Product } from "../types";
import styles from "./ProductListItem.module.css";

interface Props {
  product: Product;
}

const ProductListItem = ({ product }: Props) => {
  return (
    <div className={styles.productListItem}>
      <img src={`/img/${product.imagen}`} alt={product.instrumento} />
      <div>
        <h3>{product.instrumento}</h3>
        <p className={styles.listItemPrice}>{`$ ${product.precio}`}</p>
        {product.costoEnvio === "G" ? (
          <p>Envio Gratis</p>
        ) : (
          <p>Costo envio: $ {product.costoEnvio}</p>
        )}
        <p>{product.cantidadVendida}</p>
      </div>
    </div>
  );
};

export default ProductListItem;
