import React from 'react';

const Banner = ({ message, className }) => {
  return (
    <div className={`p-2 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 text-center text-gray-800 rounded-xl shadow-md ${className}`}>
      <h2 className="text-lg font-semibold">{message}</h2>
    </div>
  );
};

export default Banner;
