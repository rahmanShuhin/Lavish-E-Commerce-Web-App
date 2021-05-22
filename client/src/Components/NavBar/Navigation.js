import React from "react";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Auth from "../Auth/Auth";
import NavCart from "./NavCart";
const Navigation = () => {
    const handleShow = () => {
        const modal = document.getElementById("auth__Modal");
        modal.style.display = "grid";
    };

    const handleClose = () => {
        const modal = document.getElementById("auth__Modal");
        modal.style.display = "none";
    };
    return (
        <div className="nav">
            <div className="nav__left">
                <NavLink to="/">HOME</NavLink>
                <span className="nav__shop">
                    <Link>SHOP</Link>
                </span>
                <div className="nav__shop__dropdown">
                    <div>
                        <p>Men</p>
                        <p>Jeans</p>
                        <p>Jackets</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>T-Shirts</p>
                        <p>Joggers</p>
                    </div>
                    <div>
                        <p>Kids (Boy)</p>
                        <p>Pants</p>
                        <p>T-shirt</p>
                        <p>Shirt</p>
                        <p>Short Pant</p>
                        <p>Kids (Girls)</p>
                        <p>Dress</p>
                        <p>Top</p>
                        <p>Skirts</p>
                    </div>
                    <div>
                        <p>Shoes</p>
                        <p>Boots</p>
                        <p>Slippers</p>
                        <p>Trainers</p>
                    </div>
                    <div>
                        <p>ACCESSORIES</p>
                        <p>All</p>
                        <p>Bags</p>
                        <p>Belts</p>
                        <p>Luggage</p>
                        <p>Wallet</p>
                    </div>
                </div>
                <span className="nav__pages">
                    <Link>PAGES</Link>
                </span>
                <div className="nav__page__dropdown">
                    <div>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Our Services</p>
                        <p>Our Team</p>
                        <p>Policy</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <NavLink to="/faq">ELEMENTS</NavLink>
            </div>
            <div className="nav__middle">LAVISH.</div>
            <div className="nav__right">
                <div className="nav__right__cart">
                    <p>CART (0$)</p>
                    <NavCart></NavCart>
                </div>
                <p>
                    <FavoriteBorderIcon></FavoriteBorderIcon>(0)
                </p>
                <p onClick={handleShow}>
                    <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>{" "}
                    LOGIN
                </p>
                <p>
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                </p>
            </div>
            <Auth handleClose={handleClose}></Auth>
        </div>
    );
};

export default Navigation;
