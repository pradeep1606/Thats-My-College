'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Load = () => {
    // const router = useRouter();

    // const handleLinkClick = (name) => {
    //     // Use `router.push` for navigation
    //     router.push({
    //         pathname: '/test',
    //         query: { name }
    //     });
    // };

    return (
        <>
            <div className='p-6 h-40 space-x-2 space-y-2'>
                <button
                    // onClick={() => router.push('/test', { scroll: false })}
                    className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'
                >
                    BE/B.Tech
                </button>
                <Link
                    href={{pathname: '/test', query: { name: 'testing' },}}
                >
                    About
                </Link>
                {/* <Link
                    onClick={() => handleLinkClick('ME/M.Tech')}
                    className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'
                >
                    ME/M.Tech
                </Link>
                <button
                    onClick={() => handleLinkClick('Polytechnic')}
                    className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'
                >
                    Polytechnic
                </button> */}
            </div>
        </>
    );
};

export default Load;
