import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

const NavCart = () => {
    return (
        <div className="navCart">
            <div>
                <div className="navCart__items">
                    <div>
                        <div>
                            <img
                                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide3-img.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <p>FLOWER VASE</p>
                            <p>1 &times; $15</p>
                        </div>
                        <div>
                            <ClearIcon></ClearIcon>
                        </div>
                    </div>
                </div>
                <div className="navCart__total">
                    <div>
                        <p>TOTAL:</p>
                        <p>$15</p>
                    </div>
                    <div>
                        <button>VIEW CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavCart;
