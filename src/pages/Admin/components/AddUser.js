import { useState } from 'react';
import { addUser } from '../../../api/user';
// Assuming you have the User model defined in a separate file

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Updated to use role state

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const user={
        username,
        email,
        password,
        role
      }
        const response = await addUser( user);
  
        console.log(response.data);
    }catch(e){

    }

    // Save the new user to the database using your desired method (e.g., API call, database query)

    // Reset the form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setRole('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add User Page</h1>
      {/* Add user form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-medium mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-64"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-64"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-64"
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="block font-medium mb-1">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-64"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer Services</option>
          </select>
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
