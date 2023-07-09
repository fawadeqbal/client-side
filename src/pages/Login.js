import React, { useContext, useRef,useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { login } from '../api/user';
import { StoreContext } from '../context/StoreContext';

const Login = () => {
  const nav=useNavigate()
  const {setCurrentUser}=useContext(StoreContext)
  
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  let user;
  function setUser(){
    setCurrentUser(user);
    console.log(user)
  }
  const handleSignIn = async(e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    user=await login({username,password})
    
    if(user.role==='admin'){
      console.log(user)
      setUser()
      nav('/admindashboard')
    }else if(user.role==='seller'){
      setUser()
      nav('/seller')
    }else if(user.role==='client'){
      setUser()
      nav('/')
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="w-full max-w-md">
        <div className='flex justify-center'>
        <h2 className="text-3xl font-semibold text-[#8a4af3] mb-6">Login</h2>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              ref={usernameRef}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSignIn}
              className="bg-[#8a4af3] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-[#8a4af3] hover:text-indigo-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} SpotTroop. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
