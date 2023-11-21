import { Link, useNavigate, useParams } from 'react-router-dom';
import './BookingAlternative.css';
import { useMediaQuery } from 'react-responsive';

const BookingAlterative = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleReserveClick = () => {
    localStorage.setItem('Rentalobject', `${id}`);
    navigate(`/order/${id}`);
  };

  const handleLoginClick = () => {
    localStorage.setItem('Rentalobject', `${id}`);
    navigate('/login');
  };

  const handleRegisterClick = () => {
    localStorage.setItem('Rentalobject', `${id}`);
    navigate('/register');
  };

  return (
    <div>
      {isMobile ? 
      <div className='Booking-Alternative-Container'>
        <div className='Booking-Alternative-Title'>
      <h2>Booking Alternative:</h2>
      </div>
      <div className='Booking-Alternative-Wrapper'>
      <div>
        <button className="ReservationInfoCard-Btn" onClick={handleReserveClick}>
          Continue as Guest
        </button>
      </div>
      <div>
        <Link to="/login" onClick={handleLoginClick}>
          Already Have an Account?
        </Link>
      </div>
      <div>
        <Link to="/register" onClick={handleRegisterClick}>
          Create Account?
        </Link>
      </div>
      </div>
      
    </div> 
    : 

// DESKTOP ------------

    <div className='Booking-Alternative-Container-Desktop'>
    <div className='Booking-Alternative-Title'> 
      <h2>Booking Alternative:</h2>
      </div>
   
    <div className='Booking-Alternative-Wrapper-Desktop'> 
      <div>
      <button className="ReservationInfoCard-Btn" onClick={handleReserveClick}>
        Continue as Guest
      </button>
    </div>
    <div>
      <Link to="/login" onClick={handleLoginClick}>
        Already Have an Account?
      </Link>
    </div>
    <div>
      <Link to="/register" onClick={handleRegisterClick}>
        Create Account?
      </Link>
    </div></div>
   
  </div> 
    
    
    
    }
    
    </div>
  );
};

export default BookingAlterative;
