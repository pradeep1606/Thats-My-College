import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white pt-16 pb-2">
        <div className="container mx-auto divide-y divide-slate-500">
          <div className="flex flex-wrap pb-4">

            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-8 sm:mb-0">
              <Image src="/logo/tmc_lightblue.png" className="-mb-4 -ml-4" width={120} height={80} alt="Flowbite Logo" />
              <span>
                <h1 className="text-3xl text-blue-500 font-semibold shadow-blue-600">ThatsMyCollege</h1>
                <p className='text-sm'>Empowering Futures, One Admission at a Time: <br /> Your Pathway to Education Begins with TMC!</p>
              </span>

              <div className="flex mt-8">
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaFacebookF />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaTwitter />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-10 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Top Colleges</h4>
              <ul>
                <li><a href="" className="text-gray-400 hover:text-white">Engineering</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Management</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Pharmacy</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Commerce</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Science</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Arts</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Education</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-10 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Top Courses</h4>
              <ul>
                <li><a href="" className="text-gray-400 hover:text-white">B.Tech</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">M.Tech</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">BCA</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">MBA</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">BBA</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">B.Pharma</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">D.Pharma</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Site Links</h4>
              <ul>
                <li><Link href="" className="text-gray-400 hover:text-white">Internship</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contect Us</Link></li>
                <li><Link href="" className="text-gray-400 hover:text-white">Career</Link></li>
              </ul>
            </div>

          </div>
          <div className='container p-2 text-sm'>&#169; 2023 ThatsMyCollege</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
