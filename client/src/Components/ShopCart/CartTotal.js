import React from "react";

const CartTotal = () => {
    return (
        <div className="cartTotal">
            <h2>Cart Totals</h2>
            <div>
                <p>SUBTOTAL</p>
                <p>$150</p>
            </div>
            <div>
                <p>Shipping</p>
                <p>$10</p>
            </div>
            {/* <div>
                <p>SHIPPING</p>
                <span>
                    <span>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" />
                            <p>Free Shipping</p>
                        </label>
                    </span>
                </span>
            </div> */}
            <hr />
            <br />
            <div>
                <p>Total</p>
                <p>$160</p>
            </div>
            <div>
                <button>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default CartTotal;
