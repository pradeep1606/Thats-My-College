'use client'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import SignInButton from "@/components/SignInButton";
import UserProfile from "@/components/UserProfile";
import LoginForm from '@/components/LoginForm';
import { setIsLogin } from '@/store/slices/LoginSlice';
import axios from 'axios';
import UserProfileSkeleton from '@/skeleton/UserProfileSkeleton';

const Page = () => {
  const dispatch = useDispatch();
  const Api = process.env.API_URL;
  const { status, data: session } = useSession();
  const [formData, setFormData] = useState({});
  const { isLogin } = useSelector((state) => state.loginStatus);

  const checkEmailExistence = async (email) => {
    try {
      const response = await axios.get(`${Api}/api/users/email/${email}`);
      return response.data.status;
    } catch (error) {
      console.error('Error checking email existence:', error);
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'authenticated') {
        const fullNameArray = session.user.name.split(' ');
        const firstName = fullNameArray[0];
        const lastName = fullNameArray.length > 1 ? fullNameArray.slice(1).join(' ') : ' ';

        const emailExists = await checkEmailExistence(session.user.email);
        setFormData((prevFormData) => ({
          ...prevFormData,
          firstName,
          lastName,
          email: session.user.email,
          profilePic: session.user.image,
          phone: prevFormData.mobile || '',
          qualification: prevFormData.qualification || '',
          gender: prevFormData.gender || 'MALE',
        }));
        if (emailExists) {
          dispatch(setIsLogin(true));
        }
      }
    };
    fetchData();
  }, [status, session, dispatch]);

  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, #86c5f7, #E6E6E6)' }} className='flex flex-col justify-center items-center py-10 md:px-14 md:py-14'>
          {status === 'loading' ? (
          <UserProfileSkeleton /> 
        ) : status === 'unauthenticated' ? (
          <SignInButton />
        ) : isLogin ? (
          <UserProfile sessionData={session} />
        ) : (
          <LoginForm formData={formData} setFormData={setFormData} />
        )}
      </div>
    </>
  );
};

export default Page;
