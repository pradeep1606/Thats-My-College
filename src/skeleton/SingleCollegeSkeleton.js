import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SingleCollegeSkeleton = () => {
  return (
    <>
      <div className='hidden md:block'>
      <div className="py-8 px-4 md:px-8 lg:px-20 bg-white">
                <div className="text-2xl text-gray-900 font-bold flex items-center space-x-4">
                    <span><Skeleton rectangular width={70} height={70} /></span>
                    <span>
                    <Skeleton className='' variant="text" width={800} height={35} />
                        <div className='md:flex md:space-x-6 font-medium'>
                        <Skeleton variant="text" width={200} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                        </div>
                    </span>
                </div>
                <div className="mt-8 flex space-x-4 text-lg">
                        <Skeleton variant="rectangular" width={120} height={32} />
                        <Skeleton variant="rectangular" width={120} height={32} />
                </div>
            </div>
            <div className='flex flex-nowrap bg-gray-100 md:px-20 shadow-lg  space-x-10 md:py-3 font-[helvetica] text-gray-900 overflow-x-auto scrollbar-hide'>
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={32} />

            </div>
            <div className=' bg-#E6E6E6 p-4 space-y-6'></div>
            <div className=' bg-white p-4 space-y-6'>
            <Skeleton className='' variant="text" width={800} height={42} />
            <div className='bg-white p-2 space-y-6'>
            <Skeleton variant="text" width={1100} height={14} />
            <Skeleton variant="text" width={1100} height={14} />
            <Skeleton variant="text" width={1000} height={14} />
            <Skeleton variant="text" width={900} height={14} />
            <Skeleton variant="text" width={1100} height={14} />
            <div className='bg-white p-2 space-y-6'>
            <Skeleton variant="text" width={400} height={14} />
            <Skeleton variant="text" width={300} height={14} />
            <Skeleton variant="text" width={400} height={14} />
            <Skeleton variant="text" width={200} height={14} />
            <Skeleton variant="text" width={300} height={14} />
            <Skeleton variant="text" width={100} height={14} />
            <Skeleton variant="text" width={300} height={14} />
            <Skeleton variant="text" width={200} height={14} />
            </div>
            <table className="mt-4 w-[90%]">
                            <thead>
                                <tr className=''>
                                    <th className="border text-left px-4 py-2 bg-white"><Skeleton variant="rectangular" width={120} height={32} /></th>
                                    <th className="border text-left px-4 py-2 bg-white"><Skeleton variant="rectangular" width={120} height={32} /></th>
                                    <th className="border text-left px-4 py-2 bg-white"><Skeleton variant="rectangular" width={120} height={32} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr className=''>
                                            <td className="border px-4 py-2"><Skeleton variant="text" width={100} height={14} /></td>
                                            <td className="border px-4 py-2"><Skeleton variant="text" width={100} height={14} /></td>
                                            <td className="border px-4 py-2"><Skeleton variant="text" width={100} height={14} /></td>
                                        </tr>
                            </tbody>
                        </table>
            </div>
            </div>
            </div>


            <div className='md:hidden'>
                <div className="bg-white p-4 flex rounded py-8 px-4 md:px-8 lg:px-20 ">
                <div className="py-8 px-4 md:px-8 lg:px-20 bg-white">
                <div className="text-2xl text-gray-900 font-bold flex items-center space-x-4">
                    <span><Skeleton rectangular width={70} height={70} /></span>
                    <span>
                    <Skeleton className='' variant="text" width={200} height={42} />
                        <div className='md:flex md:space-x-6 font-medium'>
                        <Skeleton variant="text" width={200} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                        </div>
                    </span>
                </div>
                <div className="mt-8 flex space-x-4 text-lg">
                        <Skeleton variant="rectangular" width={120} height={32} />
                        <Skeleton variant="rectangular" width={120} height={32} />
                </div>
            </div>
            </div>
            <div className='flex flex-nowrap bg-white md:px-5 shadow-lg  space-x-4 md:py-1 font-[helvetica] text-gray-900 overflow-x-auto scrollbar-hide'>
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={32} />
                <Skeleton variant="rectangular" width={120} height={0} />
            </div>
            <div className=' bg-#E6E6E6 p-4 space-y-6'></div>
            <div className='bg-white p-2 space-y-6'>
            <Skeleton variant="text" width={320} height={36} />
            <div className='bg-white p-2 space-y-6'>
            <Skeleton variant="text" width={300} height={14} />
            <Skeleton variant="text" width={400} height={14} />
            <Skeleton variant="text" width={200} height={14} />
            <Skeleton variant="text" width={300} height={14} />
            <Skeleton variant="text" width={100} height={14} />
            <Skeleton variant="text" width={300} height={14} />
            <Skeleton variant="text" width={200} height={14} />
            </div>
            </div>
            </div>
    </>
  )
}

export default SingleCollegeSkeleton
