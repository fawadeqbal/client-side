import React from 'react';

const ViewUser = ({ users, handleRemoveUser }) => {
  // const [updatedUser, setUpdatedUser] = useState(null);
  // const [showPassword, setShowPassword] = useState(false);

  // // Handle input changes for updated user information
  // const handleUpdateInputChange = (e) => {
  //   const { name, value } = e.target;

  //   // Update the corresponding user object with the new value
  //   setUpdatedUser((prevUser) => ({
  //     ...prevUser,
  //     [name]: value
  //   }));
  // };

  // Handle save button click
  // const handleSaveClick = async () => {
  //   try {
  //     // Send the updated user data to the backend for saving
  //     const response = await axios.put(`/users/${updatedUser._id}`, updatedUser); // Replace with your API endpoint to update user
  //     console.log(response.data); // Log the response or handle it as needed
  //     setUpdatedUser(null);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4">Username</th>
            <th className="py-2 px-4">Password</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="flex-col">
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 text-center">{user.username}</td>
              <td className="py-2 px-4 text-center">{user.password}</td>
              <td className="py-2 px-4 text-center">{user.email}</td>
              <td className="py-2 px-4 text-center">{user.role}</td>
              
                              
              <td className="py-2 px-4 text-center">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRemoveUser(user._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUser;
