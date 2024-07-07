import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from 'axios';

export const DashboardOrders = () => {

  const [getOrderlist, setOrderlist] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL+'Dashboard/GetRecentOrders' 
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: API_URL,
      headers: {}
  };

  axios.request(config)
      .then((response) => {
          console.log('Orders Data:', response.data); 
          const data = response.data.data;
          setOrderlist(data);
      })
      .catch((error) => {
          console.error('Caught error while fetching recent orders:', error); 
      });

      
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ORDER DETAILS</h3>
      </div>
      <br />
      <br />
      <div className="inputbox">
        <label>Sort by order status : &nbsp;&nbsp;&nbsp;</label>
        <select id="staff_type" required>
          <option value="All">All</option>
          <option value="pending">pending</option>
          <option value="delivered">delivered</option>
        </select>
      </div>
      <br /> <br /> <br />
      <div className="display_orders">
        <div className="orderslist_table">
          <table>
            <thead>
            <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Orders</th>
                <th>Order Date</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
                <th>Order Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getOrderlist.map((orderlist) => (
                  <tr key={orderlist.orderId}>
                      <td>{orderlist.orderId}</td>
                      <td>{orderlist.customerName}</td>
                      <td>{orderlist.orderItems}</td>
                      <td>{orderlist.orderDate}</td>
                      <td>{orderlist.quantities}</td>
                      <td>${orderlist.totalPrice}</td>
                      <td>{orderlist.orderStatus}</td>
                      <td>{orderlist.orderType}</td>
                      <td>
                            <FaEdit className='edit_icon'/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <RiDeleteBin5Fill className='delete_icon'/>
                        </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
