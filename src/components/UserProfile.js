import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const UserProfile = ({ sessionData }) => {
    return (
        <div className=' back  shadow-md'>
            <div className=" main-dets">
            <div className='back-img'>
            <Image src='/images/back-img.jpeg' width={1400} height={100} alt="" className='backimage' />
            </div>
                <div className=' profile bg-transparent flex items-center z-10 justify-center'>
                <div className=" profile-img w-40  h-40">
                    <Image src={sessionData?.user?.image || '/logo/art.png'} width={120} height={120} alt="User" className="rounded-md user-img " />
                </div>
                <div className=' user flex flex-col'>
                    <h2 className="text-[35px] text-white font-semibold">{sessionData?.user?.name}</h2>
                    <p className="text-white text-xl">{sessionData?.user?.email}</p>
                    <p className="text-white text-xl">phone number</p>
                </div>
                </div>
                <div className='log-btn z-10'>
                    <Link href="" className=' btn block bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-white rounded text-xl md:text-base font-sans mt-2'>sitting</Link>
                    <Link href="" className=' btn block bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-white rounded text-xl md:text-base font-sans mt-2' onClick={() => signOut()}>Log Out</Link>
                    </div>
            </div>
            <div className='status'>
                <h3>status</h3>
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
