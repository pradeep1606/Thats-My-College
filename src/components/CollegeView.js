import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Popup from './Popup';
import Register from './Register';

const CollegeView = (currElm) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  const { _id, name, university, rating, logo } = currElm.college

  const courseNames = currElm.courses?.map((currCourse) => currCourse.courseName);
  const onlyCourseName = courseNames?.join(', ');
  return (
    <>
      <div className="bg-white p-4 md:flex rounded">
        <div className='flex'>
          <div>
            <Image src={logo} width={70} height={70} alt="" />
          </div>
          <div>
            <Link href={`/colleges/${_id}`} className='text-blue-700 text-xl'>{name}</Link>
            <p className=''>Rating {rating}</p>
            <p className='text-sm mt-2'>University : <span className='text-gray-500'>{university}</span></p>
            {onlyCourseName && (
              <p className='text-sm mt-2'>Courses : <span className='text-gray-400'>{onlyCourseName}</span></p>
            )}
            <Link href={`/colleges/${_id}`} className='text-sm text-blue-400'>View All Course Fee</Link>
          </div>
        </div>
        <div className='flex flex-col ml-auto space-y-4 md:mt-0 mt-3 text-center'>
          <button onClick={togglePopup} className="bg-blue-500 text-white px-4 py-[0.32rem] rounded-lg shadow-lg shadow-blue-500/50 hover:bg-blue-600">Apply Now</button>
          <Link href="/" className='text-blue-600 border border-blue-600 px-8 py-1 rounded-lg hover:bg-blue-500 hover:text-white'>Contact</Link>
        </div>
      </div>
      {showPopup && (
        <Popup onClose={togglePopup}>
          <Register {...currElm.college || {}} />
        </Popup>
      )}
    </>
  );
};

export default CollegeView;
