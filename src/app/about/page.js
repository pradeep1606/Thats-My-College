"use client";
import Load from '@/components/Load';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaGithub,FaArrowUp } from 'react-icons/fa';
import { ImArrowUpRight2 } from "react-icons/im";

const About = () => {
  return (
    <>
      <div className=' h-fit w-full bg-[#FAFAFA] font-serif'>
        <div className=' w-full px-5 sm:px-24 py-10 sm:py-7  '>
          <h1 className=' text-3xl text-[#1A65F2]'>That&apos;s my college</h1>
          <p className=' text-xl sm:text-xl mt-5'>Welcome to That&apos;s my college, your one-stop destination for comprehensive information on colleges and universities, designed to simplify your admission process and help you make informed decisions about your academic future.</p>
        </div>
        <div className='w-full h-fit flex flex-col sm:flex-row items-center justify-center gap-5 sm:px-28 sm:py-10'>
          <div className=' bg-[#FFFFFF]  sm:w-2/4 sm:h-[42vh]  w-11/12 flex items-center justify-center flex-col text-center gap-5 [box-shadow:3px_3px_10px_0px_rgba(0,_0,_0,_0.3)] px-10 py-5'>
          <Image src="/images/icons8-mission-64.png" className="h-17 mt-2 w-21 -mr-2" width={70} height={60} priority={true} alt="TMC" />
            <h2 className=' text-2xl text-zinc-800'>Our Mission</h2>
            <p className=' text-xl'>At That&apos;s my college, we empower and protect students by providing accurate, transparent info about colleges, eradicating misinformation in the admission process, ensuring confident education choices.</p>
          </div>
          <div className=' bg-[#FFFFFF]  sm:w-2/4 sm:h-[42vh] w-11/12 flex items-center justify-center flex-col text-center gap-5 [box-shadow:3px_3px_10px_0px_rgba(0,_0,_0,_0.3)] px-10 py-5'>
          <Image src="/images/icons8-people-40.png" className="h-17 mt-2 w-21 -mr-2" width={70} height={60} priority={true} alt="TMC" />
            <h2 className=' text-2xl text-zinc-800'>Our Mission</h2>
            <p className=' text-xl'>At That&apos;s my college, we envision a world where every student makes informed academic choices, overcoming financial barriers with fair admissions and accessible opportunities.</p>
          </div>
         
        </div>

        <div className=' team'>
          <h1 className=' text-2xl sm:xl sm:text-2xl mt-5 sm:mt-0'>Meet Our Team</h1>
          <div className=' user h-[fit-content] w-full flex flex-col sm:grid sm:grid-cols-4 sm:px-[10vw] pb-10 pt-8 sm:flex-row items-center justify-center gap-[5vw]'>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
            <div className='card relative h-[43vh] w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] rounded-[10px] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
              <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/images/yash.jpeg")] bg-cover bg-center '></div>
              <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
              <div className="flex flex-col gap-3 mt-8">
                <a href="https://yash-porfolio.vercel.app/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                <ImArrowUpRight2 />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yash_developer1?utm_source=qr&igsh=MXZ0ejNza2IwOWk1cQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
              </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>yash yadav</h2>
                <h2 className=' text-xl'>web developer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
