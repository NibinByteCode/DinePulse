import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from 'axios';

export const DashboardOrders = () => {

  const [getOrderStatus, setOrderStatus] = useState([]);
  const [selectedStatusId, setSelectedOrderId] = useState("");
  const [getOrdersByStatus, setOrdersByStatus] = useState([]);

  const [getCategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchOrderStatus();
    fetchMenuByOrderStatus(0);
  }, []);

  const fetchOrderStatus = async () => {
    const API_URL = `${process.env.REACT_APP_API_URL}Order/GetAllOrderStatus`;
    try {
      const response = await axios.get(API_URL);
      setOrderStatus(response.data.data);
      /*if (response.data.length > 0) {
        setSelectedOrderId(response.data[0].orderId);
        fetchMenuByOrderStatus(response.data[0].orderId);
      }*/
    } catch (error) {
      console.error(
        "Caught error while fetching GetAll Order Status :",
        error
      );
    }
  };

  const fetchMenuByOrderStatus = async (statusId) => {
    const API_URL = `${process.env.REACT_APP_API_URL}Order/GetRecentOrdersByFilter?statusid=${statusId}`;
    try {
      const response = await axios.get(API_URL);
      const parsedData = JSON.parse(response.data.data);
      setOrdersByStatus(parsedData);
    } catch (error) {
      console.error("Caught error while fetching GetMenuByCategoryId:", error);
      setOrdersByStatus([]);
    }
  };

  const handleOrderChange = (e) => {
    const selectedOrderId = e.target.value;
    setSelectedOrderId(selectedOrderId);
    fetchMenuByOrderStatus(selectedOrderId);
  };
      
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ORDER DETAILS</h3>
      </div>
      <br />
      <br />
      <div className="inputbox">
        <label>Sort by order status : &nbsp;&nbsp;&nbsp;</label>
        {/*<select id="staff_type" required>
          <option value="All">All</option>
          <option value="pending">pending</option>
          <option value="delivered">delivered</option>
        </select>*/}


        <select name="orderstatus" id="orderstatus" className="textContent" onChange={handleOrderChange} value={selectedStatusId}>
        <option value="0">All</option>
          {getOrderStatus.map((order) => (
            <option key={order.status_id} value={order.status_id}>
              {order.status_name}
            </option>
          ))}
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
                <th>QuantityOrder Date</th>
                <th>Order Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Order Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {getOrdersByStatus.length > 0 ? (
              getOrdersByStatus.map((orderlist) => (
                  <tr key={orderlist.orderId}>
                      <td>{orderlist.orderId}</td>
                      <td>{orderlist.customerName}</td>
                      <td>{orderlist.orderItems}</td>
                      <td>{orderlist.quantities}</td>
                      <td>{orderlist.orderDate}</td>
                      <td>${orderlist.totalPrice}</td>
                      <td>{orderlist.orderStatus}</td>
                      <td>{orderlist.orderType}</td>
                      <td>
                            <FaEdit className='edit_icon'/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <RiDeleteBin5Fill className='delete_icon'/>
                        </td>
                  </tr>
              ))
              ) : (
                <tr>
                  <td colSpan="9" style={{ fontSize: "17px", color: "#bb521f", backgroundColor: "#ffe5d7", textAlign: "center" }}>No orders to retrieve for this day!!!</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
