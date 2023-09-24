"use client";
import { fetchColleges } from '@/slices/filterCollege';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const TestPage = () => {
  const dispatch = useDispatch();
  const { colleges, loading, error } = useSelector((state) => state.filterCollege);
 
  console.log(colleges.data);

  useEffect(() => {
    dispatch(fetchColleges());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Colleges</h1>
      <ul>
       
      </ul>
    </div>
  );
};

export default TestPage;
