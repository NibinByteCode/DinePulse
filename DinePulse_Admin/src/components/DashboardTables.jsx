import React, { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const DashboardTables = () => {
  const [activeTab, setActiveTab] = useState("TABLES");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>TABLES AND DEVICES</h3>
      </div>
      <br />
      <br />
      <div className="tab">
        <button
          className={`tablinks ${activeTab === "TABLES" ? "active" : ""}`}
          onClick={() => openCity("TABLES")}
        >
          TABLES
        </button>
        <button
          className={`tablinks ${activeTab === "DEVICES" ? "active" : ""}`}
          onClick={() => openCity("DEVICES")}
        >
          DEVICES
        </button>
      </div>
      <div
        id="tables"
        className={`tabcontent ${activeTab === "TABLES" ? "active" : ""}`}
      >
        <button className="addnew_btn">
          <b>
            <span class="addnew_text">ADD NEW TABLES</span>
          </b>
          &nbsp;&nbsp;&nbsp;
          <MdAddToPhotos className="add_icon" />
        </button>
        <br /> <br /> <br />
        <div className="display_tables">
          <div className="tablelist_table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Category</th>
                  <th>Email</th>
                  <th>Orders</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>aaaaaaa</td>
                  <td>bbbbbb</td>
                  <td>cccccc</td>
                  <td>dddddd</td>
                  <td>eeeeee</td>
                  <td>
                    <FaEdit className="edit_icon" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiDeleteBin5Fill className="delete_icon" />
                  </td>
                </tr>
                <tr>
                  <td>aaaaaaa</td>
                  <td>bbbbbb</td>
                  <td>cccccc</td>
                  <td>dddddd</td>
                  <td>eeeeee</td>
                  <td>
                    <FaEdit className="edit_icon" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiDeleteBin5Fill className="delete_icon" />
                  </td>
                </tr>
                <tr>
                  <td>aaaaaaa</td>
                  <td>bbbbbb</td>
                  <td>cccccc</td>
                  <td>dddddd</td>
                  <td>eeeeee</td>
                  <td>
                    <FaEdit className="edit_icon" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiDeleteBin5Fill className="delete_icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        id="devices"
        className={`tabcontent ${activeTab === "DEVICES" ? "active" : ""}`}
      >
        <button className="addnew_btn">
          <b>
            <span class="addnew_text">ADD NEW DEVICE</span>
          </b>
          &nbsp;&nbsp;&nbsp;
          <MdAddToPhotos className="add_icon" />
        </button>
        <br /> <br /> <br />
        <div className="display_devices">
          <br />
          <div className="devices_table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Date added</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>aaaaaaa</td>
                  <td>bbbbbb</td>
                  <td>cccccc</td>
                  <td>dddddd</td>
                  <td>eeeeee</td>
                  <td>ffffff</td>
                  <td>gggggg</td>
                  <td>
                    <FaEdit className="edit_icon" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiDeleteBin5Fill className="delete_icon" />
                  </td>
                </tr>
                <tr>
                  <td>aaaaaaa</td>
                  <td>bbbbbb</td>
                  <td>cccccc</td>
                  <td>dddddd</td>
                  <td>eeeeee</td>
                  <td>ffffff</td>
                  <td>gggggg</td>
                  <td>
                    <FaEdit className="edit_icon" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiDeleteBin5Fill className="delete_icon" />
                  </td>
                </tr>
                <tr>
                  <td>aaaaaaa</td>
                  <td>bbbbbb</td>
                  <td>cccccc</td>
                  <td>dddddd</td>
                  <td>eeeeee</td>
                  <td>ffffff</td>
                  <td>gggggg</td>
                  <td>
                    <FaEdit className="edit_icon" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiDeleteBin5Fill className="delete_icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
        </div>
      </div>
    </main>
  );
};
