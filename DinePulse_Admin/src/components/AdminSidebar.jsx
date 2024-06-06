import React from "react";
import restaurant_logo from "./Assets/restaurant_logo.png";
import { MdSpaceDashboard, MdTableRestaurant } from "react-icons/md";
import {
  IoFastFood,
  IoRestaurant,
  IoReceipt,
  IoSettings,
} from "react-icons/io5";
import { RiReservedFill } from "react-icons/ri";
import { FaShoppingCart, FaChartBar } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <img
          src={restaurant_logo}
          alt="Dinepulse logo"
          className="sidebar-logo"
        />
        <h1 className="restaurant-name">DINEPULSE</h1>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <MdSpaceDashboard className="dashboardicons" /> &nbsp;&nbsp;Overview
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/products">
            <IoRestaurant className="dashboardicons" /> &nbsp;&nbsp;Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/tables">
            <MdTableRestaurant className="dashboardicons" /> &nbsp;&nbsp;Tables
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/reservations">
            <RiReservedFill className="dashboardicons" />{" "}
            &nbsp;&nbsp;Reservation
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/employees">
            <BsPeopleFill className="dashboardicons" /> &nbsp;&nbsp;Employees
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/takeorders">
            <IoFastFood className="dashboardicons" /> &nbsp;&nbsp;Take Orders
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/orders">
            <FaShoppingCart className="dashboardicons" /> &nbsp;&nbsp;Orders
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/kitchen">
            <GrRestaurant className="dashboardicons" /> &nbsp;&nbsp;Kitchen
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/receipts">
            <IoReceipt className="dashboardicons" /> &nbsp;&nbsp;Receipts
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/reports">
            <FaChartBar className="dashboardicons" /> &nbsp;&nbsp;Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <IoSettings className="dashboardicons" /> &nbsp;&nbsp;Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};
