import React, {useState} from 'react'
import './LoginRegister.css';

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaLock } from "react-icons/fa";
import restaurant_logo from './Assets/restaurant_logo.png';
import register_image from './Assets/register_image.png';
import { useNavigate } from 'react-router-dom';

export const AdminRegister = () => {

    const [regusername, setRegUsername] = useState('');
    const [regpassword, setRegPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [regphone, setRegphone] = useState('');
    const [regstafftype, setStaffType] = useState('');
    const [regerrors, setRegErrors] = useState({ regusername: '', regpassword: '' });
    const navigate = useNavigate();
    
    const validateForm = () => {
      let formIsValid = true;
      let errors = {};
  
      // Username validation
      const regusernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regusername.match(regusernameRegex)) {
        formIsValid = false;
        errors.regusername = 'Please enter a valid email address!!';
      }
  
      // Password validation (example: minimum 8 characters, at least one letter and one number)
      //const regpasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const regpasswordRegex = /^[A-Za-z\d]{8,}$/;
      if (!regpassword.match(regpasswordRegex)) {
        formIsValid = false;
        errors.regpassword = 'Password must be at least 8 characters long!!';
      }

      // Confirm Password validation
      if (regpassword !== confirmpass) {
        formIsValid = false;
        errors.confirmpass = 'Passwords do not match!!';
      }
  
      // Contact Number validation (example: must be 10 digits)
      const regphoneRegex = /^\d{10}$/;
      if (!regphone.match(regphoneRegex)) {
        formIsValid = false;
        errors.regphone = 'Please enter a valid 10-digit contact number!!';
      }
  
      // Staff Type validation
      if (regstafftype === '') {
        formIsValid = false;
        errors.regstafftype = 'Please select a staff type!!';
      }
  
      setRegErrors(errors);
      return formIsValid;
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Form is valid, proceed with submission (e.g., API call)
        console.log('Form submitted successfully');
        navigate('/');
      }
    };

    return (
      <div>
        <div className='side_header'>
              <img src={restaurant_logo} alt='Dinepulse logo'/>
              <h1 className='restaurant-name'>DINEPULSE</h1>
          </div>
          <div className='register_container'>
              <img src={register_image} alt='registration image' />

              <div className='section_register'>
                  <div className='formbox register'>
                      <form onSubmit={handleSubmit}>
                          <h1>Lets start here...</h1>
                          <br/>
                          <div className='inputitems'>
                              <input type='text' placeholder='Staff Email ID' id='staff_email' value={regusername} 
                          onChange={(e) => setRegUsername(e.target.value)}/>
                              <FaEnvelope className='icons'/>
                              {regerrors.regusername && <span className='error'>{regerrors.regusername}</span>}
                          </div>
                          <div className='inputitems'>     
                              <input type='password' placeholder='New Password' id='staffnew_password' value={regpassword} 
                          onChange={(e) => setRegPassword(e.target.value)}/>
                              <FaLock className='icons'/>
                              {regerrors.regpassword && <span className='error'>{regerrors.regpassword}</span>}
                          </div>
                          <div className='inputitems'>    
                              <input type='password' placeholder='Confirm Password' id='staffconfirm_password' value={confirmpass}
                    onChange={(e) => setConfirmPass(e.target.value)}/>
                              <FaLock className='icons'/>
                              {regerrors.confirmpass && <span className='error'>{regerrors.confirmpass}</span>}
                          </div>
                          <div className='inputitems'>
                              <input type='text' placeholder='Contact Number' id='staff_contact' value={regphone}
                    onChange={(e) => setRegphone(e.target.value)}/>
                              <FaPhoneAlt className='icons'/>
                              {regerrors.regphone && <span className='error'>{regerrors.regphone}</span>}
                          </div>
                          <div className='inputitems'>
                              <select id='staff_type' value={regstafftype} onChange={(e) => setStaffType(e.target.value)}>
                                  <option value=''>Select Staff Type</option>
                                  <option value='admin'>Admin</option>
                                  <option value='kitchen'>Kitchen</option>
                                  <option value='waiter'>Waiter</option>
                                  <option value='cashier'>Cashier</option>
                              </select>
                              {regerrors.regstafftype && <span className='error'>{regerrors.regstafftype}</span>}
                          </div>

                          <div className='remember_forgot'> 
                              <label><input type='checkbox' />I agree to the terms & conditions</label> 
                          </div>
                          <button type='submit'>REGISTER</button>
                          <div className='login_link'>
                              <p>Already have an account?  <a href='#' onClick={() => navigate('/')}>LOGIN</a></p>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}
