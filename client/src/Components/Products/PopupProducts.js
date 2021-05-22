import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import ProductContent from "../ReuseAble/ProductContent";

const PopupProducts = ({ msg, handleClose, handleShow }) => {
    const [rating, setRating] = useState(2);

    const changeRating = (newRating, name) => {
        setRating(newRating);
        console.log(newRating, name);
    };

    window.onclick = function (event) {
        const modal_1 = document.getElementById("auth__Modal");
        const modal_2 = document.getElementById("myModal");
        if (event.target == modal_1 || event.target == modal_2) {
            modal_1.style.display = "none";
            modal_2.style.display = "none";
        }
    };
    return (
        <section>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleClose}>
                        &times;
                    </span>
                    <div>
                        <div className="modal-content-left">
                            <img
                                src="https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt=""
                            />
                        </div>
                        <ProductContent></ProductContent>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopupProducts;
