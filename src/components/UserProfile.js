import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setIsLogin } from "@/store/slices/LoginSlice";
import { useDispatch } from "react-redux";

const UserProfile = ({ sessionData }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLogout=async()=>{
        await signOut();
        toast(<div> Log Out successfully</div>);
        dispatch(setIsLogin(false));
        router.push('/profile')
    }
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
                <button className='text-blue-800 text-xl font-semibold' onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
};

export default UserProfile;
