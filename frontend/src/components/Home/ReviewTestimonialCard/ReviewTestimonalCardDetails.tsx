import StarRating from '../../../components/StarRating/StarRating'
import './ReviewTestimonialCardDetails.css'
import UserJane from  '../../../assets/UserJane.jpg'

export const ReviewTestimonalCardDetails = () => {
  return (
    <div className='Home-ReviewTestimonialCard-Details-Container'>
        <img className='Home-Rounded-User-Image' src={UserJane} alt="" />
        <div className='Home-ReviewTestimonialCard-content'>
           <p className='Home-Review-Name'>Jane</p>
           <div>
            <StarRating />
           </div>
          <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam sed doloribus minima explicabo eum, quos eligendi ea iste eius?"
          </p>
        </div>
    </div>
  )
}
