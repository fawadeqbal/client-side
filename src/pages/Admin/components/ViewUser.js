import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ViewUser = ({ users, handleRemoveUser }) => {
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes for updated user information
  const handleUpdateInputChange = (e, userId) => {
    const { name, value } = e.target;

    // Update the corresponding user object with the new value
    setUpdatedUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, [name]: value } : user
      )
    );
  };

  // Handle save button click
  const handleSaveClick = async (userId) => {
    try {
      const updatedUser = updatedUsers.find((user) => user._id === userId);

      // Send the updated user data to the backend for saving
      const response = await axios.put(`/users/${userId}`, updatedUser); // Replace with your API endpoint to update user
      console.log(response.data); // Log the response or handle it as needed
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Users Page</h1>
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
              <td className="py-2 px-4 text-center">
                {user._id === updatedUsers._id ? (
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={(e) => handleUpdateInputChange(e, user._id)}
                    className="border border-gray-300 rounded px-6 py-3 w-50"
                  />
                ) : (
                  <span>{user.username}</span>
                )}
              </td>
              <td className="py-2 px-4 text-center">
                {user._id === updatedUsers._id ? (
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={user.password}
                      onChange={(e) => handleUpdateInputChange(e, user._id)}
                      className="border border-gray-300 rounded px-6 py-3 w-50"
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                ) : (
                  <span>{user.password}</span>
                )}
              </td>
              <td className="py-2 px-4 text-center">
                {user._id === updatedUsers._id ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleUpdateInputChange(e, user._id)}
                    className="border border-gray-300 rounded px-2 py-1 w-48"
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </td>
              <td className="py-2 px-4 text-center">
                {user._id === updatedUsers._id ? (
                  <select
                    name="role"
                    value={user.role}
                    onChange={(e) => handleUpdateInputChange(e, user._id)}
                    className="border border-gray-300 rounded px-2 py-1 w-32"
                  >
                    <option value="admin">Admin</option>
                    <option value="seller">Seller</option>
                    <option value="client">Client</option>
                  </select>
                ) : (
                  <span>{user.role}</span>
                )}
              </td>
              <td className="py-2 px-4 text-center">
                {user._id === updatedUsers._id ? (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleSaveClick(user._id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => setUpdatedUsers(user)}
                  >
                    Edit
                  </button>
                )}
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
