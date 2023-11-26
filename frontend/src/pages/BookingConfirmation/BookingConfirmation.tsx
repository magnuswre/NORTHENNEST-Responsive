import BookingFormComponent from "../../components/BookingConfirmationComponents/BookingForm/BookingFormComponent"
import BookingInformationCard from "../../components/BookingConfirmationComponents/BookingInformationCard/BookingInformationCard"
import './BookingConfirmation.css'

const BookingConfirmation = () => {
  return (
    <div>
      <BookingInformationCard />
      <BookingFormComponent />
    </div>
  )
}

export default BookingConfirmation