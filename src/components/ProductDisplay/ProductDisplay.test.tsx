import ProductDisplay from "./ProductDisplay";

export default function ProductDisplayTest() {
  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
  };

  return (
    <ProductDisplay
      product={product}
      showDescription={true}
      showStockStatus={true}
      onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
    >
      <div className="text-sm text-gray-500">Free shipping available</div>
    </ProductDisplay>
  );
}
