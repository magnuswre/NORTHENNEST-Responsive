import './BookingConfirmationComponent.css'
import '../AboutActivitiesBookInfo.css'
import { useMediaQuery } from 'react-responsive';

const BookingConfirmationComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (

    <div>
      {isMobile ?
       <div className="Home-AboutActivitiesBookInfo-Wrapper">
       <div className='Home-AboutActivitiesBookInfo-Content'>
       <p className='Home-AboutActivitiesBookInfos-Title'>Booking and Reservations</p>
       <div className='Home-AboutActivitiesBookInfo'>
         <p>Booking with us is easy and convenient. Simply select your desired dates and cabin, and we'll take
           care of the rest. We offer flexible
           options to suit your preferences and ensure a seamless reservation process.</p>
       </div>
     </div>
     </div>
    :
    <div className="Home-AboutActivitiesBookInfo-Wrapper-Desktop">
    <div className='Home-AboutActivitiesBookInfo-Content-Desktop'>
    <p className='Home-AboutActivitiesBookInfos-Title-Desktop'>Booking and Reservations</p>
    <div className='Home-AboutActivitiesBookInfo-Desktop'>
      <p>Booking with us is easy and convenient. Simply select your desired dates and cabin, and we'll take
        care of the rest. We offer flexible
        options to suit your preferences and ensure a seamless reservation process.</p>
    </div>
  </div>
  </div>
    }
    </div>
   
  )
}

export default BookingConfirmationComponent
