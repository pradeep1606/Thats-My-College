import React, { useState } from 'react';
import { RxCaretUp, RxCaretDown, RxCaretRight } from 'react-icons/rx';
import TypeFilter from './TypeFilter';
import CourseFilter from './CourseFilter';

export const MobileFilter = ({ courses, types, onSelectType, onSelectCourse, selectedCourse, selectedType }) => {
  const [content, setContent] = useState('collegeType');
  const handleButtonClick = (newContent) => {
    setContent(newContent);
  };

  return (
    <>
      <div className='md:hidden font-semibold text-2xl flex justify-center'>Filter</div>
      <div className="border-t border-gray-300 mt-2"></div>
      <div className='grid grid-cols-5 divide-x'>
        <div className='col-span-2 divide-y'>
          <button
            className={`px-2 py-4 flex items-center justify-between w-full ${content === 'collegeType' ? 'text-blue-600' : ''}`}
            onClick={() => handleButtonClick('collegeType')}
          >
            College Type <RxCaretRight />
          </button>
          <button
            className={`px-2 py-4 flex items-center justify-between w-full ${content === 'city' ? 'text-blue-600' : ''}`}
            onClick={() => handleButtonClick('city')}
          >
            City <RxCaretRight />
          </button>
        </div>

        {/* First  */}
        <div className='col-span-3 mt-4 px-4'>
          {content === 'collegeType' &&
            <TypeFilter types={types} onSelectType={onSelectType} selectedType={selectedType} />
          }

          {/* Second */}
          {content === 'city' &&
            <CourseFilter courses={courses} onSelectCourse={onSelectCourse} selectedCourse={selectedCourse} />
          }

        </div>
      </div>
    </>
  );
};




export const DesktopFilter = ({ courses, types, onSelectType, onSelectCourse, selectedCourse, selectedType }) => {
  const [collegeTypeOpen, setCollegeTypeOpen] = useState(true);
  const [courseTypeOpen, setCourseTypeOpen] = useState(true)


  const toggleAccordion2 = () => (
    setCourseTypeOpen(!courseTypeOpen)
  )
  const toggleAccordion = () => {
    setCollegeTypeOpen(!collegeTypeOpen);
  };

  return (
    <>
      <div className='bg-white p-4 rounded'>
        <div className='px-4 py-2 flex justify-between items-center cursor-pointer' onClick={toggleAccordion}>
          <h2 className='font-semibold text-gray-700'>College Type</h2>
          <span className='text-xl'>{collegeTypeOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
        </div>
        {collegeTypeOpen && (
          <div>
            <TypeFilter types={types} onSelectType={onSelectType} selectedType={selectedType} />
          </div>
        )}
      </div>

      <div className='bg-white p-4 rounded'>
        <div className='px-4 py-2 flex justify-between items-center cursor-pointer' onClick={toggleAccordion2}>
          <h2 className='font-semibold text-gray-700'>Courses</h2>
          <span className='text-xl'>{courseTypeOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
        </div>
        {courseTypeOpen && (
          <div>
            <CourseFilter courses={courses} onSelectCourse={onSelectCourse} selectedCourse={selectedCourse} />
          </div>
        )}
      </div>
    </>
  );
};
