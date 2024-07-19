import React from "react";
import "../styles/Gallary.css";
import { FaFilePdf } from "react-icons/fa6";
import orderSuccessImage from "../assets/orderSuccessImage.png";

const OrderSuccess = () => {
  return (
    <div classNameName="ordersuccess">
      <h1>OrderSuccess</h1>
      <p>OrderSuccess</p>

      <main> 
            <br /><br /><br /><br /><br /><br />
            <div className="confirmMessage">
                <img src={orderSuccessImage} alt="Order Success" className="invoice" />
                <h1>Congratulations!!! <br /> Your Order has been placed successfully !!!</h1>
                <br/><br/>
                <a href="InvoiceDownload.jsx">
                    <FaFilePdf/><br/>
                    <span className="invoice"> Click to view your order invoice</span>                                       
                </a>
            </div>
        </main>
      </div>
  );
};

export default OrderSuccess;