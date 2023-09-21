import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image bg-gray-300"></div>
      <div className="skeleton-text bg-white bg-opacity-80 p-1 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
