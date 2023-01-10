import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../services/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [total,setTotal] = useState(0);
  const calculateTotal = ()=>{
    const result = cart?.reduce((a,c)=>a+c?.price,0);
    setTotal(result);
  }

  useEffect(()=>{
    calculateTotal()
  },[cart])

  return (
    <div className="my-5 ">
      <div className="row">
        <div className="col-7">
          <div className="">
            {cart?.map((c) => (
              <div key={c.id} className="mb-5">
                <div className="d-flex gap-3">
                    <div className="">
                        <img src={c?.image} height="100px" width="80px" alt="" />
                    </div>
                    <div className="">
                        <p className="fw-bold">{c?.title}</p>
                        <p className="fw-bold text-primary">${c?.price}</p>
                        <button onClick={()=>dispatch(removeFromCart(c))} className="btn-danger btn-sm btn">
                            Delete
                        </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-5">
            <h3 className="text-primary">Total Price</h3>
            <h2 className="text-warning">${(total).toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
