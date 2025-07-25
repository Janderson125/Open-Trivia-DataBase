import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "Noise-cancelling over-ear headphones.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      description: "Water-resistant smart watch with heart-rate tracking.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      description: "Portable speaker with powerful sound.",
    },
  ]);

  return (
    <div className="app">
      <h1>🛒 Product Listings</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
