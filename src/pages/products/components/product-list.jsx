import React from "react";
import { products } from "../mocks/data.json"; 
import { ProductCard } from "./product-card";

export function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
