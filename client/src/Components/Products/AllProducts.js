import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { fake } from "../Products/Products";
const AllProducts = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="allProduct__container">
      <div className="allProduct">
        <div className="allProduct__top">
          <div className="allProduct__top__link">
            <div>Home</div>
            <div onClick={() => setShow(!show)}>
              {!show ? (
                <Button>
                  Filters
                  <ExpandMoreIcon></ExpandMoreIcon>
                </Button>
              ) : (
                <Button>
                  Filters
                  <CloseIcon></CloseIcon>
                </Button>
              )}
            </div>
          </div>
          <div
            className={
              show
                ? "allProduct__top__filter fade_in"
                : "allProduct__top__filter"
            }
          >
            <div>
              <p>SORT BY</p>
              <p>Default</p>
              <p>Popularity</p>
              <p>Price: Low to high</p>
              <p>Price: high to low</p>
              <p>Newness</p>
            </div>
            <div>
              <p>PRICE FILTER</p>
              <p>ALL</p>
              <p>$0 - $50</p>
              <p>$51 - $100</p>
              <p>$101 - $200</p>
              <p>$200+</p>
            </div>
            <div>
              <p>FILTER BY COLOR</p>
              <p>Black</p>
              <p>Blue</p>
              <p>Red</p>
              <p>Green</p>
              <p>Pink</p>
            </div>
          </div>
        </div>
        <div className="allProduct__body">
          {/* product card map  */}
          <div className="products__bottom">
            {fake.map((x) => (
              <ProductCard x={x}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
