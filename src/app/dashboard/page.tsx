"use client"

import React, { useState, useEffect, useCallback} from 'react'
import ImagePage from '../components/ImagePage';
import ImageModal from '../components/ImageModal';

import { images } from '../components/Photos'

import arrayMove from "array-move";
import Sort from '../components/sortable'

const Dashboard = () => {

    
    
    const [searchQuery, setSearchQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeId, setActiveId] = useState(null)
    const [items, setItems] = useState(images);



      const filteredImages = images.filter(image =>
        image.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      const handleSearch = e => {
        setSearchQuery(e.target.value);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };
    
      const handleSelectImage = id => {
        setSelectedImage(id);
        closeModal();
      };

      
    
  
    
      return (
        <div className="image-gallery pt-10 pl-8 pr-8">

            <div 
            className='flex items-center justify-between  max-sm:flex-col min-sm:gap-4'> 
            <h1 className=' font-semibold text-3xl'>Gallery</h1>


            <input
        type="text"
        placeholder="Search for image by tag"
        value={searchQuery}
        onChange={handleSearch}
        className='bg-gray-200 w-80 appearance-none border-2 border-gray-200 rounded  lg:mt-0 mt-9 py-3 px-6 text-gray-700 leading-tight 
        focus:outline-none focus:bg-white focus:border-purple-200'
      />
      </div>
      {modalOpen && (
        <ImageModal images={filteredImages} closeModal={closeModal} onSelect={handleSelectImage} />
      )}
      {selectedImage && (
        <ImagePage
          id={selectedImage}
          url={images[selectedImage - 1].url}
          tag={images[selectedImage - 1].tag}
        />
        )}






        <Sort />





      </div>
    );
  };
  
  export default Dashboard