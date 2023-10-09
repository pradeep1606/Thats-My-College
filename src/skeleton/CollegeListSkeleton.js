import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CollegeListSkeleton = () => {
    return (
        <>
            <div className='hidden md:block'>
                <div className="bg-white p-4 flex rounded">
                    <div className='flex gap-2'>
                        <div>
                            <Skeleton circle width={70} height={70} />
                        </div>
                        <div>
                            <Skeleton className='' variant="text" width={300} height={22} />
                            <Skeleton variant="text" width={100} height={14} />
                            <Skeleton variant="text" width={200} height={14} />
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
                <div className="bg-white p-4 flex rounded">
                    loading...
                </div>
            </div>
        </>
    )
}

export default CollegeListSkeleton
