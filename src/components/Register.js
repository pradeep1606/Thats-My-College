import Image from 'next/image';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { sendApplyForm } from '@/lib/api';

const Register = (college) => {
    const { name, logo } = college;

    const initialForm = {
        collegeName: name,
        name: '',
        email: '',
        mobile: '',
        city: '',
        course: '',
    }
    const [formData, setFormData] = useState(initialForm);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        if (!formData.collegeName || !formData.name || !formData.email || !formData.mobile) {
            setIsLoading(false)
            return toast.error('Please fill all required feilds.')
        }
        if (!isValidEmail(formData.email)) {
            setIsLoading(false);
            return toast.error('Please enter a valid email.');
        }
        try {
            await sendApplyForm(formData);
            toast(<div><p>✅ Apply successfully</p><p>Our Expert will contact soon.</p></div>);
            setFormData(initialForm);
        } catch (error) {
            toast.error('Error! Try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // Simple email validation using regular expression
    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    return (
        <>
            <div className="flex">
                <div className="flex-col flex items-center mt-10 w-full overflow-y-auto">
                    <div className="flex mb-10 gap-4 px-2">
                        <Image src={logo} width={70} height={50} alt="Logo" />
                        <span className="flex flex-col justify-start items-start">
                            <h1 className="font-bold text-2xl text-blue-900">Register Now To Apply</h1>
                            <h3 className="font-bold text-blue-900">{name}</h3>
                        </span>
                    </div>

                    <form className="mt-2 flex flex-col w-11/12" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 mb-6 gap-6">
                            <div className="flex relative h-12 border bg-white items-center rounded">
                                <div className="flex -mr-px justify-center px-4">
                                    <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600">
                                        <FaUser />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="flex-auto w-px border-0 h-10 self-center"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex relative h-12 border bg-white items-center rounded">
                                <div className="flex -mr-px justify-center p-4">
                                    <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600">
                                        <FaEnvelope />
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    className="flex-auto w-px border-0 h-10 self-center"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex relative h-12 border bg-white items-center rounded">
                                <div className="flex -mr-px justify-center p-4">
                                    <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600">
                                        <HiPhone />
                                    </span>
                                    <span className="flex items-center bg-white border-l px-1 py-[0.62rem] rounded rounded-r-none text-gray-600">
                                        +91
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="flex-auto w-px border-0 h-10 self-center"
                                    placeholder="Mobile Number"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex relative h-12 border bg-white items-center rounded">
                                <div className="flex -mr-px justify-center p-4">
                                    <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600">
                                        <MdLocationPin />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="flex-auto w-px border-0 h-10 self-center"
                                    placeholder="Current City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex relative h-12 border bg-white items-center rounded">
                                <div className="flex -mr-px justify-center p-4">
                                    <span className="flex items-center bg-white px-2 rounded rounded-r-none text-xl text-gray-600">
                                        <FaGraduationCap />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="flex-auto w-px border-0 h-10 self-center"
                                    placeholder="Interested Course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-400 hover:bg-blue-500 py-4 text-center text-white rounded text-xl md:text-base font-sans mt-4 mb-10 flex items-center justify-center"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <RotatingLines strokeColor="white" strokeWidth="4" animationDuration="0.75" width="25" visible={true} />
                                    <span className="ml-2">Applying...</span>
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
