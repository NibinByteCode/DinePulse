import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import registerImage from "../assets/register_image.png";

const Register = () => {
  return (
    <div className="register-page">
      <div className="left-section">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="right-section">
        <h2>LET'S GET STARTED...</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Customer Name" required />
            <i className="icon-user"></i>
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email id" required />
            <i className="icon-email"></i>
          </div>
          <div className="input-group">
            <input type="password" placeholder="New password" required />
            <i className="icon-password"></i>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm password" required />
            <i className="icon-password"></i>
          </div>
          <div className="input-group">
            <input type="tel" placeholder="Contact Number" required />
            <i className="icon-phone"></i>
          </div>
          <button type="submit" className="btn-register">
            REGISTER
          </button>
        </form>
        <Link to="/login" className="login-link">
          ALREADY REGISTERED? LOGIN HERE
        </Link>
      </div>
    </div>
  );
};

export default Register;
