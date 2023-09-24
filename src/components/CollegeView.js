import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Popup from './Popup';
import Register from './Register';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllColleges } from '@/store/slices/FilterCollege';

const CollegeView = (currElem) => {
  
  // const data = useSelector(state => state.allCollege.colleges)
  // const dispatch = useDispatch();
  // const getData=()=>{
  //   dispatch(getAllColleges());
  // }
  // console.log("api data ", data);


  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }
  const closePopupManual = () => {
    setShowPopup(false);
  }

  const { id, name, university, courses, rating, logo } = currElem;
  const courseNames = courses?.map((currCourse) => currCourse.courseName);
  const onlyCourseName = courseNames?.join(', ');
  return (
    <>
      <div className="bg-white p-4 md:flex rounded">
        <div className='flex'>
          <div>
            <Image src={logo} width={70} height={70} alt="" />
          </div>
          <div>
            <Link href={`/colleges/${id}`} className='text-blue-700 text-xl'>{name}</Link>
            <p className=''>Rating {rating}</p>
            <p className='text-sm mt-2'>University : <span className='text-gray-500'>{university}</span></p>
            {onlyCourseName && (
              <p className='text-sm mt-2'>Course : <span className='text-gray-400'>{onlyCourseName}</span></p>
            )}
            <Link href={`/colleges/${id}`} className='text-sm text-blue-400'>View Course Fee</Link>
          </div>
        </div>
        <div className='flex flex-col ml-auto space-y-4 md:mt-0 mt-3 text-center'>
          <button onClick={togglePopup} className="bg-blue-500 text-white px-4 py-[0.32rem] rounded-lg shadow-lg shadow-blue-500/50 hover:bg-blue-600">Apply Now</button>
          <Link href="/" className='text-blue-600 border border-blue-600 px-8 py-1 rounded-lg hover:bg-blue-500 hover:text-white'>Contact</Link>
        </div>
      </div>
      {showPopup && (
        <Popup onClose={togglePopup}>
          <Register closePopupManual={closePopupManual} {...currElem} />
        </Popup>
      )}
    </>
  );
};

export default CollegeView;
