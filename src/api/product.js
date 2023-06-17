import axios from "axios";
const URL="https://summerkings.onrender.com"
const fetchProducts = async () => {
  try {
    const response = await axios.get(`${URL}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};
const fetchFilteredProducts = async (category) => {
  try {
    
    const response = await axios.post(`${URL}/products/category`,{category:category});
    return response.data;
  } catch (error) {
    // Handle error
  }
};


export { fetchFilteredProducts,fetchProducts };



 