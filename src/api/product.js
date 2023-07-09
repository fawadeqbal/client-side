import axios from "axios";

const URL='https://summerkings.onrender.com'


export const addProduct = async (productData) => {

  try {
    const response = await axios.post(`${URL}/products`, productData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add product');
  }
};
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
const getProductById= async (id)=>{
  try{
    const item =await axios.get(URL+'/products/'+id);
    console.log(item)
    return item.data;
  }catch(e){
    console.log(e)
  }
  
}



export { fetchFilteredProducts,fetchProducts,getProductById };



 