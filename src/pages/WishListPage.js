import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Button, Grid, Typography } from "@material-ui/core";
import {Clear, ShoppingCartOutlined } from "@material-ui/icons";
import { BsFillBagHeartFill } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const WishListPage = () => {
  const { wishList, removeItemWishList, addToCart } = useContext(StoreContext);

  const handleRemoveItem = (item) => {
    removeItemWishList(item);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (!wishList) {
    return null; // or you can show a loading indicator
  }

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h3" className="mb-4 text-3xl font-semroduct:Fjallraven - Foldsac...ibold text-[#8a4af3] text-center">
        <div className="flex justify-center">
        Wishlist<BsFillBagHeartFill className="pl-3"/></div>
      </Typography>
      {wishList.length === 0 ? (
        <Typography variant="subtitle1" className="text-xl text-center">
          Your wishlist is empty.
        </Typography>
      ) : (
        <Grid container spacing={3} className="flex justify-center">
          {wishList.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
              <div className="bg-white rounded-lg shadow p-4 border-[1px] transition duration-200 hover:border-indigo-600">
              <Clear
                      onClick={() => handleRemoveItem(item)}
                      className="relative cursor-pointer -mt-5 ml-[245px] hover:text-[#8a4af3]"
                    />
                <Link to={`../product/${item._id}`}>
                <img src={'https://summerkings.onrender.com/'+item.image} alt={item.title} className="w-full h-40 object-contain mb-4" />
                </Link>
                <Typography variant="subtitle1" className="font-bold text-lg">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="mb-2">
                  Category: {item.category}
                </Typography>
                <Typography variant="body2" className="mb-2">
                  Price: ${item.price.toFixed(2)}
                </Typography>
                {/* <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<RemoveCircleOutline />}
                  onClick={() => handleRemoveItem(item)}
                  className="mr-2"
                >
                  Remove
                </Button> */}
                
                <div className="mt-1 flex justify-center">
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ShoppingCartOutlined />}
                  onClick={() => {handleAddToCart(item); alert(`Prdouct is added to cart`)}}
                >
                  Add to Cart
                </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default WishListPage;
