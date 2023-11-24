import './ReservationCard.css';
import { useNavigate, useParams } from 'react-router-dom';
import personIcon from '../../assets/reservationinfocardsymbol.svg'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const ReservationInfoCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const [totalCost, setTotalCost] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);

  useEffect(() => {
    const checkInDate = localStorage.getItem('checkIn');
    const checkOutDate = localStorage.getItem('checkOut');
    const rentalObjectPricePerNight = localStorage.getItem('pricePerNight');

    const checkIn = checkInDate ? new Date(checkInDate) : null;
    const checkOut = checkOutDate ? new Date(checkOutDate) : null;

    if (checkIn && checkOut && rentalObjectPricePerNight) {
      const numberOfNights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
      const pricePerNight = parseFloat(rentalObjectPricePerNight);
      const totalCost = numberOfNights * pricePerNight;
      setTotalCost(totalCost);
    }

    // Set checkInDate and checkOutDate in state
    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);
  }, [id]);
  
  // const checkInDate = localStorage.getItem('checkIn');
  // const checkOutDate = localStorage.getItem('checkOut');
  // const rentalObjectPricePerNight = localStorage.getItem('pricePerNight');
  // console.log('Retrieved pricePerNight from localStorage:', rentalObjectPricePerNight);

  // const checkIn = checkInDate ? new Date(checkInDate) : null;
  // const checkOut = checkOutDate ? new Date(checkOutDate) : null;
  // const numberOfNights: number = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  // const pricePerNight: number = rentalObjectPricePerNight ? parseFloat(rentalObjectPricePerNight) : 0;
  // const totalCost: number = numberOfNights * pricePerNight;


  const handleReserveClick = () => {
    navigate(`/bookingalternative/${id}`)
    localStorage.setItem('totalPrice', totalCost.toString());
  };


  return (
    <div className='ReservationInfoCard-Wrapper-Mobile'>
      
      {isMobile ?
        <div className="ReservationInfoCard-Container">
          <div className="ReservationInfoCard-Details">
            <p className='smalltext'>1 bedroom 2x&nbsp;&nbsp;<span><img src={personIcon} alt="" /></span></p>
            <p className='smalltext'>Check in: {checkInDate || 'Not selected'}</p>
            <p className='smalltext'>Check out: {checkOutDate || 'Not selected'}</p>
          </div>

          <div className="ReservationInfoCard-Price-Btn">
            <div>
              <p className="ReservationInfoCard-Price">{totalCost} SEK</p>
            </div>
            <button className="ReservationInfoCard-Btn" onClick={handleReserveClick}>Reserve</button>
          </div>
        </div>
        :
// DESKTOP-------------//
        <div className="ReservationInfoCard-Container-Desktop">
          <div className="ReservationInfoCard-Wrapper-Desktop">
          <div className="ReservationInfoCard-Details-Desktop">
            <p className='smalltext-Desktop'>1 bedroom </p>
            <p className='smalltext-Desktop'>Check in: {checkInDate || 'Not selected'}</p>
          </div>
          <div className='ReservationInfoCard-Details-Desktop'>
          <p>2x&nbsp;<span><img src={personIcon} alt="" /></span></p>

            <p className='smalltext-Desktop'>Check out: {checkOutDate || 'Not selected'}</p>
          </div>

          <div className="ReservationInfoCard-Price-Desktop">
            <p>TOTAL:</p>
            <p className="ReservationInfoCard-Price-Desktop">{totalCost} SEK</p>
          </div>
          <button className="ReservationInfoCard-Btn-Desktop" onClick={handleReserveClick}>Reserve</button>
        </div>
        </div>
        }

    </div>
  );
}

export default ReservationInfoCard;

