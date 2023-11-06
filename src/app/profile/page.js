'use client'
import { useSession } from 'next-auth/react';
import SignInButton from "@/components/SignInButton";
import UserProfile from "@/components/UserProfile";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { status, data: session } = useSession();
  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, #3498db, #86c5f7)' }} className='flex flex-col justify-center items-center py-10 md:px-14 md:py-14'>
        
          {status === 'authenticated' ? (
            <UserProfile sessionData={session} />
          ) : (
            <SignInButton />
          )}
      </div>
    </>
  )
}

export default page