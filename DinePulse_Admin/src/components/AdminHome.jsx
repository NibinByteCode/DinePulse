import React, {useState} from 'react'
import './LoginRegister.css';
import { FaEnvelope, FaLock } from "react-icons/fa";
import restaurant_logo from './Assets/restaurant_logo.png';
import { useNavigate } from 'react-router-dom';

export const AdminHome = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const navigate = useNavigate();
  
    const validateForm = () => {
      let formIsValid = true;
      let errors = {};
  
      // Username validation
      const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!username.match(usernameRegex)) {
        formIsValid = false;
        errors.username = 'Please enter a valid email address!!';
      }
  
      // Password validation (example: minimum 8 characters, at least one letter and one number)
      //const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const passwordRegex = /^[A-Za-z\d]{8,}$/;
      if (!password.match(passwordRegex)) {
        formIsValid = false;
        errors.password = 'Password must be at least 8 characters long!!';
      }
  
      setErrors(errors);
      return formIsValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Form is valid, proceed with submission (e.g., API call)
        console.log('Form submitted successfully');
        navigate('/dashboard');
      }
    };

    return (
      <div>
          {/* Logo and Restaurant Name */}
          <div className='header_content'>
              <img src={restaurant_logo} alt='Dinepulse logo' />
              <h1>DINEPULSE</h1>
          </div>
          <div className='description_content'>
              <h2 className='decription'>Effectively oversee restaurant operations through our 
              comprehensive dashboard. Monitor orders, handle reservations, analyze sales data, 
              and manage inventory—all from one convenient location!</h2>
          </div>
          <div className='section_login'>
              <div className='formbox login'>
                  <form onSubmit={handleSubmit}>
                      <h1>Login here...</h1>
                      <br/>
                      <div className='inputitems'>
                          <input type='text' placeholder='Username' id='user_name' value={username} 
                          onChange={(e) => setUsername(e.target.value)} />
                          <FaEnvelope className='icons'/>
                          {errors.username && <span className='error'>{errors.username}</span>}
                      </div>
                      <div className='inputitems'>    
                          <input type='password' placeholder='Password' id='user_password' value={password} 
                          onChange={(e) => setPassword(e.target.value)}/>
                          <FaLock className='icons'/>
                          {errors.password && <span className='error'>{errors.password}</span>}
                      </div>
                      <div className='remember_forgot'> 
                          <label><input type='checkbox' />Remember me</label> 
                          <a href='#'>Forgot password?</a>
                      </div>
                      <button type='submit'>LOGIN</button>
                      <div className='register_link'>
                          <p>Don't have an account?  <a href='#' onClick={() => navigate('/adminregister')}>REGISTER</a></p>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    )
}
