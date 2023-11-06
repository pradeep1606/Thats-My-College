import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const UserProfile = ({ sessionData }) => {
    return (
        <div className='bg-yellow-100 p-10 rounded-lg space-y-14 shadow-md'>
            <div className="flex flex-col items-center space-x-4">
                <div className="w-16 h-16">
                    <Image src={sessionData?.user?.image || '/logo/art.png'} width={64} height={64} alt="User" className="rounded-full" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">{sessionData?.user?.name}</h2>
                    <p className="text-gray-500">{sessionData?.user?.email}</p>
                </div>
                <Link href="" className='text-blue-800 text-xl font-semibold' onClick={() => signOut()}>Log Out</Link>
            </div>
        </div>
    );
};

export default UserProfile;
