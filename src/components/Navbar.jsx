import React from "react";
import { FaShopware } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const cart = useSelector(state=>state.cart.cart)
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar-brand">
            <FaShopware className="me-2" />
            MyShop
          </div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/cart"}>
                <button className="btn btn-primary">
                  <RiShoppingCartFill /> {cart?.length}
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/fav"}>
                <button className="btn btn-primary ms-3">
                  <AiFillHeart />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
