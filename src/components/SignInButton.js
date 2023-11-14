import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInButton = () => {
    const router = useRouter();
    const { data: session } = useSession(); 
    const handleLogin = async () => {
        if (!session) {
            await signIn('google');
        }
        router.push('/profile');
    }

    return (
        <>
            <div className='bg-yellow-100 p-10 rounded-lg space-y-14 shadow-md'>
                <div className='text-3xl font-semibold text-blue-800'>LOG IN</div>
                <button
                    onClick={handleLogin}
                    className="flex items-center gap-4 shadow-xl rounded pl-3 bg-white"
                >
                    <FcGoogle className='w-8 h-8' />
                    <span className="bg-blue-500 text-white px-4 py-3 rounded-r">
                        Log In with Google
                    </span>
                </button>
            </div>
        </>
    )
}

export default SignInButton;
