import React, { useState } from "react";
import "../css/AdminDashboardStyles.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import restaurant_logo from "../Assets/restaurant_logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

export const AdminRegister = () => {
  const [regusername, setRegUsername] = useState("");
  const [regpassword, setRegPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [regstafftype, setStaffType] = useState("");
  const [regerrors, setRegErrors] = useState({
    regusername: "",
    regpassword: "",
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

    const regpasswordRegex = /^[A-Za-z\d]{8,}$/;
    if (!regpassword.match(regpasswordRegex)) {
      formIsValid = false;
      errors.regpassword = "Password must be at least 8 characters long!!";
    }

    if (regpassword !== confirmpass) {
      formIsValid = false;
      errors.confirmpass = "Passwords do not match!!";
    }

    if (regstafftype === "") {
      formIsValid = false;
      errors.regstafftype = "Please select a staff type!!";
    }

    setRegErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with API call
        bcrypt.hash(regpassword, 10, (err, encryptPassword) => {
        let data = JSON.stringify({
          userName: regusername,
          userPassword: encryptPassword,
          userType: regstafftype,
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
            //console.log(JSON.stringify(response.data));
            alert("Registered successfully!!!");
            navigate("/");
          })
          .catch((error) => {
            alert("Caught error while registering user!!!");
            console.log("Caught error while sign in: ", error);
          });
      });
    }
  };

  return (
    <div className="admin-background">
      <div className="side_header">
        <div className="section_register">
          <div className="header_content_reg">
            <img src={restaurant_logo} alt="Dinepulse logo" />
            <h1>DINEPULSE</h1>
          </div>
          <div className="formbox register">
            <form onSubmit={handleSubmit}>
              <h1>Let's start here...</h1>
              <br />
              <div className="inputitems">
                <input
                  type="text"
                  placeholder="Staff UserID"
                  id="staff_email"
                  value={regusername}
                  onChange={(e) => setRegUsername(e.target.value)}
                />
                <FaUserAlt className="icons" />
              </div>
              {regerrors.regusername && (
                <span className="error">{regerrors.regusername}</span>
              )}
              <div className="inputitems">
                <input
                  type="password"
                  placeholder="New Password"
                  id="staffnew_password"
                  value={regpassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                />
                <FaLock className="icons" />
              </div>
              {regerrors.regpassword && (
                <span className="error">{regerrors.regpassword}</span>
              )}
              <div className="inputitems">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="staffconfirm_password"
                  value={confirmpass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                <FaLock className="icons" />
              </div>
              {regerrors.confirmpass && (
                <span className="error">{regerrors.confirmpass}</span>
              )}
              <div className="inputitems">
                <select
                  id="staff_type"
                  value={regstafftype}
                  onChange={(e) => setStaffType(e.target.value)}
                >
                  <option value="">Select Staff Type</option>
                  <option value="admin">Admin</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="waiter">Waiter</option>
                  <option value="cashier">Cashier</option>
                </select>
              </div>
              {regerrors.regstafftype && (
                <span className="error">{regerrors.regstafftype}</span>
              )}

              <div className="remember_forgot">
                <label>
                  <input type="checkbox" />I agree to the terms & conditions
                </label>
              </div>
              <button type="submit">REGISTER</button>
              <div className="login_link">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={() => navigate("/")}>
                    LOGIN
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
