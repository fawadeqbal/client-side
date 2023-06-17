import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const Product = ({ item }) => {
  const nav = useNavigate();
  const handleProduct = () => {
    nav(`/product/${item._id}`);
  };

  return (
    <div className="m-1 relative bg-white rounded-lg shadow p-4 min-w-[300px] min-h-[440px] w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5 border-[1px] transition duration-100  hover:border-indigo-600 rounded-lg'">
      <img
        onClick={handleProduct}
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-contain mb-2 cursor-pointer"
        style={{ height: "200px" }} // Set the desired height of the image
      />
      <h2 className="text-lg font-normal mb-2">{item.title}</h2>
      <p className="text-sm mb-2">Category: {item.category}</p>
      <p className="text-sm mb-2">Price: ${item.price.toFixed(2)}</p>
      <div className="flex justify-center absolute bottom-1 left-1 right-1">
        <Button
          color="primary"
          onClick={handleProduct}
          className="hover:outline-primary"
        >
          View Product
        </Button>
      </div>
    </div>
  );
};

export default Product;
