import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import './Registration.css'

const initState: RegisterFormdata = {
    firstName: '',
    lastName: '',
    mobile: 0,
    streetName: '',
    postalCode: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: ''
};

interface RegisterFormProps {
  RegisterFormdata: RegisterFormdata
}

const Registration: React.FC<RegisterFormProps> = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initState);
    const dispatch = useDispatch();
   
    const [error, setError] = useState<Record<keyof RegisterFormdata, string>>({
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
  
    const requiredFields = [
      'firstName', 
      'lastName', 
      'mobile', 
      'streetName', 
      'postalCode', 
      'city', 
      'email', 
      'password', 
      'confirmPassword'];
  
    const newErrorState: Record<string, string> = {};
  
    // Check for empty fields
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrorState[field] = `You need to enter ${field === 'confirmPassword' ? 'a confirmed password' : `a ${field}`}`;
      }
    });
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      newErrorState.confirmPassword = 'Password does not match';
    }
  
    setError(newErrorState);
  
    // If there are no errors, proceed with form submission
    if (Object.keys(newErrorState).length === 0) {
      dispatch(createUser(formData) as any);
      navigate('/login');
    }
  };
  

  return (
    <div className="Registration-create-form">
      <p className="Registration-form-text">Please Register Your New Account</p>
      <form  className='Registration-form' onSubmit={handleSubmit}>

      <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" className="input" id="firstName" value={formData.firstName} onChange={handleChangeInput} />
          <p className="error-text">{error.firstName}</p>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" className="input" id="lastName" value={formData.lastName} onChange={handleChangeInput} />
          <p className="error-text">{error.lastName}</p>
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input type="number" name="mobile" className="input" id="mobile" value={formData.mobile} onChange={handleChangeInput} />
          <p className="error-text">{error.mobile}</p>
        </div>

        <div className="form-group">
          <label htmlFor="streetName">Street Name:</label>
          <input type="text" name="streetName" className="input" id="streetName" value={formData.streetName} onChange={handleChangeInput} />
          <p className="error-text">{error.streetName}</p>
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input type="text" name="postalCode" className="input" id="postalCode" value={formData.postalCode} onChange={handleChangeInput} />
          <p className="error-text">{error.postalCode}</p>
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" name="city" className="input" id="city" value={formData.city} onChange={handleChangeInput} />
          <p className="error-text">{error.city}</p>
        </div>



        <div className="form-group">
          <label htmlFor="firstName">Email:</label>
          <input type="text" name="email" className="input" id="email" value={formData.email} onChange={handleChangeInput} />
          <p className="error-text">{error.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className="input" id="password" value={formData.password} onChange={handleChangeInput} />
          <p className="error-text">{error.password}</p>
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="password" name="confirmPassword" className="input" id="confirmpassword" value={formData.confirmPassword} onChange={handleChangeInput} />
          <p className="error-text">{error.confirmPassword}</p>
        </div>
        <button className="Registration-btn">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
