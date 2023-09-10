'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const HomeStrip = () => {
    const items = [
        {
            src: '/logo/college.png',
            value: '5,000+',
            label: 'College Listed'
        },
        {
            src: '/logo/expert.png',
            value: '40+',
            label: 'Expert Available Every Time'
        },
        {
            src: '/logo/admission.png',
            value: '1,000+',
            label: 'Admissions This Year'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    return (
        <>
            {/* mobile view */}
            <div className="h-40 w-full flex justify-center items-center md:hidden" style={{ background: 'linear-gradient(to right, #f2870d, #3f53d9f0)' }}>
                <div className="text-gray-200 relative">
                    <div className="flex items-center justify-center">
                        <div className="mr-2">
                            <Image src={items[activeIndex].src} alt="" width={50} height={50} />
                        </div>
                        <div className="text-left">
                            <div>
                                <span className="block text-xl font-bold">{items[activeIndex].value}</span>
                                <span className="block">{items[activeIndex].label}</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-0 flex items-center pl-2">
                        <button className="bg-transparent text-white text-xl p-2" onClick={handlePrev}>
                            &lt;
                        </button>
                    </div>
                    <div className="absolute right-0 flex items-center pr-2">
                        <button className="bg-transparent text-white text-xl p-2" onClick={handleNext}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>

            {/* desktop view */}
            <div className="h-40 w-full hidden md:block" style={{ background: 'linear-gradient(to right, #f2870d, #3f53d9f0)' }}>
                <div className="grid grid-cols-3 gap-32 text-gray-200 py-12">
                    {items.map((item, index) => (
                        <div className="flex items-center justify-center" key={index}>
                            <div className="mr-2">
                                <Image src={item.src} alt="" width={50} height={50} />
                            </div>
                            <div className="text-left">
                                <div>
                                    <span className="block text-xl font-bold">{item.value}</span>
                                    <span className="block">{item.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeStrip;
