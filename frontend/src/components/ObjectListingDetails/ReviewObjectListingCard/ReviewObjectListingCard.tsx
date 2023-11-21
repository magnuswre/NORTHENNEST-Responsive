import ReviewObjectListingCardDetails from "./ReviewObjectListingCardDetails"
import './ReviewObjectListingCard.css'
import { useMediaQuery } from 'react-responsive';


const ReviewObjectListingCard = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
     
  return (
    <div>
      {isMobile ? <div className="ReviewObjectListingCard-container">
        <h2>Reviews</h2>
        <div className="ReviewObjectListingCard-content">
        <ReviewObjectListingCardDetails />
        <ReviewObjectListingCardDetails />
        </div>
     </div>: 
     <div className="ReviewObjectListingCard-container-Desktop">
       <h2>Reviews</h2>
        <div className="ReviewObjectListingCard-content-Desktop">
        <ReviewObjectListingCardDetails />
        <ReviewObjectListingCardDetails />
        </div>
      
      </div>}
       

    </div>
   
  )
}

export default ReviewObjectListingCard