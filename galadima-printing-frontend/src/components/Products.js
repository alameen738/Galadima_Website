import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Product 1", price: 500 },
    { id: 2, name: "Product 2", price: 800 },
    { id: 3, name: "Product 3", price: 1200 },
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem("cart", JSON.stringify(product));
    navigate("/checkout");
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} Naira</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
