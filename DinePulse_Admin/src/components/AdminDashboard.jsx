import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import orderrecieved_icon from "./Assets/orderrecieved_icon.png";
import orderdelivered_icon from "./Assets/orderdelivered_icon.png";
import orderpending_icon from "./Assets/orderpending_icon.png";
import netrevenue_icon from "./Assets/netrevenue_icon.png";

export const AdminDashboard = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <img
              src={orderrecieved_icon}
              alt="Dinepulse logo"
              className="orders_icon"
            />
            <h3>ORDER RECEIVED</h3>
            <h1>300</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img
              src={orderdelivered_icon}
              alt="Dinepulse logo"
              className="orders_icon"
            />
            <h3>ORDER DELIVERED</h3>
            <h1>12</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img
              src={orderpending_icon}
              alt="Dinepulse logo"
              className="orders_icon"
            />
            <h3>ORDER PENDING</h3>
            <h1>33</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img
              src={netrevenue_icon}
              alt="Dinepulse logo"
              className="orders_icon"
            />
            <h3>NET REVENUE</h3>
            <h1>$420000</h1>
          </div>
        </div>
      </div>
      <div className="display_recentorders">
        <h4 className="tagname">Recent Orders</h4>
        <div className="orders_table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Order Date</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>aaaaaaa</td>
                <td>bbbbbbbb</td>
                <td>ccccccaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com</td>
                <td>dddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddd</td>
                <td>eeeddddddddddddddddeee</td>
                <td>ffffff</td>
                <td>gggggg</td>
                <td>hhhhhh</td>
              </tr>
              <tr>
                <td>aaaaaaa</td>
                <td>bbbbbb</td>
                <td>cccccc@gmail.com</td>
                <td>dddddd</td>
                <td>eeeeee</td>
                <td>ffffff</td>
                <td>gggggg</td>
                <td>hhhhhh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
