import StarRating from "../../../components/StarRating/StarRating"
import UserDoe from  '../../../assets/UserDoe.jpg'
import './ReviewObjectListingCardDetails.css'

const ReviewObjectListingCardDetails = () => {
  return (
    <div className="ReviewOjectListingCard-Details-Container">
        <img className='ReviewOjectListingCard-Details-Rounded-User-Image' src={UserDoe} alt="" />
        <div className='ReviewOjectListingCard-Details-content'>
           {/* <p className='Home-Review-Name'>Jane</p> */}
           <div>
            <StarRating />
           </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam sed doloribus minima explicabo eum, quos eligendi ea iste eius?
          </p>
        </div>
    </div>
  )
}

export default ReviewObjectListingCardDetails