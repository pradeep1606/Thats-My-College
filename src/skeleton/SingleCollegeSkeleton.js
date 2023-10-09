import React from 'react'

const SingleCollegeSkeleton = () => {
  return (
    <>
      <div className='hidden md:block'>
                <div className="bg-white p-4 flex rounded">
                    loading...
                </div>
            </div>


            <div className='md:hidden'>
                <div className="bg-white p-4 flex rounded">
                    loading...1
                </div>
            </div>
    </>
  )
}

export default SingleCollegeSkeleton
