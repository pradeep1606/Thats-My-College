"use client"

import CollegeView from '@/components/CollegeView';
import { MobileFilter, DesktopFilter } from '@/components/Filter';
import React, { useState } from 'react';
// import collegeData from '../../api/colleges.json'
import { useFilterContext } from '@/context/filterContext';

const Colleges = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const { filter_college } = useFilterContext();

  // console.log(typeof filter_college, filter_college);

  return (
    <>
      <div className='flex justify-end mt-6 mr-6 md:hidden'>
        <button className="bg-blue-600 text-white px-8 py-1 rounded-lg shadow-lg shadow-blue-500/50" onClick={toggleFilter}>
          Filter
        </button>
      </div>
      {filterVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 md:hidden">
          <div className="bg-black bg-opacity-50 fixed inset-0"></div>
          <div className="bg-white w-full h-full md:w-3/4 mx-auto md:h-auto md:p-4 md:rounded-lg relative">
            <button className="absolute top-0 right-0 m-2 mt-4 bg-white rounded-full p-2" onClick={toggleFilter}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.94 4.94a1 1 0 011.42 0L10 8.59l3.54-3.53a1 1 0 111.42 1.42L11.41 10l3.53 3.54a1 1 0 11-1.42 1.42L10 11.41l-3.54 3.53a1 1 0 01-1.42-1.42L8.59 10 5.06 6.46a1 1 0 010-1.42z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="mt-4">
              <MobileFilter />
            </div>
          </div>
        </div>
      )}
      <div className="flex md:mx-20 mx-1 my-6 md:my-10">
        <div className="w-1/4 mx-2 space-y-2 hidden md:block">
          <DesktopFilter />
        </div>
        <div className="md:w-3/4 w-[100%] mx-2 space-y-4">
          {filter_college && filter_college.length > 0 ? (
            filter_college.map((currElem) => {
              return <CollegeView key={currElem.id} {...currElem} />
            })
          ) : filter_college && filter_college.length === 0 ? (
            <div className='bg-white p-2 font-semibold text-sm text-gray-600'>Colleges Not Available</div>
          ) : (
            <p>Loading College...</p>
          )}
        </div>
      </div>

    </>
  );
};

export default Colleges;
