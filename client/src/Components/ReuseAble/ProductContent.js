import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
const ProductContent = () => {
  const [rating, setRating] = useState(2);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const changeRating = (newRating, name) => {
    setRating(newRating);
    console.log(newRating, name);
  };
  const handleAddToCart = () => {
    if (color === null) {
      return setColor(-1);
    }
    if (size === null) {
      return setSize(-1);
    }
    if (color !== -1 && color && size !== -1 && size) {
      alert("Product Added");
    }
  };
  return (
    <div className="product-content">
      <h2>BASKET WITH HANDLES</h2>
      <p>$160</p>
      <StarRatings
        rating={rating}
        starRatedColor="black"
        starHoverColor="#EBBC00"
        changeRating={changeRating}
        numberOfStars={5}
        starDimension="18px"
        starSpacing="1px"
        name="rating"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
        ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
        magnis dis parturient montes nascetur ridiculus mus. Vestibulum
        ultricies aliquam convallis.
      </p>

      <div className="product-content-color-size">
        <div className="product-content-color">
          <span>Color:</span>
          <span
            className={color === 1 && "active"}
            onClick={() => setColor(1)}
            style={{ background: "yellow" }}
          ></span>
          <span
            className={color === 2 && "active"}
            onClick={() => setColor(2)}
            style={{ background: "blue" }}
          ></span>
          <span
            className={color === 3 && "active"}
            onClick={() => setColor(3)}
            style={{ background: "black" }}
          ></span>
          {color === -1 && (
            <small style={{ color: "red", fontStyle: "italic" }}>
              Please select any color
            </small>
          )}
          {color && (
            <button onClick={() => setColor(null)}>&times; Clear</button>
          )}
        </div>
        <div className="product-content-size">
          <span>Size:</span>
          <span
            className={size === "S" && "active"}
            onClick={() => setSize("S")}
          >
            S
          </span>
          <span
            className={size === "M" && "active"}
            onClick={() => setSize("M")}
          >
            M
          </span>
          <span
            className={size === "L" && "active"}
            onClick={() => setSize("L")}
          >
            L
          </span>
          <span
            className={size === "XL" && "active"}
            onClick={() => setSize("XL")}
          >
            XL
          </span>
          {size === -1 && (
            <small style={{ color: "red", fontStyle: "italic" }}>
              Please select any size
            </small>
          )}
          {size && <button onClick={() => setSize(null)}>&times; Clear</button>}
        </div>
      </div>

      <div className="product-content-bottom">
        <div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <div>
              <ArrowLeftIcon></ArrowLeftIcon>
            </div>
            <input type="number" defaultValue="1" />
            <div>
              <ArrowRightIcon></ArrowRightIcon>
            </div>
          </div>
        </div>
        <div>
          <Button onClick={handleAddToCart}>ADD TO CART</Button>
        </div>
      </div>

      <div>
        <div>
          <Link>
            <FavoriteBorderIcon></FavoriteBorderIcon> ADD TO WISHLIST
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
