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
    <main className="flex min-h-screen  m-0 flex-row items-center justify-between ">
     
      <div className='basis-3/5 text-pink h-100 bg-blue p-16 h-screen font-sans'>
       <label className=' font-sans text-lg'> Gallery</label>

       <h3 className='font-bold text-2xl pt-44'>
        Wildlife Images<br /> <span id="word" className='font-thin pt-7'></span>
         </h3>
      </div>

     <div className=' h-screen flex flex-col pr-32 gap-4 items-center justify-center'>
      <h1 className='font-bold text-3xl '>Get started</h1>
     <Link href='/login'>
     <button className="px-32 py-4 font-semibold rounded-xl bg-indigo-500 text-white">Login</button>
     </Link>
     </div>
     
    </main>
  )
}
