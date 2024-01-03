import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsLogin } from "@/store/slices/LoginSlice";
import axios from 'axios';
import { useEffect, useState } from 'react';


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
    <div className='max-h-[200vh]  w-[95vw] sm:w-[90vw]  rounded-[10px] bg-[#fff] overflow-hidden relative shadow-md'>
      <div className="p-[2vw] flex flex-col sm:flex-row sm:p-[1vw] items-center justify-between bg-cover bg-top">
        <div className='h-[26vh] w-[95vw] sm:h-[30vh] sm:w-auto top-[0] left-[0] absolute z-0 overflow-hidden'>
          <Image src='/images/back-img.jpeg' width={1400} height={100} alt="" className='h-[300%] w-full sm:h-[30vh] pointer-events-none sm:w-[90vw] object-cover object-top filter brightness-[80%]' />
        </div>
        <div className='justify-center gap-[4vw] sm:gap-1 bg-transparent flex items-center md:space-x-4 z-10 '>
          <div className="m-2">
            {profilePic ? (
              <Image src={profilePic} width={90} height={90} alt="User" className="rounded-md pointer-events-none" />
            ) : (
              <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-16 h-16 text-gray-400 left-2 top-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
            )}
            <Link href="" className='md:hidden text-center py-2 block bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 text-white rounded font-sans mt-2' onClick={handleLogout}>Log Out</Link>
          </div>
          <div className='user flex flex-col space-y-1 mt-2 md:mt-0'>
            <h2 className="sm:text-[35px] text-[6vw] capitalize text-white font-semibold">{firstName} {lastName}</h2>
            <p className="text-white text-[4vw] sm:text-xl">{email}</p>
            <p className="text-white text-[4vw] sm:text-sm flex">Mobile: &nbsp; {phone}</p>
            <p className="text-white text-[4vw] sm:text-sm">Gender: {gender}</p>
            <p className="text-white text-[4vw] capitalize sm:text-sm">Qualification: {qualification}</p>
          </div>
        </div>
        <div className='flex justify-center gap-[2vw] z-0'>
          <Link href="" className='hidden md:block px-4 py-2 bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 text-center text-white rounded text-xl font-sans mt-2' onClick={handleLogout}>Log Out</Link>
        </div>
      </div>
      <div className='max-h-screen w-full flex flex-col items-center justify-center px-[4vw] py-[2vw] mt-[2vw]'>
        <div className='mt-[2vw] text-[4vw] sm:text-[1.5vw]'>
          <h2 className='capitalize'>colleges you applied</h2>
          <div className='[&::-webkit-scrollbar]:hidden h-[30vh] sm:h-[40vh] rounded  w-[85vw] border-[2px] border-[solid] border-[rgb(241,238,238)] [box-shadow:12px_8px_24px_-13px_rgba(0,_0,_0,_0.65)] flex items-center overflow-x-scroll overflow-y-hidden whitespace-nowrap  gap-[2vw] sm:p-[10px] p-[1vw]'>
            <div className='h-[30vh] w-[2000px] sm:h-[40vh] sm:w-[210vw]  flex items-center p-[10px] gap-[2vw] p-[1vw]'>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='mt-[2vw] text-[4vw] sm:text-[1.5vw]'>
          <h2 className='capitalize'>Internship you applied</h2>
          <div className='[&::-webkit-scrollbar]:hidden h-[30vh] sm:h-[40vh] rounded mb-5 w-[85vw] border-[2px] border-[solid] border-[rgb(241,238,238)] [box-shadow:12px_8px_24px_-13px_rgba(0,_0,_0,_0.65)] flex items-center overflow-x-scroll overflow-y-hidden whitespace-nowrap  gap-[2vw] sm:p-[10px] p-[1vw]'>
            <div className='h-[30vh] w-[2000px] sm:h-[40vh] sm:w-[210vw]  flex items-center p-[10px] gap-[2vw] p-[1vw]'>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
                </div>
              </div>
              <div className='h-[28vh] w-[450px] relative sm:relative sm:h-[90%] sm:w-[350px] bg-[lavender] border-[2px] border-[solid] border-[rgb(216,206,206)] flex flex-col items-center justify-center rounded-[20px] overflow-hidden'>
                <div className='h-full w-full bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1400} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='h-[30%] w-full absolute bottom-[10%] sm:absolute sm:bottom-[10%] flex bg-transparent items-center justify-center flex-col'>
                  <h1 className='text-[#fff] text-[3.5vw] sm:text-[1.1vw]'>
Millennium Group of Institutions, Bhopal</h1>
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
