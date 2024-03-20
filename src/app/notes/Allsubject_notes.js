import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";

const Allsubject_notes = ({ query, selectedStream, selectedYear, setSelectedYear, setHideComponent }) => {
    // console.log(query, selectedStream, selectedYear)

    const handleClick =()=>{
        setHideComponent(true);
        setSelectedYear(null);
    }
    return (
        <div className="container mt-1 mb-0 md:mb-4 sm:w-[50vw] bg-blue-100 shadow-md">
            <div className="flex flex-col justify-center items-center mb-4">
                <span className="text-xl font-medium mt-5" href="#">{selectedYear}</span>
                <h5 className="text-2xl font-semibold mt-1 w-4/5 text-center">{query.course}</h5>

                <div className="bg-blue-500 w-4/5 mt-6 flex flex-col justify-center items-center rounded">
                    <h3 className="text-2xl text-white mt-2 mb-2">{selectedStream}</h3>
                </div>

                <div className="flex justify-center flex-col my-10 space-y-2">
                    <div className="flex gap-5 items-start">
                        <h2 className="font-semibold text-xl">Subject 1</h2>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button>
                    </div>

                    <div className="flex gap-5 items-start">
                        <h2 className="font-semibold text-xl">Subject 2</h2>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button>
                    </div>

                    <div className="flex gap-5 items-start">
                        <h2 className="font-semibold text-xl">Subject 3</h2>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button>
                    </div>

                    <div className="flex gap-5 items-start">
                        <h2 className="font-semibold text-xl">Subject 4</h2>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button>
                    </div>

                    <div className="flex gap-5 items-start mb-3">
                        <h2 className="font-semibold text-xl">Subject 5</h2>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button>
                    </div>
                </div>
                <button onClick={handleClick} className="flex bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded gap-2">
                    <IoIosArrowRoundBack className='-mt-1 text-3xl font-extrabold' /> Back To Year List
                </button>
            </div>
        </div>
    );
};

export default Allsubject_notes;
