// ImagePage.js

import React from 'react';
import { useParams } from 'next/navigation';

const ImagePage = () => {
  const { id } = useParams();

  // Use the id to retrieve the image details

  return (
    <div>
      <h1>Image {id}</h1>
      {/* Render the image here */}
    </div>
  );
};

export default ImagePage;
