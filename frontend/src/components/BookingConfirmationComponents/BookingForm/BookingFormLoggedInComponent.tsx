import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './BookingFormLoggedInComponent.css'
import visamastercardImage from '../../../assets/visamastercard.png';
import klarnaImage from '../../../assets/klarna.png';
import paypalImage from '../../../assets/paypal.png';
import americanExpressImage from '../../../assets/americanexpress.png';

// import { checkIfEmpty } from './Validation';
import { createOrder } from '../../../features/order/orderSlice';
// import { setRentalObjectId } from '../../../features/rentalObject/rentalObjectSlice'
import { useMediaQuery } from 'react-responsive';


const initState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  streetAddress: '',
  stateProvince: '',
  city: '',
  paymentMethod: 'visa/mastercard'
};

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  // Add other fields as needed
}

interface BookingFormProps {
  userData: UserData;
}

const BookingFormLoggedInComponent: React.FC<BookingFormProps> = ({ userData }) => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  console.log(userData)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const RentalObjectId = localStorage.getItem('Rentalobject')
  const checkIn = localStorage.getItem('checkIn')
  const checkOut = localStorage.getItem('checkOut')
  // const totalPrice = localStorage.getItem('totalPrice')
  const totalPriceWithProtection = localStorage.getItem('totalPriceWithProtection')

  const [formData, setFormData] = useState(initState);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? (checked ? value : prevData.paymentMethod) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (checkIfEmpty(formData.fullName)) {
    //   setError((data) => ({
    //     ...data,
    //     fullName: 'You need to enter your fullName',
    //   }));
    // }

    // if (checkIfEmpty(formData.email)) {
    //   setError((data) => ({
    //     ...data,
    //     email: 'You need to enter an email',
    //   }));
    // }

    // if (checkIfEmpty(formData.phoneNumber)) {
    //   setError((data) => ({
    //     ...data,
    //     phoneNumber: 'You need to enter a phone number',
    //   }));
    // }

    // if (checkIfEmpty(formData.streetAddress)) {
    //   setError((data) => ({
    //     ...data,
    //     streetAddress: 'You need to enter a street Address',
    //   }));
    // }

    // if (checkIfEmpty(formData.stateProvince)) {
    //   setError((data) => ({
    //     ...data,
    //     stateProvince: 'You need to enter a state/Province',
    //   }));
    // }

    // if (checkIfEmpty(formData.city)) {
    //   setError((data) => ({
    //     ...data,
    //     city: 'You need to enter a city',
    //   }));
    // }

    // Convert totalPriceWithProtection to a number, providing a fallback of 0
    const priceValue = parseFloat(totalPriceWithProtection ?? '0');

    if (!isNaN(priceValue) && RentalObjectId) { // Check if priceValue is a number and id is not undefined
      const orderData = {
        userId: userData._id,
        rentalObject: RentalObjectId,
        bookingDateArrival: checkIn ?? new Date().toISOString(), // Provide a default value if null
        bookingDateDeparture: checkOut ?? new Date().toISOString(), // Provide a default value if null
        price: totalPriceWithProtection,
        email: userData.email,
        phoneNumber: userData.mobile,
        // streetAddress: userData.streetAddress,
        // stateProvince: userData.stateProvince,
        // city: userData.city,
        paymentMethod: formData.paymentMethod,
        status: 'pending',
        guest: 2
      };
      console.log(orderData)

      const resultAction = await dispatch(createOrder(orderData) as any);

      if (createOrder.fulfilled.match(resultAction)) {
        if (resultAction.payload && 'order' in resultAction.payload && '_id' in resultAction.payload.order) {
          const newOrderId = resultAction.payload.order._id; // Extract the _id
          navigate(`/paymentconfirmation/${newOrderId}`); // Navigate using the _id
          localStorage.clear();
        } else {
          console.error('Order ID was not present in the response payload.');
        }
      } else {
        console.error('Order creation failed.', resultAction.error);
      }
    } else {
      console.error('Total price is not a valid number or rental object ID is missing.');
    }
  };

  return (
    <div>
      {isMobile ? 
      <div className='User-Profile-Form-Container'>
      <form className='User-Profile-Form-Wrapper' onSubmit={handleSubmit}>
        <div className='User-Profile-Payment-Methods'>
          <div className='visaMastercard'>
            <img src={visamastercardImage} alt="" />

            <input
              type="radio"
              name="paymentMethod"
              id="visaMastercard"
              value="visa/mastercard"
              checked={formData.paymentMethod === "visa/mastercard"}
              onChange={handleChangeInput}

            />
          </div>
          <div className='Klarna'>
            <img src={klarnaImage} alt="" />
            <input
              type="radio"
              name="paymentMethod"
              id="Klarna"
              value="Klarna"
              checked={formData.paymentMethod === "Klarna"}
              onChange={handleChangeInput}
            />
          </div>
          <div className='PayPal'>
            <img src={paypalImage} alt="" />
            <input
              type="radio"
              name="paymentMethod"
              id="PayPal"
              value="PayPal"
              checked={formData.paymentMethod === "PayPal"}
              onChange={handleChangeInput}
            />
          </div>
          <div className='AmericanExpress'>
            <img src={americanExpressImage} alt="" />
            <input
              type="radio"
              name="paymentMethod"
              id="AmericanExpress"
              value="American Express"
              checked={formData.paymentMethod === "American Express"}
              onChange={handleChangeInput}
            />
          </div>
        </div>

      <div className="User-Profile-Confirm-Booking-Btn-Container">
      <button className="User-Profile-Confirm-Booking-Btn">Confirm Booking</button>
      </div>
      
      </form>

    </div>
      : 
      
      <div className='User-Profile-Form-Container-Desktop'>
      <form className='User-Profile-Form-Wrapper-Desktp' onSubmit={handleSubmit}>
        <div className='User-Profile-Payment-Methods-Desktop'>
          <div className='visaMastercard'>
            <img src={visamastercardImage} alt="" />

            <input
              type="radio"
              name="paymentMethod"
              id="visaMastercard"
              value="visa/mastercard"
              checked={formData.paymentMethod === "visa/mastercard"}
              onChange={handleChangeInput}

            />
          </div>
          <div className='Klarna'>
            <img src={klarnaImage} alt="" />
            <input
              type="radio"
              name="paymentMethod"
              id="Klarna"
              value="Klarna"
              checked={formData.paymentMethod === "Klarna"}
              onChange={handleChangeInput}
            />
          </div>
          <div className='PayPal'>
            <img src={paypalImage} alt="" />
            <input
              type="radio"
              name="paymentMethod"
              id="PayPal"
              value="PayPal"
              checked={formData.paymentMethod === "PayPal"}
              onChange={handleChangeInput}
            />
          </div>
          <div className='AmericanExpress'>
            <img src={americanExpressImage} alt="" />
            <input
              type="radio"
              name="paymentMethod"
              id="AmericanExpress"
              value="American Express"
              checked={formData.paymentMethod === "American Express"}
              onChange={handleChangeInput}
            />
          </div>
        </div>

      <div className="User-Profile-Confirm-Booking-Btn-Container-Desktop">

        <button className="User-Profile-Confirm-Booking-Btn-Desktop">Confirm Booking</button>
      </div>
      </form>

    </div>
      
      
      }
    </div>
    
  )
}

export default BookingFormLoggedInComponent