import React, { useContext } from "react";
import Counter from "../components/Counter";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import {
  Clear
} from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
const url='http://localhost:8000/'
const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, incrQuan, decrQuan, removeItem, clearCart } = useContext(StoreContext);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    navigate("/catagory");
  };

  const productTitle = (title) => {
    if (title.length > 20) {
      return <span>{title.substring(0, 20)}...</span>;
    } else {
      return <span>{title}</span>;
    }
  };

  return (
    <>
      <div className="mt-6 p-3">
        <div className="flex justify-center text-3xl text-[#8a4af3] ">
          <span className="border-[1px] rounded-lg pl-8 pr-8 pt-1 pb-1 text-white bg-[#8a4af3]">
            Cart<ShoppingCartOutlined className="ml-4 w-full"/>
          </span>
        </div>

        <div className="flex items-center justify-between mt-4 flex-wrap">
          <button
            className="btn bg-white text-[#8a4af3] border-[1px] border-[#8a4af3] mt-0 hover:bg-transparent"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <button className="btn mt-0" onClick={handleCheckout}>
            Checkout Now
          </button>
        </div>

        <div className="flex flex-row mt-7 flex-wrap">
          <div className="flex flex-col flex-1">
            {cart.map((item) => (
              <div
                className="mb-4 mr-4 flex h-auto items-center flex-wrap border-[1.5px] ease-in duration-100  p-5 rounded-lg"
                key={item._id}
              >
                <div className="product flex pl-5 self-start">
                  <img
                    className="product_img w-[7rem]"
                    src={url+item.image}
                    alt="product_img"
                  />

                  <div className="disc flex items-start justify-center h-auto flex-col ml-6">
                    <p>
                      <b className="mr-2">Product:</b>
                      {productTitle(item.title)}
                    </p>
                    <p>
                      <b className="mr-2">Price:</b>${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-auto flex-col justify-between items-end mt-[150px]">
                  <div className="-mt-[200px]">
                    <Clear
                      onClick={() => removeItem(item)}
                      className="cursor-pointer mt-8 -mr-4 hover:text-[#8a4af3]"
                    />
                  </div>
                  <div className="">
                    <Counter
                      quantity={item.quantity}
                      incrQuan={() => incrQuan(item)}
                      decrQuan={() => decrQuan(item)}
                    />
                    <p className="flex items-center justify-center p-7 -ml-[50px] text-xl">
                      <span className="pl-5">Total: </span><span className="ml-2">{`$${(item.quantity * item.price).toFixed(2)}`}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-[1px] border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mb-6">
            <h1 className="text-2xl">SUMMARY</h1>
            <div className="summaryItem flex justify-between w-full">
              <p>SubTotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="summaryItem flex justify-between w-full">
              <p>Shipping:</p>
              <p>$10</p>
            </div>
            <div className="summaryItem flex justify-between w-full">
              <p>Shipping Discount:</p>
              <p>-$10</p>
            </div>
            <div className="summaryItem flex justify-between w-full text-3xl font-bold">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <button className="btn btn-red" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
      <br className="mt-8"/>
    </>
  );
};

export default Cart;
