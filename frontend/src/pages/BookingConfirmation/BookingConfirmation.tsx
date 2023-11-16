import BookingFormComponent from "../../components/BookingConfirmationComponents/BookingForm/BookingFormComponent"
import BookingInformationCard from "../../components/BookingConfirmationComponents/BookingInformationCard/BookingInformationCard"
import './BookingConfirmation.css'
// import { useNavigate, useParams } from 'react-router-dom';


const BookingConfirmation = () => {
  // const navigate = useNavigate();
  // const { id } = useParams();

  // const handleReserveClick = () => {
  //   navigate(`/paymentconfirmation/${id}`);
  //   // localStorage.setItem('totalPrice', totalCost.toString());
  // };
  return (
    <div>
      <BookingInformationCard />
      <BookingFormComponent />
     
    </div>
  )
}

export default BookingConfirmation