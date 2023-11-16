import { useEffect, useState } from 'react';
import userService from '../../features/user/userService';
import BookingFormLoggedInComponent from '../../components/BookingConfirmationComponents/BookingForm/BookingFormLoggedInComponent';
import BookingInformationCard from '../../components/BookingConfirmationComponents/BookingInformationCard/BookingInformationCard';

const UserProfile = () => {
 


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('user-token');

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken._id;

        userService.getUserProfile()
          .then(data => {
            setUserData(data);
          })
          .catch(error => {
            console.error(error);
          });
      } catch (error) {
        console.error('Error decoding the token:', error.message);
      }
    }
    console.log(userData)
  }, []);

  return (
    <div>
      <div>
        <p>Welcome!</p>
        {userData && (
          <div>
            <p>User ID: {userData._id}</p>
            <p>Email: {userData.email}</p>
            <p>Email: {userData.mobile}</p>
            <BookingInformationCard />
            <BookingFormLoggedInComponent userData={userData}/>
            {/* Add more fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
