import React from "react";
import ProductCard from "./ProductCard";
import { fake } from "../Products/Products";
const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <p>Related Products</p>
      <div className="products__bottom">
        {fake.slice(0, 4).map((x) => (
          <ProductCard x={x}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
