import React from "react";

export function ProductCard({ product }) {
  return (
    <div>
      {/* ACA LE DEFINO UN TAMAÑO A LA IMAGEN DE 80PX PARA QUE NO MOLESTE EL TAMAÑO ORIGINAL, CAMBIENLO A GUSTO! */}
      <img src={product.images[0]} className="size-[80px]" />{" "}
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      {/* agreguen lo que quieran de los detalles de cada prducto */}
    </div>
  );
}
