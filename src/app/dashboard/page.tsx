"use client"

import React, { useState, useEffect, useCallback} from 'react'

import { images } from '../components/Photos'
import { Signout } from "../components/logout";

import arrayMove from "array-move";
import Sort from '../components/sortable'
import  Cookies from 'js-cookie'; // Importing js-cookie
import { useRouter } from "next/navigation";

const Dashboard = () => {
   const router = useRouter();
    
    
    const [searchQuery, setSearchQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeId, setActiveId] = useState(null)
    const [items, setItems] = useState(images);



     

      
      
    
      return (
        <div className="image-gallery pt-10 pl-8 pr-8">

            <div 
            className='flex items-center justify-center  max-sm:flex-col min-sm:gap-4'> 
            <h1 className=' font-semibold flex flex-row items-center justify-center gap-2 text-3xl'>Gallery <span className='h-4 w-4 bg-pink rounded-full'></span></h1>

           
      </div>
      <Sort />

      </div>
    );
  };

  
  export default Dashboard