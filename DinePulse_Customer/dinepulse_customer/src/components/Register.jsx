import React, { useState }  from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import registerImage from "../assets/register_image.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Register = () => {

  const [regusername, setRegUsername] = useState("");
  const [regemailId, setRegEmailId] = useState("");
  const [regpassword, setRegPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [regphone, setRegphone] = useState("");
  const [regerrors, setRegErrors] = useState({
    regusername: "",
    regemailId: "",
    regpassword: "",
    confirmpass: "",
    regphone: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Username validation
    if (!regusername) {
      formIsValid = false;
      errors.regusername = "Username cannot be empty!!!";
    }

    if (!regemailId) {
      formIsValid = false;
      errors.regemailId = "Email cannot be empty!!!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regemailId.match(emailRegex)) {
      formIsValid = false;
      errors.regemailId = "Invalid email format!!!";
    }

    const regpasswordRegex = /^[A-Za-z\d]{8,}$/;
    if (!regpassword.match(regpasswordRegex)) {
      formIsValid = false;
      errors.regpassword = "Password must be at least 8 characters long!!";
    }

    if (regpassword !== confirmpass) {
      formIsValid = false;
      errors.confirmpass = "Passwords do not match!!";
    }

    const regphoneRegex = /^\d{10}$/;
    if (!regphone.match(regphoneRegex)) {
      formIsValid = false;
      errors.regphone = "Please enter a valid 10-digit contact number!!";
    }

    setRegErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission (e.g., API call)
      bcrypt.hash(regpassword, 10, (err, encryptPassword) => {
        console.log("encrypted data : " + encryptPassword);
        /*let data = JSON.stringify({
          userName: regusername,
          userPassword: encryptPassword,
        });

        const API_URL = process.env.REACT_APP_API_URL + "Login/AddUser";

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
            console.log(JSON.stringify(response.data));
            alert("Registered successfully!!!");
            navigate("/");
          })
          .catch((error) => {
            alert("Caught error while registering user");
            console.log(error);
          });*/
      });
    }
  };

  return (
    <div className="register-page">
      <div className="left-section">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="right-section">
        <h2>LET'S GET STARTED...</h2>
        <br/><br/>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Customer Name" value={regusername}
                  onChange={(e) => setRegUsername(e.target.value)} />
            {/*<i className="icon-user"></i>*/}
            <FaUserAlt className="icons" />
          </div>
          {regerrors.regusername && (
                <span className="error">{regerrors.regusername}</span>
              )}
          <div className="input-group">
            <input type="email" placeholder="Email id" value={regemailId}
                  onChange={(e) => setRegEmailId(e.target.value)} />
            {/*<i className="icon-email"></i>*/}
            <MdEmail className="icons" />
          </div>
          {regerrors.regemailId && (
                <span className="error">{regerrors.regemailId}</span>
              )}
          <div className="input-group">
            <input type="password" placeholder="New password" value={regpassword}
                  onChange={(e) => setRegPassword(e.target.value)}  />
            {/*<i className="icon-password"></i>*/}
            <FaLock className="icons" />
          </div>
          {regerrors.regpassword && (
                <span className="error">{regerrors.regpassword}</span>
          )}
          <div className="input-group">
            <input type="password" placeholder="Confirm password" value={confirmpass}
                  onChange={(e) => setConfirmPass(e.target.value)}/>
            {/*<i className="icon-password"></i>*/}
            <FaLock className="icons" />
          </div>
          {regerrors.confirmpass && (
                <span className="error">{regerrors.confirmpass}</span>
          )}
          <div className="input-group">
            <input type="tel" placeholder="Contact Number" value={regphone}
                  onChange={(e) => setRegphone(e.target.value)} />
            {/*<i className="icon-phone"></i>*/}
            <FaPhoneVolume className="icons" />
          </div>
          {regerrors.regphone && (
            <span className="error">{regerrors.regphone}</span>
          )}
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