import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsLogin } from "@/store/slices/LoginSlice";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";


const UserProfile = ({ sessionData }) => {
  const { user = {} } = sessionData;
  const { email = {} } = user;
  const Api = process.env.API_URL;
  const router = useRouter();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});

  const handleLogout = async () => {
    await signOut();
    toast(<div> Log Out successfully</div>);
    dispatch(setIsLogin(false));
    router.push('/profile')
  }

  const getUserDataFromBD = async (email) => {
    try {
      const { data } = await axios.get(`${Api}/api/users/email/${email}`);
      return data;
    } catch (error) {
      console.error('Error get user data :', error);
      return false;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const fetchedUserData = await getUserDataFromBD(email);
      if (fetchedUserData) {
        setUserData(fetchedUserData);
      }
    }
    fetchUserData();
  }, [email])

  const { firstName = "", lastName = "", phone, gender, profilePic, qualification } = userData?.data || {};
  // console.log("userData  &&&&&&", firstName, lastName, phone, userData);


  return (
    <div className='back shadow-md'>
      <div className="main-dets">
        <div className='back-img'>
          <Image src='/images/back-img.jpeg' width={1400} height={100} alt="" className='backimage' />
        </div>
        <div className='profile bg-transparent flex items-center md:space-x-4 z-10 justify-center'>
          <div className="m-2">
            {profilePic ? (
              <div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg class="absolute w-16 h-16 text-gray-400 left-2 top-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </div>
            ) : (
              <Image src={profilePic} width={120} height={120} alt="User" className="rounded-md user-img " />
            )}
            <Link href="" className='md:hidden text-center py-2 block bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 text-white rounded font-sans mt-6' onClick={handleLogout}>Log Out</Link>
          </div>
          <div className='user flex flex-col space-y-1 mt-2 md:mt-0'>
            <h2 className="text-[35px] text-white font-semibold">{firstName} {lastName}</h2>
            <p className="text-white text-xl">{email}</p>
            <p className="text-white text-sm flex">Mobile: &nbsp; {phone}</p>
            <p className="text-white text-sm">Gender: {gender}</p>
            <p className="text-white text-sm">Qualification: {qualification}</p>
          </div>
        </div>
        <div className='log-btn z-0'>
          <Link href="" className='hidden md:block btn bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-white rounded text-xl md:text-base font-sans mt-2' onClick={handleLogout}>Log Out</Link>
        </div>
      </div>
      <div className='basic'>
        <div className='section'>
          <h2>colleges you applied</h2>
          <div className='all-clg'>
            <div className='scroller'>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>college name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>college name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>college name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>college name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>college name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>college name</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='section'>
          <h2>internship you applied</h2>
          <div className='all-clg'>
            <div className='scroller'>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>internship name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>internship name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>internship name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>internship name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>internship name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>internship name</h1>
                </div>
              </div>
              <div className='clg'>
                <div className='clg-img'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='card-img' />
                </div>
                <div className='clg-name'>
                  <h1>internship name</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
