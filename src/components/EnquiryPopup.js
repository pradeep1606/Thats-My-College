import React, { useEffect, useState } from 'react';
import { SiGmail } from 'react-icons/si';
import { IoMdCall } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useSession, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { requestCallBack } from '@/lib/api';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'

const EnquiryPopup = ({ collegeData, toggleEnqueryPopup }) => {
    const { name } = collegeData;
    const Api = process.env.API_URL;
    const { isLogin } = useSelector((state) => state.loginStatus);
    const { status, data: session } = useSession();
    const { user = {} } = session || {};
    const { email = {} } = user;
    const [isLoading, setIsLoading] = useState(false)
    console.log(isLoading)

    const getUserDataFromBD = async (email) => {
        try {
            const { data } = await axios.get(`${Api}/api/users/email/${email}`);
            return data;
        } catch (error) {
            console.error('Error get user data:', error);
            return false;
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const fetchedUserData = await getUserDataFromBD(email);
            if (fetchedUserData) {
                const { firstName, lastName, phone } = fetchedUserData.data || {};
                setFormData({
                    collegeName: name,
                    name: `${firstName} ${lastName}`,
                    email: email,
                    mobile: phone || '',
                });
            }
        };
        if (status === 'authenticated') {
            fetchUserData();
        }
    }, [email, name]);

    const initialForm = {
        collegeName: '',
        name: '',
        email: '',
        mobile: '',
    };
    const [formData, setFormData] = useState(initialForm);
    //   console.log(formData)

    const handleCallBack = async () => {
        setIsLoading(true);
        if (status === 'authenticated' && isLogin) {
            try {
                await requestCallBack(formData);
                toast(
                    <div>
                        <p>Callback Request Received.</p>
                        <p>We will contact you within the next 2 hours.</p>
                    </div>
                );
                setIsLoading(false);
                toggleEnqueryPopup();
            } catch (error) {
                // await signOut();
                setIsLoading(false);
                toast(<div>Please Login again</div>);
                console.error(error)
            }
        } else {
            toast(<div>Please Login First</div>);
        }
    };

    return (
        <>
            <div className="flex-col flex items-center mt-10 ">
                <span className="flex flex-col justify-start items-start pb-10 pt-4 ">
                    <h1 className="font-bold text-2xl text-blue-900">-: Admission Enquiry :-</h1>
                </span>
                <div className='mt-4'>
                    <p>Want to Enquiry for admission ?</p>
                    <button onClick={handleCallBack} className='border border-blue-400 text-blue-400 rounded-md px-6 py-2 text-lg hover:bg-blue-500 hover:text-white'>
                        {isLoading ? (
                            <span>
                                Request Call Back
                                <RotatingLines strokeColor="white" strokeWidth="4" animationDuration="0.75" width="25" visible={true} />
                            </span>
                        ) : (
                            <span>Request Call Back</span>
                        )}
                    </button>
                </div>
                <div className='mt-4 space-y-2'>
                    <p>Or contact with :</p>
                    <span className=' flex'><SiGmail className='text-lg' />&nbsp; thatsmycollege@outlook.com</span>
                    <span className=' flex'><IoMdCall className='text-lg' />&nbsp; +91 7389796980</span>
                </div>
            </div>
        </>
    );
};

export default EnquiryPopup;
