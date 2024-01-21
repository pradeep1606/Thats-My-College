import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import axiosInstance from '@/config/AxiosIntercepter';

const AppliedCollegeList = ({ appliedColleges }) => {
    const Api = process.env.API_URL;
    const [collegeData, setCollegeData] = useState([]);
    const getCollegeData = async (collegeId) => {
        try {
            const { data } = await axiosInstance.get(`${Api}/api/college/${collegeId}`);
            console.log(data, collegeId)
            return data;
        } catch (error) {
            console.error('Error fetching college data:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchCollegeData = async () => {
            console.log("log 1")
            if (appliedColleges && appliedColleges.data && Array.isArray(appliedColleges.data.applications)) {
                const dataPromises = appliedColleges.data.applications.map(async (college) => {
                    console.log("it work")
                    const collegeData = await getCollegeData(college.collegeId);
                    return collegeData;
                });

                const collegeDataArray = await Promise.all(dataPromises);
                console.log("collegeDataArray", collegeDataArray);
                setCollegeData(collegeDataArray);
            }
        };

        fetchCollegeData();
    }, [appliedColleges]);


    const handleDelete = (collegeName) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${collegeName}?`);
        if (confirmDelete) {
            // Implement your delete logic here
        }
    };
    console.log("collegeData", collegeData)
    return (
        <>
                <div className='mt-[1vw] text-[4vw] sm:text-[1.5vw]'>
                    <h2 className='capitalize text-xl md:font-semibold'>applied colleges</h2>
                    <div className='[&::-webkit-scrollbar]:hidden h-[40vh] md:h-[40vh] w-[85vw] flex items-center overflow-x-scroll overflow-y-hidden whitespace-nowrap p-2 gap-3'>
                        {collegeData.map((college, index) => (
                            <div key={index} className='flex gap-2 flex-col border-2 border-solid border-[rgb(241,238,238)] rounded-lg shadow-md'>
                                <div className='h-[25vh] w-[280px] md:w-[300px] relative bg-[lavender] flex flex-col items-center justify-center rounded-t-lg overflow-hidden'>
                                    <div className='bg-cover bg-center'>
                                        <Image src={college.data.image[0]} width={1000} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                                    </div>
                                    <div className='absolute bottom-[10%] bg-transparent'>
                                        <p className='text-[#fff] md:text-sm'>
                                            {college.data.name}
                                        </p>
                                    </div>
                                </div>
                                <div className='px-2 space-y-2 text-lg mx-1'>
                                    <p className=''>Status : <span className='text-base'>Apply and Forword</span></p>
                                    <button className='text-2xl' onClick={() => handleDelete(college.name)}>
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
