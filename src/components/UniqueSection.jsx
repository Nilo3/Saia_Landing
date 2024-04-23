import React from 'react';

const UniqueSection = ({ title, description }) => {
  return (
    <div className="bg-black text-white p-10 md:p-20">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default UniqueSection;
