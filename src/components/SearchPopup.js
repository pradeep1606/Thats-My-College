import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 shadow-md w-full absolute top-0">
        <button className="absolute md:top-2 top-6 md:right-0 right-0 mt-2 mr-2 text-gray-500" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className='relative flex items-center w-full'>
          <input type='text' className='h-full w-full p-4 pl-10 rounded-md text-lg font-semibold text-slate-600' placeholder='Search for Colleges' />
          <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl'>
            <AiOutlineSearch />
          </div>
        </div>
        <div>bdshvbhsdbb</div>
      </div>
    </div>
  );
};

export default SearchPopup;
