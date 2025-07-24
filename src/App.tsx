import React, { useState } from "react";
import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import type { Product, User } from "./types";

const App = () => {
  const [showUserAlert, setShowUserAlert] = useState(false);
  const [showShopAlert, setShowShopAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowShopAlert(true);
  };

  const user: User = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  const product: Product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl:
      "https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center font-bold">Welcome</h1>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={() => setShowUserAlert(true)}
      >
        {showUserAlert && (
          <AlertBox
            type="warning"
            message="Editing user profile"
            onClose={() => setShowUserAlert(false)}
          >
            <p>Pretend the editing user modal is open for {user.id}</p>
          </AlertBox>
        )}
      </UserProfileCard>
      <p className="mt-4 text-center">Check out our item</p>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={handleAddToCart}
      />

      {showShopAlert && (
        <AlertBox
          type="success"
          message="Item successfully added to cart"
          onClose={() => setShowShopAlert(false)}
        >
          <p>Pretend you can open the cart</p>
        </AlertBox>
      )}
    </div>
  );
};
export default App;
