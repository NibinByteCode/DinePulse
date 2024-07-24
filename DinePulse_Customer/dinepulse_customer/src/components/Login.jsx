import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import registerImage from "../assets/register_image.png";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-page">
      <div className="left-section">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="right-section">
        <h2>LOGIN HERE...</h2>
        <br/><br/>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email id" required />
            {/*<i className="icon-email"></i>*/}
            <FaUserAlt className="icons" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="password" required />
            {/*<i className="icon-password"></i>*/}
            <FaLock className="icons" />
          </div>
          <button type="submit" className="btn-login">
            LOGIN
          </button>
        </form>
        <Link to="/register" className="register-link">
          NEW USER? REGISTER HERE
        </Link>
      </div>
    </div>
  );
};

export default Login;