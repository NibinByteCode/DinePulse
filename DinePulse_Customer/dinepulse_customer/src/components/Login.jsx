import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import registerImage from "../assets/register_image.png";
import { FaUserAlt, FaLock } from "react-icons/fa";

//set the app element for accessibility
Modal.setAppElement("#root");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Username validation
    if (!username) {
      formIsValid = false;
      errors.username = "Username cannot be empty!!!";
    }
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/;
    if (!password.match(passwordRegex)) {
      formIsValid = false;
      errors.password = "Password must be at least 8 characters long!!";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission (e.g., API call)
      let data = JSON.stringify({
        userName: username,
        userPassword: password,
      });
      const API_URL =
        process.env.REACT_APP_API_URL + "CustomerLogin/LoginCustomer";
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: API_URL,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          //console.log(JSON.stringify(response.data));
          navigate("/menu");
        })
        .catch((error) => {
          alert("Invalid Login Credentials!!!");
          console.log(error);
        });
    }
  };

  const [isModalOpenResetPassword, setIsModalOpenResetPassword] =
    useState(false);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  //state for username validation error
  const [resetPassworderrors, setResetPasswordErrors] = useState({});

  const toggleModalResetPassword = () => {
    alert("modal open");
    if (isModalOpenResetPassword) {
      setUserName("");
      setResetPasswordErrors({}); //clear errors when closing the modal
    } else {
      setResetPasswordErrors({}); //clear errors when opening the modal
    }
    setIsModalOpenResetPassword(!isModalOpenResetPassword);
  };

  const validateResetPasswordForm = () => {
    const resetPassworderrors = {};
    if (!userName.trim()) {
      resetPassworderrors.userName = "UserName is required.";
    }
    return resetPassworderrors;
  };

  //popup insert and update functionality of ResetPassword
  const handleSubmitResetPassword = async (e) => {
    e.preventDefault();

    const resetPassworderrors = validateResetPasswordForm();
    if (Object.keys(resetPassworderrors).length > 0) {
      setResetPasswordErrors(resetPassworderrors);
      return;
    }

    const formData = new FormData();
    formData.append("userName", userName);

    /*try {
      const url = process.env.REACT_APP_API_URL + "Login/GetUserType";
      const method = "post";

      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("success");
        alert(response.data.Response);
        //setUserType(response.data.data);
      } else {
        alert("error.");
      }
    } catch (error) {
      alert("Error getting usertype"+ error.message);
      //alert("An error occurred while processing your request.");
    }*/

    /*const API_URL = `${process.env.REACT_APP_API_URL}Menu/GetMenuByCategoryId?itemId=${userName}`;
    try {
      const response = await axios.get(API_URL);
      setUserType(response.data.data);
    } catch (error) {
      console.error("Caught error while fetching GetMenuByCategoryId:", error);
    }*/
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="right-section">
        <h2>LOGIN HERE...</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/*<i className="icon-email"></i>*/}
            <FaUserAlt className="icons" />
          </div>
          {errors.username && <span className="error">{errors.username}</span>}
          <div className="input-group">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/*<i className="icon-password"></i>*/}
            <FaLock className="icons" />
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
          <div className="remember_forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" onClick={toggleModalResetPassword}>
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn-login">
            LOGIN
          </button>
        </form>
        <Link to="/register" className="register-link">
          NEW USER? REGISTER HERE
        </Link>
      </div>

      <Modal
        isOpen={isModalOpenResetPassword}
        onRequestClose={toggleModalResetPassword}
        contentLabel="Reset Password"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2 className="modal-title">Reset Password</h2>
          <button
            className="modal-close-button"
            onClick={toggleModalResetPassword}
          >
            <IoClose />
          </button>
        </div>
        <div className="add">
          <form className="flex-col" onSubmit={handleSubmitResetPassword}>
            <div className="add-employee-password flex-col">
              <p>Enter Username</p>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                onChange={(e) => setUserName(e.target.value)}
              />
              {resetPassworderrors.userName && (
                <p className="error">{resetPassworderrors.userName}</p>
              )}
            </div>

            <div className="employee-buttons">
              <button type="submit" className="add-btn">
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
