import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PopupProducts from "./PopupProducts";
import { useHistory } from "react-router-dom";

const ProductCard = ({ x }) => {
  let history = useHistory();

  const handleShow = (e) => {
    e.stopPropagation();
    const modal = document.getElementById("myModal");
    modal.style.display = "grid";
  };

  const handleClose = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };
  // const handlePush = (e) => {
  //   e.stopPropagation();
  //   alert();
  //   console.log(e);
  // };
  return (
    <div className="productCard">
      <div
        className="productCard__top"
        onClick={() => history.push(`/product/${x.name}/${x.id}`)}
      >
        <img src={x.img} alt="" />
        <div className="quickLook">
          <Link onClick={(event) => handleShow(event)}>Quick Look</Link>
          <Link>
            <FavoriteIcon></FavoriteIcon>
          </Link>
        </div>
      </div>
      <div className="productCard__bottom">
        <p>{x.name}</p>
        <p>${x.price}</p>
        <button className="button primary-font">ADD TO CART</button>
      </div>
      <PopupProducts
        handleClose={handleClose}
        handleShow={handleShow}
        msg={"We'll get back to you soon!"}
      ></PopupProducts>
    </div>
  );
};

export default ProductCard;
