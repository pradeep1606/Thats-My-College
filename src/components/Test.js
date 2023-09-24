'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColleges } from '@/store/slices/filterCollege';
import { fetchApi } from '@/store/slices/filterCollege';

const Test=()=> {
  const dispatch = useDispatch();
  const colleges = useSelector(state => state.data);

  console.log("logging data", fetchApi);

  useEffect(() => {
      dispatch(fetchColleges(fetchApi));
  }, [dispatch]);

// const handleClick=()=>{
//     dispatch(fetchColleges());
// }

  return (
    <div>
        hello
        {/* <button onClick={handleClick}>click here </button> */}
    
    </div>
  );
}

export default Test;
