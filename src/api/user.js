import axios from "axios";
const URL="http://localhost:8000"

export const getUser = async()=>{
    return await axios.get(URL+'/user')
  }
  
  export const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`${URL}/user/${userId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete user");
    }
  };

  export const addUser = async(user)=>{
    return await axios.post(URL+'/user',user)
  }
  