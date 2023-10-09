import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { Roboto } from 'next/font/google'
import { ReduxProvider } from '@/store/ReduxProvider'
import { ToastContainer } from '@/app/reactToast'
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Thats My College',
  description: 'Find a college and Get Admission to start your education',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={`bg-[#e6e6e6]`}>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <ReduxProvider>
            <Navbar className="bg-gray-800" />
            {children}
            <Footer />
            <ToastContainer />
          </ReduxProvider>
        </SkeletonTheme>
      </body>
    </html>
  )
}
