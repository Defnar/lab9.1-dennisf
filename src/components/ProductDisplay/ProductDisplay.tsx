import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {

  const productStyles = product.inStock? "text-green-700" : "text-red-700";

  return (
    <div className="w-150 mx-auto bg-white rounded-lg relative overflow-hidden text-center text-black flex flex-col gap-1">
      <img
      className="w-full h-48 object-cover"
        src={product.imageUrl ? product.imageUrl : ""}
        alt={`image of ${product.name}`}
      />
      <h2 className="font-bold">{product.name}</h2>
      <p className="text-blue-500 font-bold">{product.price}</p>
      <p>{showDescription ? product.description : ""}</p>
      <p className={productStyles}>
        {showStockStatus ? (product.inStock ? "In Stock" : "Out of Stock") : ""}
      </p>
      {children}
      {onAddToCart && (
        <button 
        className="bg-blue-500 w-140 self-center text-white mb-5 rounded-md"
        type="button" onClick={() => onAddToCart(product.id)}>
          Add To Cart
        </button>
      )}
    </div>
  );
}
