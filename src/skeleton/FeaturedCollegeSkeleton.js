import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FeaturedCollegeSkeleton = () => {
  return (
    <>
    <dive className=" bg-white flex flex-nowrap overflow-hidden  ">
    <div className='hidden md:block '>
                                    <Skeleton variant="text" width={2000} height={50} />
                <div className="bg-white p-4 flex rounded">
                    <div className='flex gap-2'>
                        <div>
                            <Skeleton className='' variant="text" width={450} height={260} />
                            <Skeleton variant="text" width={100} height={14} />
                            <Skeleton variant="text" width={100} height={14} />
                            <Skeleton variant="text" width={200} height={14} />
                            <Skeleton variant="text" width={300} height={14} />
                            <Skeleton variant="text" width={100} height={14} />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='md:hidden'>
            <Skeleton variant="text" width={1000} height={50} />
            <div className="bg-white p-4 flex rounded">
                    <div className='flex gap-2'>
                        <div>
                            <Skeleton variant="text" width={200} height={40} />
                            <Skeleton variant="text" width={200} height={0} />
                            <Skeleton variant="text" width={360} height={200} />
                            <Skeleton variant="text" width={100} height={14} />
                            <Skeleton variant="text" width={100} height={14} />
                            <Skeleton variant="text" width={200} height={14} />
                            <Skeleton variant="text" width={300} height={14} />
                            <Skeleton variant="text" width={100} height={14} />
                            <Skeleton variant="text" width={200} height={0} />
                            <Skeleton variant="text" width={200} height={0} />
                        </div>
                    </div>
                    
                </div>
            </div>
            
          
    </dive>
     
    </>
  )
}

export default FeaturedCollegeSkeleton
