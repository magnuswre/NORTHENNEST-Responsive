import { Link, useNavigate, useParams } from 'react-router-dom';
import './BookingAlternative.css';

const BookingAlterative = () => {
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
      Booking Alternative:
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
  );
};

export default BookingAlterative;
