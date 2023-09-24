import { CollegeProvider } from '@/context/collegeContext'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import { Roboto } from 'next/font/google'
import { FilterContextProvider } from '@/context/filterContext'
import { ReduxProvider } from '@/store/ReduxProvider'

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
    <CollegeProvider>
      <FilterContextProvider>
        <html lang="en" className={roboto.className}>
          <body className={`bg-[#e6e6e6]`}>
            <ReduxProvider>
              <Navbar className="bg-gray-800" />
              {children}
              <Footer />
            </ReduxProvider>
          </body>
        </html>
      </FilterContextProvider>
    </CollegeProvider>
  )
}
