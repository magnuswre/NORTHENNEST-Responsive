import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { checkIfEmpty } from './Validation';
import userService from '../../features/user/userService';

const initState = {
    email: '',
    password: ''
};

const Login = () => {
    const [formData, setFormData] = useState(initState);
    const navigate = useNavigate(); 
    const [error2, setError] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
  

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (checkIfEmpty(formData.email)) {
            setError((data) => ({
              ...data,
              email: 'You need to enter a first name',
            }));
          }
    
          if (checkIfEmpty(formData.password)) {
            setError((data) => ({
              ...data,
              password: 'You need to enter a first name',
            }));
          }
        
          try {
            const response = await userService.loginAsync(formData);
            console.log(formData)

            if (response.token) {
               localStorage.setItem('user-token', response.token);
               console.log("response.token,", response.token)
                navigate('/profile');
            } else {
                console.error('Token not found in the response body');
            }
        } catch (error) {
            throw new Error('Login failed')
    }
}
   

    return (

        <div className='Registration-create-form'>
            <p className='Registration-form-text'>Welcome! Login To Your Account</p>
            <form className='Login-Form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name='email' className='input' id='email' value={formData.email} onChange={handleChange} />
                    <p className="error-text">{error2.email}</p>             
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password*</label><p className='red-text1'></p>
                    <input type="password" name='password' className='input' id='password' value={formData.password} onChange={handleChange} />
                    <p className="error-text">{error2.password}</p> 
                </div>
                <button className='Registration-btn'>Submit</button>
                    <p className='red-text' >
                        <Link className='error-text' to={'/register'}>Don't have an Account yet?</Link>
                    </p>
            </form>
        </div>
    )
}

export default Login