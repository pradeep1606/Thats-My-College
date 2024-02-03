import React, { useEffect } from 'react'
import CollegeView from './CollegeView'
import { useDispatch, useSelector } from 'react-redux';
import { fetchColleges } from '@/store/slices/FilterCollege';
import CollegeListSkeleton from '@/skeleton/CollegeListSkeleton';
import { IoMdClose } from "react-icons/io";

const CollegesList = ({ activeState, activeCity, page, activeType, activeCourse, courseType }) => {
    const dispatch = useDispatch();
    const { colleges, loading, error } = useSelector((state) => state.allCollege);
    const courses = colleges.courses || (colleges.data && colleges.data.courses) || [];
    const totleColleges = colleges.totalDocuments || (colleges.data && colleges.data.totalDocuments) || [];

    useEffect(() => {
        const apiPost = `/api/courses/get-all/college-details?collegeType=${activeType.toLowerCase()}&courseName=${activeCourse.toLowerCase()}&state=${activeState}&city=${activeCity}&page=${page}`
        dispatch(fetchColleges(apiPost));
    }, [dispatch, page, activeType, activeCourse, activeCity, activeState]);

    if (loading) {
        return <CollegeListSkeleton />
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <>
            <div className='mx-4'>
                <p className='text-2xl font-semibold text-blue-900'>List of {activeType.charAt(0).toUpperCase() + activeType.slice(1)} colleges </p>
                <span className='md:flex gap-2 my-1'>
                {activeCourse && (
                    <p className="flex items-center gap-1  font-semibold text-blue-900 md:border border-blue-700 rounded-lg md:px-1 md:bg-blue-100">
                        Course: {activeCourse}  <IoMdClose />
                    </p>
                )}
                {activeCity && (
                    <p className=" flex items-center gap-1 font-semibold text-blue-900 md:border border-blue-700 rounded-lg md:px-1 md:bg-blue-100">
                        City : {activeCity}  <IoMdClose />
                    </p>
                )}
                {activeState && (
                    <p className=" flex items-center gap-1 font-semibold text-blue-900 md:border border-blue-700 rounded-lg md:px-1 md:bg-blue-100">
                        State : {activeState}  <IoMdClose />
                    </p>
                )}
                </span>
                <p className='text-sm text-slate-500'>Found {totleColleges} colleges</p>
            </div>
            {courses.length > 0 ? (
                courses.map((currElm, indx) => {
                    return <CollegeView key={indx} {...currElm} />
                })
            ) : (
                <p>No colleges available.</p>
            )}
        </>
    )
}

export default CollegesList
