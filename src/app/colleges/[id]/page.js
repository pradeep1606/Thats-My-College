"use client"
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUniversity, FaMapMarkerAlt, FaFlag } from 'react-icons/fa';
import TabMenu from '@/components/TabMenu';
import Popup from '@/components/Popup';
import Register from '@/components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCollege } from '@/store/slices/SingleCollege';

const CollegeDetails = ({ params }) => {

    const dispatch = useDispatch();
    const { college, loading, error } = useSelector((state) => state.singleCollege);
    const singleCollege = college.data || {};

    const id = params.id;
    useEffect(() => {
        const apiPost = `/api/courses/college/${id}`
        dispatch(fetchSingleCollege(apiPost));
    }, [dispatch]);

    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const { name, logo, university, city, state, established } = singleCollege.collegeId || {};

    let universityS = "";
    if (university) {
        universityS = university.split(" - ")[1];
    }
    return (
        <>
            <div className="py-8 px-4 md:px-8 lg:px-20 bg-gradient-to-r to-cyan-300 from-blue-300">
                <div className="text-2xl text-gray-900 font-bold flex items-center space-x-4">
                    <span><Image src={logo} width={70} height={50} className="rounded-lg md:w-16 md:h-16 w-40 h-16" alt="" /></span>
                    <span>
                        {name} - Admission, Fees, Courses
                        <div className='md:flex md:space-x-6 font-medium'>
                            <div className="text-sm text-gray-600 flex items-center mt-1"><FaMapMarkerAlt className="mr-1 mt-[-0.2rem]" />{city}, {state}</div>
                            <div className="text-sm text-gray-600 flex items-center mt-1"><FaUniversity className="mr-1 mt-[-0.2rem]" />{universityS} University</div>
                            <div className="text-sm text-gray-600 flex items-center mt-1"><FaFlag className="mr-1 mt-[-0.2rem]" />Estd. {established}</div>
                        </div>
                    </span>
                </div>
                <div className="mt-8 space-x-4 text-lg">
                    <button onClick={togglePopup} className="bg-blue-500 text-white px-6 py-2 rounded shadow-lg shadow-blue-500/50 hover:bg-blue-600">Apply Now</button>

                    <Link href="/" className="text-blue-600 border border-blue-600 px-6 py-2 rounded hover:bg-blue-500 hover:text-white">Contact</Link>
                </div>
            </div>
            {showPopup && (
                <Popup onClose={togglePopup}>
                    <Register {...singleCollege.collegeId || {}} />
                </Popup>
            )}
            <TabMenu {...singleCollege || {}} />
        </>
    )
}

export default CollegeDetails;
