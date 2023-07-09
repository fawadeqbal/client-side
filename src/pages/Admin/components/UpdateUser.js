import React, { useEffect, useState } from 'react';
import { updateUser } from '../../../api/user';

const UpdateUser = ({ users, handleRemoveUser,fetchUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchText, setSearchText] = useState('');
 
  const [updatedUser, setUpdatedUser] = useState({
    username: '',
    password: '',
    email: '',
    role: ''
  });

  useEffect(()=>{
    fetchUsers()
  },[selectedUser])

  // Handle input changes for search text
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    const foundUser = users.find((user) =>
      user.username.toLowerCase().includes(searchText.toLowerCase())
    );
    setSelectedUser(foundUser);
    setUpdatedUser({
      username: foundUser ? foundUser.username : '',
      password: foundUser ? foundUser.password : '',
      email: foundUser ? foundUser.email : '',
      role: foundUser ? foundUser.role : ''
    });
  };

  // Handle input changes for updated user information
  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding user property in the updatedUser object
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };
  

  // Handle save button click
  const handleSaveClick = async () => {
    try {
      // Send the updated user data to the backend for saving
      const response = await updateUser(selectedUser._id, updatedUser); 
      setSelectedUser(null)// Replace with your API endpoint to update user
      console.log(response.data); // Log the response or handle it as needed
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInputChange}
          placeholder="Search by username"
          className="border border-gray-300 rounded px-2 py-1 mb-4"
        />
        <button
          onClick={handleSearchClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      {selectedUser && (
        <div className="border border-gray-300 rounded p-4 mt-4">
          <h2 className="text-lg font-bold mb-4">Update User</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={updatedUser.username}
                onChange={handleUpdateInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={updatedUser.password}
                onChange={handleUpdateInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleUpdateInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
                Role
              </label>
              <select
                name="role"
                value={updatedUser.role}
                onChange={handleUpdateInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="client">Client</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleSaveClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </form>
        </div>
      )}
      <table className="min-w-full bg-white border border-gray-200 mt-4">
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

export default UpdateUser;
