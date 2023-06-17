import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", {
        username,
        email,
        password
      });

      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-[#8a4af3]">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={(e)=>setUsername(e.currentTarget.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="email"
              onChange={(e)=>setEmail(e.currentTarget.value)}
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e)=>setPassword(e.currentTarget.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
            />
          </div>
          <button
            className="w-full bg-[#8a4af3] hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500 text-xs">
          Already have an account?{" "}
          <Link className="text-indigo-500 hover:text-indigo-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
