// InfoSection.jsx
import React from 'react';

const InfoSection = ({ title, description }) => {
  return (
    <div className="p-10 bg-white info-item text-black p-4 rounded-lg">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className='text-wrap text-sm mt-4 lg:text-xl 2xl:text-lg px-2'>{description}</p>
    </div>
  );
};

export default InfoSection;
