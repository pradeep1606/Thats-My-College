import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CoursesHome = () => {
    return (
        <>
            <div className='py-8 px-4 sm:px-8 md:px-16 lg:px-32 bg-white'>
                <div className='p-4 text-3xl text-[#262626] font-bold'>Choose Your Course</div>
                <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {/* Engineering */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/engineering.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-2 text-[#262626] font-bold font-serif text-lg'>Engineering</div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 font-sans'>
                            <Link href='#'>BE/B.Tech</Link>
                            <Link href='#'>ME/M.Tech</Link>
                            <Link href='#'>Diploma/Polytechnic</Link>
                        </div>
                    </div>

                    {/* Pharmacy */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/pharmacy.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-2 text-[#262626] font-bold font-serif text-lg'>Pharmacy</div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 font-sans'>
                            <Link href='#'>B.Pharma</Link>
                            <Link href='#'>D.Pharma</Link>
                            <Link href='#'>M.Pharma</Link>
                        </div>
                    </div>

                    {/* Management */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/management1.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-2 text-[#262626] font-bold font-serif text-lg'>Management</div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 font-sans'>
                            <Link href='#'>BBA</Link>
                            <Link href='#'>MBA</Link>
                            <Link href='#'>Executive MBA</Link>
                        </div>
                    </div>

                    {/* Arts */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/art.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-2 text-[#262626] font-bold font-serif text-lg'>Arts</div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 font-sans'>
                            <Link href='#'>BA</Link>
                            <Link href='#'>MA</Link>
                            <Link href='#'>BFA</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoursesHome
