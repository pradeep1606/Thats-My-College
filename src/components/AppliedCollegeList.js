import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import axiosInstance from '@/config/AxiosIntercepter';

const AppliedCollegeList = ({ appliedColleges, setappliedColleges }) => {
  const Api = process.env.API_URL;  

  const handleDelete = async (applicationId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`${Api}/api/admission-application/${applicationId}`);
        setappliedColleges((prev) => ({
          ...prev,
          data: {
            applications: prev.data.applications.filter(app => app._id !== applicationId)
          }
        }));

      } catch (error) {
        console.error("Error deleting college:", error);
      }
    }
  };
    return (
        <>
                <div className='mt-[1vw] text-[4vw] sm:text-[1.5vw]'>
                    <h2 className='capitalize text-xl md:font-semibold'>applied colleges</h2>
                    <div className='[&::-webkit-scrollbar]:hidden h-[40vh] md:h-[40vh] w-[85vw] flex items-center overflow-x-scroll overflow-y-hidden whitespace-nowrap p-2 gap-3'>
                        {appliedColleges?.data?.applications.map((college, index) => (
                            <div key={index} className='flex gap-2 flex-col border-2 border-solid border-[rgb(241,238,238)] rounded-lg shadow-md'>
                                <div className='h-[25vh] w-[280px] md:w-[300px] relative bg-[lavender] flex flex-col items-center justify-center rounded-t-lg overflow-hidden'>
                                    <div className='bg-cover bg-center'>
                                        <Image src={college.collegeId.image[0]} width={1000} height={400} alt={college.collegeId.name} className='object-cover object-center h-full w-full filter brightness-[90%]' />
                                    </div>
                                    <div className='absolute bottom-[10%] bg-transparent'>
                                        <p className='text-[#fff] md:text-sm'>
                                            {college.collegeId.name}
                                        </p>
                                    </div>
                                </div>
                                <div className='px-2 space-y-2 text-lg mx-1'>
                                    <p className=''>Status : <span className='text-base'>Apply and Forword</span></p>
                                    <button className='text-2xl' onClick={() => handleDelete(college._id)}>
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </>
    );
};

export default AppliedCollegeList
