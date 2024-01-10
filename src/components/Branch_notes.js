import React from 'react'

const Branch_notes = () => {
  return (
    <>
     <div className=' h-2/3 w-full border-2 mt-5 px-5 py-5 flex flex-col items-center justify-center gap-1 sm:gap-5 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
          <h1 className=' text-white text-3xl text-center capitalize font-semibold tracking-widest'>Please select your Branch !</h1>
          <div className=' grid grid-cols-2 sm:flex items-center justify-center gap-5 py-7  whitespace-nowrap '>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Computer Science</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest '>Mechanical</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest '> Civil</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Information Technology</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Electronics & Comm.</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Back to year list</button>
          </div>
        </div>
    </>
  )
}

export default Branch_notes
