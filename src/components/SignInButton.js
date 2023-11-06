import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const SignInButton = () => {
    return (
        <>
            <div className='bg-yellow-100 p-10 rounded-lg space-y-14 shadow-md'>
                <div className='text-3xl font-semibold text-blue-800'>LOG IN</div>
                <Link
                    href="#"
                    onClick={() => signIn("google")}
                    className="flex items-center gap-4 shadow-xl rounded pl-3 bg-white"
                >
                    <FcGoogle className='w-8 h-8' />
                    <span className="bg-blue-500 text-white px-4 py-3 rounded-r">
                        Log In with Google
                    </span>
                </Link>
            </div>
        </>
    )
}

export default SignInButton
