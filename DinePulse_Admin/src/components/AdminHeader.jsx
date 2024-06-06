import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

export const AdminHeader = () => {
  return (
    <header className="header">
      <div className="header-left"></div>
      <div className="header-right">
        <BsPersonCircle className="profile_icon" />
        <b>
          <span class="profile_text">STAFF NAME</span>
        </b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaSignOutAlt className="icon_logout" />
      </div>
    </header>
  );
};
