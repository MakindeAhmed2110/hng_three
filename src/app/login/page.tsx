"use client"
import React, {useState, useEffect} from 'react';
import { useRouter } from "next/navigation";
import  Cookies from 'js-cookie'; // Importing js-cookie


const Login = () =>{
    const router = useRouter()
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (email === 'user@gmail.com' && password === '1password') {
        setError('');
        alert('Login successful!'); // You can replace this with actual login code

        
       // Set a cookie upon successful login
        Cookies.set('loggedIn', 'true', { expires: 7 }); // Cookie expires in 7 days
        router.push('/dashboard')
      } else {
        setError('Invalid email or password');
      }
    };
  
    return (
      <div className='flex flex-col items-center
      justify-center min-h-screen py-2 pt-12'>
        <h1 className="text-3xl">Login</h1>

        <form className="flex flex-col mt-10 gap-5" onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3'>
            <label>Username</label>
            <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight 
                 focus:outline-none focus:bg-white focus:border-purple-200"
              type="email"
              placeholder="Username"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div  className='flex flex-col gap-3'>
          <label>Password</label>
            <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight 
            focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className='bg-indigo-500 px-36 py-3  text-white rounded-lg'>Login</button>
          {error && <p className="text-red-500 flex gap-2 items-center">
          <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>notice1</title> <path d="M15.5 3c-7.456 0-13.5 6.044-13.5 13.5s6.044 13.5 13.5 13.5 13.5-6.044 13.5-13.5-6.044-13.5-13.5-13.5zM15.5 27c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5 10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5zM15.5 10c-0.828 0-1.5 0.671-1.5 1.5v5.062c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v-5.062c0-0.829-0.672-1.5-1.5-1.5zM15.5 20c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5z"></path> </g></svg>
          {error}</p>}
        </form>
      </div>
    );
  };
  
  export default Login;