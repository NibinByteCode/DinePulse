import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const AdminHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <div className="header-left"></div>
      <div className="header-right">
        <BsPersonCircle className="profile_icon" />
        <b>
          <span class="profile_text">STAFF NAME</span>
        </b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaSignOutAlt className="icon_logout" onClick={handleLogout} />
      </div>
    </header>
  );
};