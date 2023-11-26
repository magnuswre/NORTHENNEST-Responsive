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
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div>
      {isMobile ? (
      <>
        <HeroSearch /> 
        <div className='Home-Homepage'>
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
        </>
      ) : (
        <div className='Home-Homepage'>
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
      )}
    </div>
  );
};

export default Home;