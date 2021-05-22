import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ProductContent from "../ReuseAble/ProductContent";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const { name, id } = useParams();
  const [active, setActive] = useState(1);
  const [rating, setRating] = useState(0);

  const changeRating = (newRating, name) => {
    setRating(newRating);
    console.log(newRating, name);
  };
  return (
    <div className="bg__productDetail">
      <div className="productDetail">
        <div className="productDetail__link">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link>Shirt</Link>
          <span> / </span>
          <Link>{name}</Link>
        </div>
        <div className="productDetail__main">
          <div className="productDetail____main__img">
            <div className="productDetail__main__img__sideBar">
              <img
                src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56"
                alt=""
              />
              <img
                src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56"
                alt=""
              />
              <img
                src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56"
                alt=""
              />
              <img
                src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56"
                alt=""
              />
            </div>
            <div className="productDetail__main__img__show">
              <img
                src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56"
                alt=""
              />
            </div>
          </div>
          <div className="productDetail__content">
            <ProductContent></ProductContent>
          </div>
        </div>

        <div className="productDetail__bottom">
          <div className="productDetail__bottom__button">
            <Button
              className={active === 1 && "active"}
              onClick={() => setActive(1)}
            >
              Description
            </Button>
            <Button
              className={active === 2 && "active"}
              onClick={() => setActive(2)}
            >
              Additional Information
            </Button>
            <Button
              className={active === 3 && "active"}
              onClick={() => setActive(3)}
            >
              Reviews
            </Button>
          </div>
        </div>
      </div>

      <div className="productDetail__bottom__content">
        {active === 1 && (
          <div className="productDetail__bottom__content__description">
            <h2>DESCRIPTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis. Maecenas ut tellus mi. Proin
              tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus,
              vitae condimentum nulla enim bibendum nibh. Praesent turpis risus,
              interdum nec venenatis id, pretium sit amet purus. Interdum et
              malesuada fames.
            </p>
          </div>
        )}
        {active === 2 && (
          <div className="productDetail__bottom__content__additional">
            <h2>Additional Information</h2>
          </div>
        )}
        {active === 3 && (
          <div className="productDetail__bottom__content__review">
            <div>
              <div>
                <h2>1 Reviews For {name}</h2>
                <div className="productDetail__bottom__content__review__comment">
                  <Avatar alt="shuhin">S</Avatar>
                  <span>
                    <StarRatings
                      rating={2}
                      starRatedColor="black"
                      starHoverColor="#EBBC00"
                      numberOfStars={5}
                      starDimension="18px"
                      starSpacing="1px"
                      name="rating2"
                    />
                    <p>
                      <span
                        style={{ color: "gray !important", fontWeight: "700" }}
                      >
                        Ralph Jackson
                      </span>{" "}
                      – 08.02.2017.
                    </p>
                    <p>Great</p>
                  </span>
                </div>
              </div>

              <div className="productDetail__bottom__content__review__add">
                <h2>Add A Review</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="">
                  <label htmlFor="rating">Your rating</label>
                  <div className="star__rating">
                    <StarRatings
                      rating={rating}
                      starRatedColor="black"
                      starHoverColor="#EBBC00"
                      changeRating={changeRating}
                      numberOfStars={5}
                      starDimension="16px"
                      starSpacing="1px"
                      name="rating"
                    />
                  </div>
                  <label htmlFor="review">Your review *</label>
                  <textarea name="review" cols="30" rows="10"></textarea>
                  <label htmlFor="name">Name*</label>
                  <input type="text" name="name" />
                  <label htmlFor="email">Email*</label>
                  <input type="email" name="email" />
                  <div>
                    <input type="checkbox" name="remember" />
                    <span>
                      {" "}
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <RelatedProducts></RelatedProducts>
    </div>
  );
};

export default ProductDetails;
