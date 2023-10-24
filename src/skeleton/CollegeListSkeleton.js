import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CollegeListSkeleton = () => {
    return (
        Array.from({ length: 10 }).map((el, i) => {
            return <div key={i}>
                <div className='hidden md:block'>
                    <div className="bg-white p-4 flex rounded">
                        <div className='flex gap-2'>
                            <div>
                                <Skeleton circle width={70} height={70} />
                            </div>
                            <div>
                                <Skeleton variant="text" width={300} height={22} />
                                <Skeleton variant="text" width={100} height={14} />
                                <Skeleton variant="text" width={200} height={14} />
                                <Skeleton variant="text" width={300} height={14} />
                                <Skeleton variant="text" width={300} height={14} />
                                <Skeleton variant="text" width={100} height={14} />
                            </div>
                        </div>
                        <div className='flex flex-col ml-auto space-y-2 mt-0 text-center'>
                            <Skeleton variant="rectangular" width={120} height={32} />
                            <Skeleton variant="rectangular" width={120} height={32} />
                        </div>
                    </div>
                </div>


                <div className='md:hidden'>
                    <div className="bg-white p-4 flex rounded items-center gap-12">
                    <Skeleton circle width={30} height={35} />
                <Skeleton className='' variant="text" width={300} height={22} />
                </div>
                <div className='bg-white flex flex-col items-center justify-between'>
                <Skeleton variant="rectangular" width={300} height={0} />
                            <div className='bg-white flex flex-col justify-start'>
                            <Skeleton variant="text" width={100} height={10} />
                            <Skeleton variant="text" width={280} height={10} />
                            <Skeleton variant="text" width={200} height={10} />
                            <Skeleton variant="text" width={180} height={10} />
                            <Skeleton variant="text" width={280} height={10} />
                            </div>
                        <Skeleton variant="rectangular" width={300} height={0} />
                <div className=' bg-white flex p-8 flex-col justify-center m-auto rounded'>
                        <Skeleton variant="rectangular" width={300} height={25} />
                        <Skeleton variant="rectangular" width={300} height={25} />
                        <Skeleton variant="rectangular" width={300} height={0} />

                    </div>

                    </div>
                </div>
            </div>
        })
    )
}

export default CollegeListSkeleton
