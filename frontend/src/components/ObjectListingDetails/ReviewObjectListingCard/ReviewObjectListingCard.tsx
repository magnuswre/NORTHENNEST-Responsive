import ReviewObjectListingCardDetails from "./ReviewObjectListingCardDetails"
import './ReviewObjectListingCard.css'

const ReviewObjectListingCard = () => {
  return (
    <div className="ReviewObjectListingCard-container">
        <h2>Reviews</h2>
        <div className="ReviewObjectListingCard-content">
        <ReviewObjectListingCardDetails />
        <ReviewObjectListingCardDetails />
        </div>
     </div>
  )
}

export default ReviewObjectListingCard