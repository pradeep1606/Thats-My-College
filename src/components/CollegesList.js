import React, { useEffect } from 'react'
import CollegeView from './CollegeView'
import { useDispatch, useSelector } from 'react-redux';
import { fetchColleges } from '@/store/slices/FilterCollege';
import CollegeListSkeleton from '@/skeleton/CollegeListSkeleton';

const CollegesList = ({ page, collegeTypes }) => {
    const dispatch = useDispatch();
    const { colleges, loading, error } = useSelector((state) => state.allCollege);
    const courses = colleges.courses || (colleges.data && colleges.data.courses) || [];
    const totleColleges = colleges.totalDocuments || (colleges.data && colleges.data.totalDocuments) || [];

    useEffect(() => {
        const apiPost = `/api/courses/get-all/college-details?collegeType=${collegeTypes.toLowerCase()}&page=${page}`
        dispatch(fetchColleges(apiPost));
    }, [dispatch, page, collegeTypes]);

    if (loading) {
        return <CollegeListSkeleton />
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <>
            <div className='mx-4'>
                <p className='text-2xl font-semibold text-blue-900'>List of {collegeTypes} colleges </p>
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
