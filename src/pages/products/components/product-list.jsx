import React from "react";
import { products } from "../mocks/data.json";
import { ProductCard } from "./product-card";
export function ProductList() {
  return (
    <div>
      <div>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
