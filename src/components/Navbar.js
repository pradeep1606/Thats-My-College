'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import { GiCheckMark } from "react-icons/gi";
import { VscTriangleUp } from "react-icons/vsc";

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
    setShowSignupPopup(false);
  };

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup);
    setShowLoginPopup(false);
  };
  return (
    <>
      <nav className={`${className} md:border-gray-200 shadow-lg bg-gray-900`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-white">
                <Image src="/logo/tmc_white.png" className="h-20 mt-2 w-24 -mr-2" width={70} height={60} alt="TMC" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap mt-2">ThatsMyCollege</span>
              </Link>
            </div>
            {/* md menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-gray-900">
                <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Internship</Link>
                <Link href="/courses" className="text-white md:border-0 md:hover:text-blue-500 px-3 py-2 rounded-md">Courses</Link>
                <Link href="/colleges" className="text-white md:border-0 md:hover:text-blue-500 px-3 py-2 rounded-md">Colleges</Link>
                <Link href="/about" className="text-white md:border-0 md:hover:text-blue-500 px-3 py-2 rounded-md">About</Link>
                <Link href="/contact" className="text-white md:border-0 md:hover:text-blue-500 px-3 py-2 rounded-md">Contact</Link>
                {/* dropdown div */}
                <div className="inline-block relative group z-10">
                  <button className="text-white md:border-0 md:hover:text-blue-500 text-xl rounded-md h-full"><FaRegUserCircle className="-my-1" /></button>
                  <div className="absolute hidden w-56 -right-2 group-hover:block">
                    <div className="h-2 w-full flex justify-end px-2"><VscTriangleUp className="text-2xl -mt-2 text-white" /></div>
                    <div className="bg-white p-2 shadow-md rounded-md">
                      <div className="flex flex-col justify-center p-4 space-y-6">
                        <button onClick={toggleLoginPopup} className="block bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-white rounded text-xl md:text-base font-sans mt-2">
                          Login Your Account
                        </button>
                        <div className="">
                          <span className="font-semibold">By creating an account -</span>
                          <span className="flex"><GiCheckMark className="text-green-700" /><p>Get free counselling</p></span>
                          <span className="flex"><GiCheckMark className="text-green-700" /><p>Directly apply to college</p></span>
                          <span className="flex"><GiCheckMark className="text-green-700" /><p>Free expert Advice</p></span>
                        </div>
                        <button onClick={toggleSignupPopup} className="block border-2 border-blue-500 hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-blue-800 hover:text-white rounded text-xl md:text-base font-sans mt-2">
                          Create an Account
                        </button>
                        {showLoginPopup && (
                          <Login onClose={toggleLoginPopup} onToggleSignup={toggleSignupPopup} />
                        )}
                        {showSignupPopup && (
                          <Signup onClose={toggleSignupPopup} onToggleLogin={toggleLoginPopup} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden={!isOpen}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden={isOpen}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/courses" onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link href="/colleges" onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Colleges</Link>
            <Link href="/about" onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/contact" onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <div className="flex space-x-6">
              <Link href="/" onClick={() => { toggleLoginPopup(); toggleNavbar(); }} className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Login / Register</Link>
              <Link href="/" onClick={toggleNavbar} className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Internship</Link>
            </div>
          </div>
        </div>
      </nav>
      {showLoginPopup && (
        <Login onClose={toggleLoginPopup} onToggleSignup={toggleSignupPopup} />
      )}
      {showSignupPopup && (
        <Signup onClose={toggleSignupPopup} onToggleLogin={toggleLoginPopup} />
      )}
    </>
  );
};

export default Navbar;
