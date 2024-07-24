import React from "react";
import "../styles/OrderSuccess.css";
import { FaFilePdf } from "react-icons/fa6";
import orderSuccessImage from "../assets/orderSuccessImage.png";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Receipt from "./InvoiceDownload"; //

const OrderSuccess = () => {

  const receiptRef = useRef(); // Reference for the receipt component
  const staffName = "Aimy Shaju";
  const cartItems = "Aimy Shaju";
  const calculateTotalAmount = "Aimy Shaju";
  // Print handler
  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
  });

  const showReceipt = () => {
    alert("show receipt");
    handlePrint();
  };

  return (
    <div className="ordersuccess">
      <br/><br/>
      <main> 
            <div className="confirmMessage">
                <img src={orderSuccessImage} alt="Order Success" className="invoice" />
                <h1>Congratulations!!! <br /> Your Order has been placed successfully !!!</h1>
                <br/><br/>
                <a href="#" onClick={() => showReceipt()}>
                    <FaFilePdf className="icons"/><br/>
                    <span className="invoice"> Click to view your order invoice</span>                                       
                </a>
            </div>
        </main>

        {/* Hidden Receipt Component */}
        <div style={{ display: "none" }}>
          <Receipt
            ref={receiptRef}
            cartItems={cartItems}
            calculateTotalAmount={calculateTotalAmount}
            staffName={staffName}
          />
        </div>
        
      </div>
  );
};

export default OrderSuccess;