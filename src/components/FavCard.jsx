import React from "react";
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { removeFromFav } from "../services/productSlice";

const FavCard = ({item}) => {
    const dispatch = useDispatch();
  return (
    <div>
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
            onClick={() => dispatch(removeFromFav(item))}
            className="btn btn-outline-danger"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
