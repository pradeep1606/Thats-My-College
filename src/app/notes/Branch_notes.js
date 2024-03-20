'use client'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import Allsubject_notes from '@/app/notes/Allsubject_notes';

const Branch_notes = ({ toggleView, query }) => {
  const branches = [
    {
      course: 'B.Tech',
      stream: ['Computer Science & Engineering', 'Information Technology', 'Mechanical', 'Civil', 'Electronics and Communication'],
      year: ['1st Year', '2nd Year', '3rd Year', '4th Year']
    },
    {
      course: 'M.Tech',
      stream: ['Computer Science & Engineering', 'Information Technology', 'Mechanical', 'Civil', 'Electronics and Communication'],
      year: ['1st Year', '2nd Year']
    },
    {
      course: 'Diploma',
      stream: ['Computer Science & Engineering', 'Information Technology', 'Mechanical', 'Civil', 'Electronics and Communication'],
      year: ['1st Year', '2nd Year', '3rd Year']
    },
    {
      course: 'MBA',
      stream: [],
      year: ['1st Year', '2nd Year'],
    },
    {
      course: 'BBA',
      stream: ['marketing'],
      year: ['1st Year', '2nd Year', '3rd Year']
    }
  ];

  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [hideComponent, setHideComponent] = useState(true); // State to control the visibility of the current component

  // Filter branches based on the query course
  const filteredBranches = branches.find(branch => branch.course === query.course);

  const handleSelectStream = (stream) => {
    setSelectedStream(stream);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setHideComponent(false); // Hide the current component
  };

  return (
    <>
      <div className='library'>
        {/* navigator */}
        <span className='text-gray-100 pl-3 md:pl-12 text-sm underline'>{query.course} &gt;&nbsp; {selectedStream} &gt;&nbsp; {selectedYear}&gt;&nbsp;</span>

        {hideComponent ? ( // Conditionally render the current component based on the value of hideComponent state
          <div className='h-2/3 p-8 md:py-8 w-full flex flex-col items-center justify-center'>
            {selectedStream ? (
              <>
                <h1 className='text-white text-3xl text-center capitalize font-semibold tracking-wider'>Please select your year</h1>
                <div className='grid gap-5 py-7 whitespace-nowrap '>
                  {/* Map through the years and render year buttons */}
                  {filteredBranches.year.map((year, index) => (
                    <button key={index} onClick={() => handleSelectYear(year)} className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full capitalize tracking-wide'>{year}</button>
                  ))}
                </div>
                <button onClick={() => setSelectedStream(null)} className="flex bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded gap-2">
                  <IoIosArrowRoundBack className='-mt-1 text-3xl font-extrabold' /> Back To Stream
                </button>
              </>
            ) : (
              <>
                <h1 className='text-white text-3xl text-center capitalize font-semibold tracking-wider'>Please select your stream</h1>
                <div className='grid gap-5 py-7 whitespace-nowrap '>
                  {/* Map through the streams and render stream buttons */}
                  {filteredBranches && filteredBranches.stream.length > 0 ? (
                    filteredBranches.stream.map((stream, index) => (
                      <button key={index} onClick={() => handleSelectStream(stream)} className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full capitalize tracking-wide'>{stream}</button>
                    ))
                  ) : (
                    <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full capitalize'>Proceed to year</button>
                  )}
                </div>
                <button onClick={toggleView} className="flex bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded gap-2">
                  <IoIosArrowRoundBack className='-mt-1 text-3xl font-extrabold' /> Back To Course
                </button>
              </>
            )}
          </div>
        ) : (<div className='flex justify-center'><Allsubject_notes query={query} selectedStream={selectedStream} selectedYear={selectedYear} setSelectedYear={setSelectedYear} setHideComponent={setHideComponent} /></div>)
        }
      </div>
    </>
  );
};

export default Branch_notes;

