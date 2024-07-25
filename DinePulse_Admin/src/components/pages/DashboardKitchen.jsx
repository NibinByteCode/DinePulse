import React, { useState } from "react";
import axios from "axios";

export const DashboardKitchen = () => {

  //state for reservation list
  const [getOrderList, setOrderList] = useState([]);

  //fetch Order details from table
  const fetchReservation = async () => {
    const API_URL = process.env.REACT_APP_API_URL + "TableReservation/GetReservations";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: API_URL,
      headers: {},
    };

    try {
      const response = await axios.request(config);
      console.log("Response Data:", response.data);
      const data = JSON.parse(response.data.data);
      setOrderList(data);
    } catch (error) {
      console.error("Caught error while fetching data:", error);
    }
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>PENDING ORDERS TO PROCESS FROM KITCHEN</h3>
      </div>
      <br />
      <br />
      <div className="order-status">

      {getOrderList.length > 0 ? (
        getOrderList.map((orderslist) => (
        <div className="orders-count">
          <h5>Order ID : {orderslist.user_id}</h5>
          <h5>Order Type : {orderslist.user_id}</h5>
          <h5>Order Time : {orderslist.user_id}</h5>
          <hr />
          <div className="bg2">
            <h5>{orderslist.user_id} - {orderslist.user_id} - {orderslist.user_id}</h5>
            {/*<h5>2-bbbb-3</h5>
            <h5>3-cccc-2</h5>
            <h5>4-dddd-1</h5>*/}
            <button>PRINT</button>&nbsp;&nbsp;&nbsp;
            <button>COMPLETE</button>
          </div>
        </div>
        ))
        ) : (
          <div><p>No reservations to retrieve!!!</p></div>
        )}
      </div>
    </main>
  );
};
