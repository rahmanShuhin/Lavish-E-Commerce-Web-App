import React from "react";
import bg from "../../Videos/bg-cart.mp4";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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
            <div className="shopCart__bottom">
                <h2>Shopping Cart</h2>
                <div>
                    <div className="shopCart__bottom__items">
                        <div>&times;</div>
                        <div>
                            <img
                                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <p>Wall Clock</p>
                        </div>
                        <div>
                            <p>$110</p>
                        </div>
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
                            <p>$110</p>
                        </div>
                    </div>
                </div>
                <div className="shopCart__bottom__coupon">
                    <div>
                        <CardGiftcardIcon></CardGiftcardIcon>
                        <input type="text" placeholder="Coupon Code" />
                        <button>Apply Coupon</button>
                    </div>
                    <div>
                        <button>Delete Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;
