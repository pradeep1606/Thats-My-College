import React from 'react';
import Popup from './Popup1';
import { FaUser, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import Link from 'next/link';

const Signup = ({ onClose, onToggleLogin }) => {
    return (
        <Popup title="Create Your Account" onClose={onClose}>
            <form action="" className="mt-12 flex flex-col">
                <div className="grid md:grid-cols-2 mb-6 gap-6">
                    <div className="flex relative h-12 border bg-white items-center rounded">
                        <div className="flex -mr-px justify-center px-4">
                            <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600" >
                                <FaUser />
                            </span>
                        </div>
                        <input type="text" className="flex-auto w-px border-0 h-10 self-center" placeholder="Enter Your Name" />
                    </div>
                    <div className="flex relative h-12 border bg-white items-center rounded">
                        <div className="flex -mr-px justify-center p-4">
                            <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600" >
                                <FaEnvelope />
                            </span>
                        </div>
                        <input type="email" className="flex-auto w-px border-0 h-10 self-center" placeholder="Enter Your Email" />
                    </div>
                    <div className="flex relative h-12 border bg-white items-center rounded">
                        <div className="flex -mr-px justify-center p-4">
                            <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600" >
                                <HiPhone />
                            </span>
                            <span className="flex items-center bg-white border-l px-1 py-[0.62rem] rounded rounded-r-none text-gray-600" >
                                +91
                            </span>
                        </div>
                        <input type="text" className="flex-auto w-px border-0 h-10 self-center" placeholder="Mobile Number" />
                    </div>
                    <div className="flex relative h-12 border bg-white items-center rounded">
                        <div className="flex -mr-px justify-center p-4">
                            <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600" >
                                <MdLocationPin />
                            </span>
                        </div>
                        <input type="email" className="flex-auto w-px border-0 h-10 self-center" placeholder="Current City" />
                    </div>
                    <div className="flex relative h-12 border bg-white items-center rounded">
                        <div className="flex -mr-px justify-center p-4">
                            <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600" >
                                <FaGraduationCap />
                            </span>
                        </div>
                        <input type="email" className="flex-auto w-px border-0 h-10 self-center" placeholder="Interested Course" />
                    </div>
                </div>
                <Link href="/" className="bg-blue-500 hover:bg-blue-600 py-4 text-center  text-white rounded text-xl md:text-base font-sans mt-4 mb-10" >Sign Up</Link>
            </form>
            <p className="mt-4 mx-2">
                Already have an account?{' '}
                <button onClick={onToggleLogin} className="text-blue-500">
                    Login
                </button>
            </p>
        </Popup>
    );
};

export default Signup;
