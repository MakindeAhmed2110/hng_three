// ImageModal.js

import React from 'react';
import Link from 'next/link';

const ImageModal = ({ images, closeModal, onSelect }) => {
  return (
    <div className="modal bg-indigo-500 w-80 block rounded-lg mt-2 pb-3 ml-auto px-6 pt-2">
      <button onClick={closeModal} className="modal-close float-right bg-white px-5 py-2 text-black rounded-xl">
        Close
      </button>

      <div className="grid grid-cols-1 gap-4 pt-4 ">
        {images.map(image => (
          <div key={image.id} className="relative w-full bg-white h-15 flex gap-5">
       
              <img src={image.url} alt={image.tag} className=" h-15 w-12 border border-gray-400" />
              <span>{image.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageModal;

