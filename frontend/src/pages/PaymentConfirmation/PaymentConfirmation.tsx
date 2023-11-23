import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PaymentConfirmation.css';
import check from '../../assets/check.svg';
import { getRentalObjectById } from '../../features/order/orderSlice';
import { RootState } from 'src/app/store';
import { useMediaQuery } from 'react-responsive';

const PaymentConfirmation = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const order = useSelector((state: RootState) => state.order.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getRentalObjectById(orderId) as any);
    }
  }, [orderId, dispatch]);

const totalAmount = ((order ?? {}) as { price?: string }).price ?? 'Loading...';
const email = ((order ?? {}) as { email?: string }).email ?? 'Loading...';
const bookingReference = ((order ?? {}) as { bookingReference?: string }).bookingReference ?? 'Loading...';


  return (
    <div>
      {isMobile ?
        <div className='PaymentConfirmation-Container'>
          <div className='PaymentConfirmation-top-field'></div>
          <div className='PaymentConfirmation-Content'>
            <img className='PaymentConfirmation-Checkicon' src={check} alt="Checkmark" />
            <p className='Bold'>THANK YOU FOR YOUR PAYMENT!</p>
            <div className='PaymentConfirmation-Amount-Container'>
              <p>Total amount:</p>
              <p className='Bold'>{totalAmount} SEK</p>
            </div>
            <div className='PaymentConfirmation-Booking-Reference-Container'>
              <p>Your booking reference:</p>
              <p className='Bold'>{bookingReference}</p>
            </div>
            <div className='PaymentConfirmation-Email-Container'>
              <p>A receipt and booking confirmation for this order has been sent to this email:</p>
              <p className='Bold'>{email}</p>
            </div>
          </div>
        </div>


        :

        // DESKTOP  -----///

        <div className='PaymentConfirmation-Container-Desktop'>
          {/* <div className='PaymentConfirmation-top-field-Desktop'> */}
          <div className='PaymentConfirmation-Content-Desktop'>
            <p className='PaymentConfirmation-top-field-Desktop'></p>
            <img className='PaymentConfirmation-Checkicon-Desktop' src={check} alt="Checkmark" />
            <p className='Bold-Desktop'>THANK YOU FOR YOUR PAYMENT!</p>
            <div className='PaymentConfirmation-Amount-Container-Desktop'>
              <p>Total amount:</p>
              <p className='Bold-Desktop'>{totalAmount} SEK</p>
            </div>
            <div className='PaymentConfirmation-Booking-Reference-Container-Desktop'>
              <p>Your booking reference:</p>
              <p className='Bold-Desktop'>{bookingReference}</p>
            </div>
            <div className='PaymentConfirmation-Email-Container-Desktop'>
              <p>A receipt and booking confirmation for this order has been sent to this email:</p>
              <p className='Bold-Desktop'>{email}</p>
            </div>
          </div>
        </div>
        // </div>
      }

    </div>

  );
};

export default PaymentConfirmation;
