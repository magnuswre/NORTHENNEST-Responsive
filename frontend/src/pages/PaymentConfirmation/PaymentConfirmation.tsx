import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PaymentConfirmation.css';
import check from '../../assets/check.svg';
import { getRentalObjectById } from '../../features/order/orderSlice';
import { RootState } from 'src/app/store';

const PaymentConfirmation = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const order = useSelector((state: RootState) => state.order.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getRentalObjectById(orderId) as any);
    }
  }, [orderId, dispatch]);

  const totalAmount = order?.price ?? 'Loading...';
  const email = order?.email ?? 'Loading...';
  const bookingReference = order?.bookingReference ?? 'Loading...';

  return (
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
  );
};

export default PaymentConfirmation;
