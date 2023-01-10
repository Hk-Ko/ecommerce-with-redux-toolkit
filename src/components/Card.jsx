import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToFav } from "../services/productSlice";
import { addToCart } from "../services/cartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img
          src={item.image}
          height="100px"
          className="d-block mx-auto mb-3"
          alt=""
        />
        <h5>{item?.title.substring(0, 20)}...</h5>
        <p className="fw-bold text-primary">${item?.price}</p>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="btn btn-outline-primary"
        >
          <RiShoppingCartFill />
        </button>
        <button
          onClick={() => dispatch(addToFav(item))}
          className="btn btn-outline-danger ms-3"
        >
          <AiFillHeart />
        </button>
      </div>
    </div>
  );
};

export default Card;
