import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FeaturedCollegeSkeleton = () => {
    return (
        <>
            <div className='mt-12 md:px-8 px-6 pb-12 bg-white'>
                <div className='p-4 text-2xl sm:text-3xl text-[#262626] font-bold'>Top College</div>
                <div className=" bg-white grid overflow-hidden md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 md:px-8 px-4">
                    {
                        Array.from({ length: 3 }).map((el, indx) => {
                            return <div key={indx} className='hidden md:block'>
                                <div className='px-3'>
                                    <div className='border rounded-lg -mt-2'>
                                        <Skeleton variant="rounded" width="100%" height={260} />
                                        <div className='px-4 pb-4'>
                                            <Skeleton className='mt-4' variant="text" width="" height={14} />
                                            <Skeleton className='mb-4' variant="text" width="" height={10} />
                                            <Skeleton variant="text" width={200} height={14} />
                                            <Skeleton variant="text" width={200} height={14} />
                                            <Skeleton variant="text" width={150} height={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div className='md:hidden'>
                        <div className=''>
                            <div className='border rounded-lg -mt-2'>
                                <Skeleton variant="rounded" width="100%" height={260} />
                                <div className='px-4 pb-4'>
                                    <Skeleton className='mt-4' variant="text" width="" height={14} />
                                    <Skeleton className='mb-4' variant="text" width="" height={10} />
                                    <Skeleton variant="text" width={200} height={14} />
                                    <Skeleton variant="text" width={200} height={14} />
                                    <Skeleton variant="text" width={150} height={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FeaturedCollegeSkeleton
