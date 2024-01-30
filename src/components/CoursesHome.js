import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CoursesHome = () => {
    return (
        <>
            <div className='py-2 px-4 sm:px-4 md:px-16 lg:px-32 bg-white'>
                <div className='px-4 py-2 text-[1.75rem] sans-serif  text-[#262626] font-bold pointer-events-none'>Choose Your Course</div>
                <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {/* Engineering */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/engineering.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-2 text-[#262626] font-bold font-serif text-lg pointer-events-none'>Engineering <br /> <span className=' font-normal text-sm'>120 colleges</span></div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 hover:text-zinc-900 font-sans'>
                            <Link href={{ pathname: '/colleges', query: { course: 'B.Tech', name: 'Engineering' }, }} >BE/B.Tech</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'M.Tech', name: 'Engineering' }, }} >ME/M.Tech</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'Diploma', name: 'Engineering' }, }} >Diploma (Polytechnic)</Link>
                        </div>
                    </div>

                    {/* Pharmacy */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/pharmacy.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-2 text-[#262626] font-bold font-serif text-lg pointer-events-none'>Pharmacy <br /> <span className=' font-normal text-sm'>120 colleges</span></div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 hover:text-zinc-900 font-sans'>
                            <Link href={{ pathname: '/colleges', query: { course: 'B.Pharma', name:'Pharmacy' }, }}>B.Pharma</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'D.Pharma', name:'Pharmacy' }, }}>D.Pharma</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'M.Pharma', name:'Pharmacy' }, }}>M.Pharma</Link>
                        </div>
                    </div>

                    {/* Management */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/management1.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-1 text-[#262626] font-bold font-serif text-lg pointer-events-none'>Management <br /> <span className=' font-normal text-sm'>120 colleges</span></div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 hover:text-zinc-900 font-sans'>
                            <Link href={{ pathname: '/colleges', query: { course: 'BBA', name:'Management' }, }}>BBA</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'MBA', name:'Management' }, }}>MBA</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'Executive MBA', name:'Management' }, }}>Executive MBA</Link>
                        </div>
                    </div>

                    {/* Arts */}
                    <div className='p-4 grid grid-rows-3 border border-gray-300 rounded shadow-md'>
                        <div className='grid grid-cols-3'>
                            <div className='border border-gray-300 rounded-full p-2'>
                                <Image src='/logo/art.png' width={50} height={50} alt="" />
                            </div>
                            <div className='col-span-2 p-2 text-[#262626] font-bold font-serif text-lg pointer-events-none'>Arts <br /> <span className=' font-normal text-sm'>120 colleges</span></div>
                        </div>
                        <div className='row-span-2 divide-y space-y-3 flex flex-col pt-4 text-gray-600 hover:text-zinc-900 font-sans'>
                            <Link href={{ pathname: '/colleges', query: { course: 'BA', name:'Arts' }, }}>BA</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'MA', name:'Arts' }, }}>MA</Link>
                            <Link href={{ pathname: '/colleges', query: { course: 'BFA', name:'Arts' }, }}>BFA</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoursesHome
