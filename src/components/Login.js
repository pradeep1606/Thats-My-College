import React from 'react';
import Popup from './Popup1';
import { HiPhone } from 'react-icons/hi';
import { FcPhoneAndroid } from "react-icons/fc";

const Login = ({ onClose, onToggleSignup }) => {
    return (
        <Popup title="Login with OTP Verification" onClose={onClose}>
            <form className="grid md:grid-cols-2 md:grid-flow-col mt-10">
                <div className='flex'>
                    <FcPhoneAndroid className='w-44 h-36 mx-auto md:ml-10' />
                </div>
                <div className='space-y-6'>
                    <div className="flex h-12 border bg-white items-center rounded">
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
                    <button type="submit" className="bg-blue-500 w-full hover:bg-blue-600 py-3 text-center  text-white rounded text-xl md:text-base font-sans">
                        Get OTP
                    </button>
                    <p className="mt-4 mx-2">
                        Don&apos;t have an account?{' '}
                        <button onClick={onToggleSignup} className="text-blue-500">
                            Create an account
                        </button>
                    </p>
                </div>
            </form>

        </Popup>
    );
};

export default Login;
