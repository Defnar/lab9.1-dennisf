import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div>
      <img
        src={product.imageUrl ? product.imageUrl : ""}
        alt={`image of ${product.name}`}
      />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{showDescription ? product.description : ""}</p>
      <p>
        {showStockStatus ? (product.inStock ? "In Stock" : "Out of Stock") : ""}
      </p>
      {children}
      {onAddToCart && (
        <button type="button" onClick={() => onAddToCart(product.id)}>
          Add To Cart
        </button>
      )}
    </div>
  );
}
