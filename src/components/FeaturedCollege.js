'use client'
import React, { useContext, useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedCollege } from '@/store/slices/FeaturedSlice';

const FeaturedCollege = () => {
    const dispatch = useDispatch();
    const { college, loading, error } = useSelector((state) => state.featuredCollege);

    useEffect(() => {
        const apiPost = `/api/courses/get-all/college-details?featured=true`
        dispatch(fetchFeaturedCollege(apiPost));
    }, [dispatch]);

    const [chunkSize, setChunkSize] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 768) {
                setChunkSize(3);
            } else if (screenWidth >= 640) {
                setChunkSize(2);
            } else {
                setChunkSize(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (loading) {
        return <p>loading .....</p>
    }
    if (error) {
        return <p>Internal Server Error : `${error}`</p>
    }
    const featuredCollege = college.data.courses;

    const chunkedFeaturedColleges = [];
    for (let i = 0; i < featuredCollege.length; i += chunkSize) {
        chunkedFeaturedColleges.push(featuredCollege.slice(i, i + chunkSize));
    }
    return (
        <div className='mt-12 px-4 pb-12 sm:px-8 bg-white'>
            <div className='p-4 text-2xl sm:text-3xl text-[#262626] font-bold'>Top College</div>
            <div className="w-full mt-4">
                <Carousel
                    showArrows={true}
                    emulateTouch={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button
                                onClick={onClickHandler}
                                title={label}
                                className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
                            >
                                <BsArrowLeft />
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button
                                onClick={onClickHandler}
                                title={label}
                                className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
                            >
                                <BsArrowRight />
                            </button>
                        )
                    }
                >

                    {chunkedFeaturedColleges.map((chunk, index) => (
                        <div key={index} className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 md:px-12 px-4 gap-4 bg-white">
                            {chunk.map(clg => (
                                <div className="rounded-b-md" key={clg.collegeId} >
                                    <div className="h-48 mx-[0.03rem] sm:h-56 bg-cover text-white px-4 rounded-t-md" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${clg.college.image[0]})`, display: 'flex', alignItems: 'flex-end' }}>
                                        <Link href={`/colleges/${clg.collegeId}`}>
                                            <span className="font-semibold text-lg">{clg.college.name}</span>
                                            <p className="text-sm font-normal px-1">{clg.college.address}</p>
                                        </Link>
                                    </div>
                                    <div className="p-4 border-2 border-t-0">
                                        <div className="pb-2 sm:pb-4 flex flex-col items-start">
                                            <p className="font-semibold">BE/B.Tech</p>
                                            <p className="text-gray-600 text-sm">55000 Total Fees</p>
                                            {/* <div className='text-right'>Rating 9/10</div> */}
                                        </div>
                                        <div className='w-full h-[0.05rem] bg-slate-200'></div>
                                        <div className='flex flex-col items-start'>
                                            <div className="py-1 text-sm"><Link href={`/colleges/${clg.collegeId}`}>Show All Courses</Link></div>
                                            <div className='w-full h-[0.05rem] bg-slate-200'></div>
                                            <div className="py-1 text-sm"><Link href={`/colleges/${clg.collegeId}`}>Download Brochure</Link></div>
                                            <div className='w-full h-[0.05rem] bg-slate-200'></div>
                                            <div className="py-1 text-sm"><Link href={`/colleges/${clg.collegeId}`}>Admission</Link></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default FeaturedCollege;
