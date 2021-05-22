import React from "react";
import bg from "../../Videos/bg-cart.mp4";
const ShopCart = () => {
    return (
        <div className="shopCart">
            <div className="shopCart__top">
                <video autoPlay loop muted className="shopCart__top__video">
                    <source src={bg} type="video/mp4" />
                </video>
                <div className="shopCart__top__content">
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;
