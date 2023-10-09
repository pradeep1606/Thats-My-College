import React, { useEffect } from 'react'
import CollegeView from './CollegeView'
import { useDispatch, useSelector } from 'react-redux';
import { fetchColleges } from '@/store/slices/FilterCollege';
import CollegeListSkeleton from '@/skeleton/CollegeListSkeleton';

const CollegesList = ({ page }) => {
    const dispatch = useDispatch();
    const { colleges, loading, error } = useSelector((state) => state.allCollege);
    const courses = colleges.courses || (colleges.data && colleges.data.courses) || [];

    useEffect(() => {
        const apiPost = `/api/courses/get-all/college-details?page=${page}`
        dispatch(fetchColleges(apiPost));
    }, [dispatch, page]);

    if (loading) {
        return <CollegeListSkeleton />
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <>
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
