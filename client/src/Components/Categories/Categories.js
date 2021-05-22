import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <p>MADE THE HARD WAY</p>
      <h2>FEATURED CATEGORIES</h2>
      <div className="categories__grid">
        <div>
          <span>
            <Link to="/all/products/shirt">Bags</Link>
          </span>
        </div>
        <div>
          <span>Shoes</span>
        </div>
        <div>
          <span>Watch</span>
        </div>
        <div>
          <span>Woman</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
