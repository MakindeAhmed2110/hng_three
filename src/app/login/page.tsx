"use client"
import React, {useState, useEffect} from 'react';

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";


const Login = () =>{
  const {push} = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const payload = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    
   try{
     const response = await axios.post("/api/auth/login", payload)
     console.log(response)
     alert(JSON.stringify(response.data));

     //redirect the user to gallery
     push('/dashboard')
   } catch (error) {
     if (error instanceof AxiosError) {
      alert(error.message);
   }else{
    alert(error);
  }

   

   }
  }
  
    return (
      <div className='flex flex-col items-center
      justify-center min-h-screen py-2 pt-12'>
        <h1 className="text-3xl font-bold">Login</h1>

        <form className="flex flex-col mt-10 gap-5" onSubmit={handleSubmit} action="#" method="POST">
          <div className='flex flex-col gap-3'>
            <label>Email</label>
            <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded lg:w-full w-80 py-3 px-4 text-gray-700 leading-tight 
                 focus:outline-none focus:bg-white focus:border-purple-200"
              type="email"
              placeholder="Email"
              name="username"
              required
            />
          </div>
          <div  className='flex flex-col gap-3'>
          <label>Password</label>
            <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded lg:w-full w-80 py-3 px-4 text-gray-700 leading-tight 
            focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              placeholder="Password"
              name='password'
              required
            />
          </div>

          <button type="submit" className='bg-indigo-500 px-36 py-3  lg:w-full w-80 text-white rounded-xl'>Login</button>
       
        </form>
      </div>
    );
  };
  
  export default Login;