import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center text-[#8a4af3]">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      </div>
      <form className="bg-white shadow-md rounded-md p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700 font-bold">First Name</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-[#8a4af3] transition duration-200"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-bold">Last Name</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-[#8a4af3] transition duration-200"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-gray-700 font-bold">Email Address</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-[#8a4af3] transition duration-200"
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-gray-700 font-bold">Shipping Address</label>
          <textarea
            className="border-2 border-gray-300 rounded-md p-2 w-full h-20 focus:outline-none focus:border-[#8a4af3] transition duration-200"
            placeholder="Enter your shipping address"
          ></textarea>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-gray-700 font-bold">Payment Method</label>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>

        
      </form>
      <button className="mt-6 bg-[#8a4af3] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#8a4af3] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] ease-linear duration-200 cursor-pointer" onClick={()=>toast.success('Thanks for placing order.')}>
          Place Order
        </button>

      <ToastContainer /> {/* Add this line */}
    </div>
  );
};

export default Checkout;
