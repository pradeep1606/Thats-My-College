import Carousel from "../components/Carousel"
import CoursesHome from "@/components/CoursesHome"
import HomeStrip from "@/components/HomeStrip"
import FeaturedCollege from "@/components/FeaturedCollege"

const page = () => {
  return (
    <>
      <Carousel />
      <CoursesHome />
      <FeaturedCollege />
      <HomeStrip />
    </>
  )
}

export default page
