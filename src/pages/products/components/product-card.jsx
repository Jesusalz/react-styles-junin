import React from "react";

export function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105">
      <img 
        src={product.images[0]} 
        alt={product.title} 
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
      <p className="text-gray-700 mb-2 truncate">{product.description}</p>
      <p className="font-bold text-purple-600">${product.price}</p>
    </div>
  );
}
