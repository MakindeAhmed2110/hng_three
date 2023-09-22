"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'

export default function Home() {


  const words = ["Play with images by rearranging photos", "Drap and drop images anywhere on the box"];
  let i = 0;
  let timer;

  const typingEffect = () => {
    let word = words[i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        document.getElementById("word").innerHTML += word.shift();
      } else {
        deletingEffect();
        return false;
      }
      timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
  };

  const deletingEffect = () => {
    let word = words[i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        document.getElementById("word").innerHTML = word.join("");
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typingEffect();
        return false;
      }
      timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
  };

  useEffect(() => {
    typingEffect();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="flex min-h-screen m-0 flex-col lg:flex-row lg:justify-between lg:items-center justify-center mt-[5px]">
      
    <div className='lg:w-3/5 w-full text-pink h-auto lg:h-screen bg-blue p-8 lg:p-16 font-sans'>
      <label className='font-sans text-xl'>Gallery</label>
      <h3 className='font-bold text-xl lg:text-x3l pt-4 lg:pt-44'>
        Wildlife Images<br /> <span id="word" className='font-thin pt-2 lg:pt-4'></span>
      </h3>
    </div>
  
    <div className=' lg:h-screen lg:flex lg:flex-col lg:pr-32 items-center justify-center pl-20'>
      <h1 className='font-bold text-xl lg:text-3xl mb-2'>Get started</h1>
      <Link href='/login'>
        <button className="px-28 lg:px-32 py-4 font-semibold rounded-xl bg-indigo-500 text-white">Login</button>
      </Link>
    </div>
  </main>
  

  )
}
