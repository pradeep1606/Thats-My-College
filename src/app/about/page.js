"use client";
import Load from '@/components/Load';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaArrowUp, FaVoicemail, FaYoutube } from 'react-icons/fa';
import { ImArrowUpRight2, AiOutlineMail } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=' h-fit w-full bg-[#FAFAFA] font-serif'>
        <div className=' w-full px-5 sm:px-24 py-6 md:py-4'>
          <h1 className=' text-3xl text-[#1A65F2]'>That&apos;s my college</h1>
          <p className=' text-xl sm:text-xl mt-5'>Welcome to That&apos;s my college, your one-stop destination for comprehensive information on colleges and universities, designed to simplify your admission process and help you make informed decisions about your academic future.</p>
        </div>

        <div className='w-full flex flex-col sm:flex-row items-stretch justify-center gap-5 pb-6 px-4 md:px-16 md:pb-10 md:pt-4'>
          <div className='bg-[#FFFFFF] w-full sm:w-1/2 flex items-center justify-center flex-col text-center gap-5 [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] px-10 py-5'>
            <Image src="/images/icons8-mission-64.png" className="h-17 mt-2 w-21 -mr-2" width={70} height={60} priority={true} alt="TMC" />
            <h2 className='text-2xl text-zinc-800'>Our Mission</h2>
            <p className='text-xl pb-1'>Support students in their studies by providing a seamless and accessible platform that streamlines the university search and admissions process. Our mission is to create educational opportunities, close knowledge gaps, and develop a community where students can thrive academically and professionally.</p>
          </div>
          <div className='bg-[#FFFFFF] w-full sm:w-1/2 flex items-center justify-center flex-col text-center gap-5 [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] px-10 py-5'>
            <Image src="/images/icons8-people-40.png" className="h-17 mt-2 w-21 -mr-2" width={70} height={60} priority={true} alt="TMC" />
            <h2 className='text-2xl text-zinc-800'>Our Vision</h2>
            <p className='text-xl pb-1'>To be the leading and most trusted online platform by providing a comprehensive and innovative platform that not only accelerates the access process for students seeking higher education but also promotes technical education. We envision a future where all students can easily find and connect with schools, access quality resources, and step into a successful education and career path.</p>
          </div>
        </div>


        {/* <div className=' team'>
          <h1 className=' text-2xl sm:xl sm:text-3xl mt-5 sm:mt-0'>Meet Our Team</h1>
          <div className=' user h-[fit-content] w-full flex flex-col sm:grid sm:grid-cols-4 sm:px-[10vw] pb-10 pt-8 sm:flex-row items-center justify-center gap-[5vw]'>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/yash_t.jpg")] bg-cover rounded-[10px] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="mailto:Yashrajthakur280@gmail.com" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <MdOutlineMail />
                    </a>
                    <a href="https://www.instagram.com/__yash_thakur028?igsh=MzRlODBiNWFlZA==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Yash Thakur</h2>
                <h2 className=' text-xl'>CEO/Co-founder</h2>
              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/yash.jpeg")] bg-cover rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
                <div className='social  sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="https://yash-porfolio.vercel.app/" className="w-10 group text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <ImArrowUpRight2 />
                      <span className=' text-sm group-hover:block hidden bg-white/90 absolute top-[3.5px] p-[2px] px-[3px] rounded-lg text-black'>Portfolio</span>
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
                <h2 className=' text-xl'>Yash Yadav</h2>
                <h2 className=' text-xl'> CTO/Co-founder</h2>

              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/pradeep.jpg")] bg-cover rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="mailto:pradeepmaurya1606@outlook.com" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <MdOutlineMail />
                    </a>
                    <a href="https://github.com/pradeep1606" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/pradeep_ctrl" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/pradeep-maurya13" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Pradeep Maurya</h2>
                <h2 className=' text-xl'>Web Developer/Co-founder</h2>
              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/ajay.jpg")] bg-cover rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="https://portfolio-ajay-maury.vercel.app/*-" className="w-10 text-lg group h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <ImArrowUpRight2 />
                      <span className=' text-sm group-hover:block hidden bg-white/90 absolute top-[3.5px] p-[2px] px-[3px] rounded-lg text-black'>Portfolio</span>
                    </a>
                    <a href="https://github.com/Ajay-Maury" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/ajay__maury?igsh=MWNtdDVncmF3bDF5Mg==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                    <a href="http://linkedin.com/in/ajay-kumar-maurya/" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Ajay Kumar Maurya</h2>
                <h2 className=' text-xl'>Product Manager/Co-founder</h2>
              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/ujjawalf.jpg")] bg-cover rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="https://www.instagram.com/ujjwal8478?igsh=MzRlODBiNWFlZA==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Ujjawal Tiwari</h2>
                <h2 className=' text-xl'>Co-founder ,COO</h2>
                <h2 className=' text-xl'>Managing Director</h2>
              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/naman.jpg")] bg-cover rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="mailto:namanraghuwanshi789@gmail.com" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <MdOutlineMail />
                    </a>
                    <a href="https://github.com/namanraghuwanshi9220" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/mr._.raghuwanshi?igsh=MTNpeHJwaWZ5b3RseA==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/naman-raghuwanshi-72b64323b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Naman Raghuwanshi</h2>
                <h2 className=' text-xl'>Social Media Manager</h2>
              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/Vaishnavi.jpg")] bg-cover rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="mailto:Vaishnavinew2003@gmail.com" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <MdOutlineMail />
                    </a>
                    <a href="https://m.youtube.com/channel/UCbgNIMX2nyCoa3BrXU33V7A?fbclid=PAAaZ-37FqdRMFGeaOxsvv-OM0njledmFmh1BnftrFMIU9tWJys7b5ejHpyAU" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/vistaaar7?igsh=anl1N3hpZmYzenZ2" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Vaishnavi Gupta</h2>
                <h2 className=' text-xl'>Youtube Representative</h2>
              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/esha.jpg")] bg-cover rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="mailto:eshagandhi8@gmail.com" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <MdOutlineMail />
                    </a>
                    <a href="https://www.instagram.com/eshaaa_3?utm_source=qr&igsh=MWppeHhxMnQ3c2JtcQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/eshaaa_3?utm_source=qr&igsh=MWppeHhxMnQ3c2JtcQ==" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/esha-gandhii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Esha Gandhi</h2>
                <h2 className=' text-xl'>Office Manager</h2>
              </div>
            </div>
            <div className='card relative h-fit w-[75vw] sm:h-[50vh] sm:w-[18vw] bg-[lavender] pb-2 sm:pb-0 rounded-[10px] [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] [transition:all_ease_0.5s]'>
              <div className='relative h-[fit-content] w-[80vw] flex sm:w-[18vw]'>
                <div className=' photo h-[28vh] sm:h-[30vh] w-[50vw] sm:w-[16vw]  relative sm:ml-0 ml-5 top-[3vh] bg-[url("/team/bhavya.jpg")] bg-cover rounded-[10px] bg-center '></div>
                <div className='social sm:opacity-0 opacity-1 h-[35vh] w-[15vw] ml-[5vw] sm:w-[5vw] sm:ml-[0vw] text-[rgba(45,94,176,1)] [transition:all_ease_0.5s]'>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="https://www.instagram.com/bhavya.d15?igsh=MTFoNGhsdm5hNmE2OA%3D%3D&utm_source=qr" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/bhavya-dattey-4b7633252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-10 text-lg  h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className=' name text-[#224074] relative [transition:all_ease_0.5s]'>
                <h2 className=' text-xl'>Bhavya Dattey</h2>
                <h2 className=' text-xl'>Content Writer</h2>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
