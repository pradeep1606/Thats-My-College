'use client'
import { fetchColleges } from '@/store/slices/FilterCollege';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Test = () => {
    const dispatch = useDispatch();
    const { colleges, loading, error } = useSelector((state) => state.allCollege);
   
    console.log(colleges.data);
  
    useEffect(() => {
      dispatch(fetchColleges());
    }, [dispatch]);


  return (
    <div>
      hello
    </div>
  );
}

export default Test;
