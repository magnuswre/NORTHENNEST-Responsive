import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkIfEmpty } from './Validation';

import { createUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';



const initState = {
    firstName: '',
    lastName: '',
    mobile: '',
    streetName: '',
    postalCode: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: ''
};

// interface formData {

//   firstName: string,
//   lastName: string,
//   mobile: string,
//   streetName: string,
//   postalCode: string,
//   city: string,
//   email: string,
//   password: string,
//   confirmPassword: string
// }

const Registration: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initState);
    const dispatch = useDispatch();
   
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    streetName: '',
    mobile: '',
    postalCode: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: '', 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (checkIfEmpty(formData.firstName)) {
        setError((data) => ({
          ...data,
          firstName: 'You need to enter a first name',
        }));
      }

      if (checkIfEmpty(formData.lastName)) {
        setError((data) => ({
          ...data,
          lastName: 'You need to enter a first name',
        }));
      }

      if (checkIfEmpty(formData.mobile)) {
        setError((data) => ({
          ...data,
          mobile: 'You need to enter a mobile number',
        }));
      }


      if (checkIfEmpty(formData.streetName)) {
        setError((data) => ({
          ...data,
          streetName: 'You need to enter a first name',
        }));
      }

      if (checkIfEmpty(formData.postalCode)) {
        setError((data) => ({
          ...data,
          postalCode: 'You need to enter a first name',
        }));
      }

      if (checkIfEmpty(formData.city)) {
        setError((data) => ({
          ...data,
          city: 'You need to enter a first name',
        }));
      }

    if (checkIfEmpty(formData.email)) {
      setError((data) => ({
        ...data,
        email: 'You need to enter an email address',
      }));
    }

    if (checkIfEmpty(formData.password)) {
      setError((data) => ({
        ...data,
        password: 'You need to enter a password',
      }));
    }

    if (formData.password !== formData.confirmPassword) {
      setError((data) => ({
        ...data,
        confirmPassword: 'Password does not match',
      }));
      return;
    }


    dispatch(createUser(formData) as any)
    navigate('/login')
  };

  return (
    <div className="create-form">
      <p className="form-text">Please Register Your New Account</p>
      <form onSubmit={handleSubmit}>

      <div className="form-group right">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" className="input" id="firstName" value={formData.firstName} onChange={handleChangeInput} />
          <p className="error-text">{error.firstName}</p>
        </div>

        <div className="form-group right">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" className="input" id="lastName" value={formData.lastName} onChange={handleChangeInput} />
          <p className="error-text">{error.lastName}</p>
        </div>

        <div className="form-group right">
          <label htmlFor="mobile">Mobile:</label>
          <input type="number" name="mobile" className="input" id="mobile" value={formData.mobile} onChange={handleChangeInput} />
          <p className="error-text">{error.mobile}</p>
        </div>

        <div className="form-group right">
          <label htmlFor="streetName">Street Name:</label>
          <input type="text" name="streetName" className="input" id="streetName" value={formData.streetName} onChange={handleChangeInput} />
          <p className="error-text">{error.streetName}</p>
        </div>

        <div className="form-group right">
          <label htmlFor="postalCode">Postal Code:</label>
          <input type="text" name="postalCode" className="input" id="postalCode" value={formData.postalCode} onChange={handleChangeInput} />
          <p className="error-text">{error.postalCode}</p>
        </div>

        <div className="form-group right">
          <label htmlFor="city">city:</label>
          <input type="text" name="city" className="input" id="city" value={formData.city} onChange={handleChangeInput} />
          <p className="error-text">{error.city}</p>
        </div>



        <div className="form-group right">
          <label htmlFor="firstName">Email:</label>
          <input type="text" name="email" className="input" id="email" value={formData.email} onChange={handleChangeInput} />
          <p className="error-text">{error.email}</p>
        </div>
        <div className="form-group left">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className="input" id="password" value={formData.password} onChange={handleChangeInput} />
          <p className="error-text">{error.password}</p>
        </div>
        <div className="form-group left">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="password" name="confirmPassword" className="input" id="confirmpassword" value={formData.confirmPassword} onChange={handleChangeInput} />
          <p className="error-text">{error.confirmPassword}</p>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
