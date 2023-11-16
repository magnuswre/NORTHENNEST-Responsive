import './Home.css'
import HeroSearch from "../../components/HeroSearch/HeroSearch"
import Explore from "../../components/Home/Explore/Explore"
import Heading2 from "../../components/Home/Heading2/Heading2"
import PackageCard from "../../components/Home/PackageCard/PackageCard"
import ReviewTestimonialCard from "../../components/Home/ReviewTestimonialCard/ReviewTestimonialCard"
import AboutOurCabins from '../../components/Home/AboutActivitesBookingInfo/AboutOurCabins/AboutOurCabins'
import ActivitiesFeatures from '../../components/Home/AboutActivitesBookingInfo/ActivitiesFeatures/ActivitiesFeatures'
import BookingConfirmationComponent from '../../components/Home/AboutActivitesBookingInfo/BookingConfirmationComponent/BookingConfirmationComponent'
import Heading4 from '../../components/Home/Heading4/Heading4'
import { MobileCarousel } from '../../components/Home/MobileCarousel/MobileCarousel'
// import StarRating from '../../components/StarRating/StarRating'

const Home = () => {
  return (
    <div className='Home-Homepage'>
        <HeroSearch />
        <Heading2 />
        <div className='Home-Package-Cards'>
          <PackageCard />
        </div>
        <div className='Home-About-Activities-Booking'>
          <AboutOurCabins />
          <ActivitiesFeatures />
          <BookingConfirmationComponent />
        </div>
        <Explore />
        <MobileCarousel />
        <Heading4 />
        <ReviewTestimonialCard />

    </div>
  )
}

export default Home