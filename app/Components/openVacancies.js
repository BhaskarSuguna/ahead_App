import React from 'react';

const Vacancies = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Open Vacancies</h1>
        <div className="flex space-x-8 mb-8">
          <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
          <div className="w-24 h-24 bg-green-500 rounded-full"></div>
          <div className="w-24 h-24 bg-yellow-500 rounded-full"></div>
        </div>
        <hr className="w-80 border-t-2 border-gray-600" />
      </div>
    </div>
  );
};

export default Vacancies;