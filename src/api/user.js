import axios from "axios";
const URL="https://summerkings.onrender.com"


export const getUser = async(token)=>{
    return await axios.get(URL+'/user',{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
  }
  
  export const deleteUser = async (userId,token) => {
    try {
      const response = await axios.delete(`${URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete user");
    }
  };

  export const updateUser=async(id,user)=>{
    try {
      // Send the updated user data to the backend for saving
      const response = await axios.put(`${URL}/user/${id}`, user); // Replace with your API endpoint to update user
      console.log(response.data); // Log the response or handle it as needed
    } catch (error) {
      console.error(error);
    }
  }

  export const addUser = async(user)=>{
    return await axios.post(URL+'/user',user)
  }
  export const login = async(user)=>{
    const response =await axios.post(URL+'/user/login',user)
    return response.data
  }
  