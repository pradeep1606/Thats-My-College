import React from 'react';

const TypeFilter = () => {

  const collegeType = ["engineering", "management", "pharmacy", "medical", "arts", "science", "commerce", "law", "education", "computer application"];

  return (
    <>
      {/* <div className='px-6 py-2 flex flex-col items-start'>
        {collegeType.map((currElem, index) => {
          return (
            <label key={index} className='flex items-center'>
              <input
                type='checkbox'
                name='collegeType'
                value={currElem}
                onChange={updateFilterValue}
                className='mr-2'
              />
              {currElem.charAt(0).toUpperCase() + currElem.slice(1)}
            </label>
          );
        })}
      </div> */}
    </>
  )
}

export default TypeFilter;
