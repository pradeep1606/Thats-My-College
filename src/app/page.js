import Carousel from "../components/Carousel"
import CoursesHome from "@/components/CoursesHome"
import HomeStrip from "@/components/HomeStrip"
import FeaturedCollege from "@/components/FeaturedCollege"
import Topcolleges from "@/components/Topcolleges"

const page = () => {
  return (
    <>
      <Carousel />
      <CoursesHome />
      <FeaturedCollege />
      <Topcolleges />
      <HomeStrip />
    </>
  )
}

export default page
