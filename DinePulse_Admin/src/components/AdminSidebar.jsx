import React from 'react'
import restaurant_logo from './Assets/restaurant_logo.png';
import { MdSpaceDashboard,MdTableRestaurant } from "react-icons/md";
import { IoFastFood,IoRestaurant,IoReceipt,IoSettings } from "react-icons/io5";
import { RiReservedFill } from "react-icons/ri";
import { FaShoppingCart,FaChartBar } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { BsPeopleFill } from 'react-icons/bs'

export const AdminSidebar = () => {
  return (
    <aside id="sidebar" className="">
        <div className='sidebar-title'>
            <img src={restaurant_logo} alt="Dinepulse logo" className='sidebar-logo' />
            <h1 className='restaurant-name'>DINEPULSE</h1>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdSpaceDashboard className='dashboardicons'/> &nbsp;&nbsp;Overview
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoRestaurant className='dashboardicons'/> &nbsp;&nbsp;Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdTableRestaurant className='dashboardicons'/> &nbsp;&nbsp;Tables
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <RiReservedFill className='dashboardicons'/> &nbsp;&nbsp;Reservation
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='dashboardicons'/> &nbsp;&nbsp;Employees
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoFastFood className='dashboardicons'/> &nbsp;&nbsp;Take Orders
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaShoppingCart className='dashboardicons'/> &nbsp;&nbsp;Orders
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <GrRestaurant className='dashboardicons'/> &nbsp;&nbsp;Kitchen
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoReceipt className='dashboardicons'/> &nbsp;&nbsp;Receipts
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaChartBar className='dashboardicons'/> &nbsp;&nbsp;Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoSettings className='dashboardicons'/> &nbsp;&nbsp;Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}
