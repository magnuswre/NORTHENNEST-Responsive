import { useEffect, useState } from 'react';
import userService from '../../features/user/userService';
import BookingFormLoggedInComponent from '../../components/BookingConfirmationComponents/BookingForm/BookingFormLoggedInComponent';
import BookingInformationCard from '../../components/BookingConfirmationComponents/BookingInformationCard/BookingInformationCard';
import './UserProfile.css'

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  _id: string;
}

const UserProfile = () => {

  const [userData, setUserData] = useState<UserData | null>(null);

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
        console.error('Error decoding the token:', (error as Error).message);
      }
    }
    console.log(userData)
  }, []);

  return (
    <div>
      <div className='User-Profile-Container'>
        {userData && (
          <div>
            <div className='User-Profile-Data'>
              <h3 className='User-Profile-Data-Title'><span className='User-Profile-Data-Title-Details'>Welcome!</span> </h3>
              <div className='User-Profile-Data-Container'>
                <div>
                  <h3>Name:</h3>
                  <p>{userData.firstName} {userData.lastName}</p>
                </div>
                <div>
                  <h3>Email:</h3>
                  <p>{userData.email}</p>
                </div>
                <div>
                  <h3>Phone: </h3>
                  <p className='User-Profile-Data-Phone'>{userData.mobile}</p>
                </div>


              </div>
            </div>
            <BookingInformationCard />
            <BookingFormLoggedInComponent userData={userData} />
            {/* Add more fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
