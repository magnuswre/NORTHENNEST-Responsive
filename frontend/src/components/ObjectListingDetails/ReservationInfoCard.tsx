// import { Link } from 'react-router-dom';
import './ReservationCard.css';
import { useNavigate, useParams } from 'react-router-dom';
import personIcon from '../../assets/reservationinfocardsymbol.svg'

const ReservationInfoCard = () => {
  const checkInDate = localStorage.getItem('checkIn');
  const checkOutDate = localStorage.getItem('checkOut');
  const rentalObjectPricePerNight = localStorage.getItem('pricePerNight');
  console.log('Retrieved pricePerNight from localStorage:', rentalObjectPricePerNight);

  // Calculate the total cost based on the number of nights and the price per night
  const checkIn = checkInDate ? new Date(checkInDate) : null;
  const checkOut = checkOutDate ? new Date(checkOutDate) : null;
  const numberOfNights: number = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const pricePerNight: number = rentalObjectPricePerNight ? parseFloat(rentalObjectPricePerNight) : 0;
  const totalCost: number = numberOfNights * pricePerNight;

  const navigate = useNavigate();
  const { id } = useParams();

  const handleReserveClick = () => {
    navigate(`/bookingalternative/${id}`)
    // navigate(`/order/${id}`);
    localStorage.setItem('totalPrice', totalCost.toString());
  };


  return (
    <div className="ReservationInfoCard-Container">
      <div className="ReservationInfoCard-Details">
        <p className='smalltext'>1 bedroom 2x<span><img src={personIcon} alt="" /></span></p>
        <p className='smalltext'>Check in: {checkInDate || 'Not selected'}</p>
        <p className='smalltext'>Check out: {checkOutDate || 'Not selected'}</p> 
      </div>
      
      <div className="ReservationInfoCard-Price-Btn">
        <div>
          <p className="ReservationInfoCard-Price">{totalCost} SEK</p>
        </div>
        {/* <Link to="/login">Already Have an Account? 
        </Link> */}
        <button className="ReservationInfoCard-Btn" onClick={handleReserveClick}>Reserve</button>
      </div>
    </div>
  );
}

export default ReservationInfoCard;

