import React, { useState, useEffect, useLayoutEffect } from 'react';

const TypeFilter = ({ onCollegeTypeSelect, initialType }) => {
  const collegeType = ["engineering", "management", "pharmacy", "medical", "arts", "science", "commerce", "education", "computer application"];
  const [activeType, setActiveType] = useState(initialType);

  const handleTypeClick = (type) => {
    onCollegeTypeSelect(type);
    setActiveType(type);
  };

  useEffect(() => {
    setActiveType(initialType);
  }, [initialType]);

  return (
    <>
      <div className='pl-4 py-2 flex flex-col items-start'>
        {collegeType.map((currElem, index) => {
          const truncatedElem = currElem.length > 14 ? currElem.slice(0, 14) + '...' : currElem;
          return (
            <button key={index} className={`${activeType.toLocaleLowerCase() === currElem.toLocaleLowerCase() ? 'underline underline-offset-4 text-[#2975f0]' : ''}`} onClick={() => handleTypeClick(currElem)}>
              {truncatedElem.charAt(0).toUpperCase() + truncatedElem.slice(1)}
            </button>
          );
        })}
      </div>

    </>
  );
};

export default TypeFilter;
