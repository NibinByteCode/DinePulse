import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const DashboardOrders = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ORDER DETAILS</h3>
      </div>
      <br />
      <br />
      <div className="inputbox">
        <label>Sort by employee type : &nbsp;&nbsp;&nbsp;</label>
        <select id="staff_type" required>
          <option value="">Select Staff Type</option>
          <option value="All">All</option>
          <option value="admin">Admin</option>
          <option value="kitchen">Kitchen</option>
          <option value="waiter">Waiter</option>
          <option value="cashier">Cashier</option>
        </select>
      </div>
      <br /> <br /> <br />
      <div className="display_orders">
        <div className="orderslist_table">
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
    </main>
  );
};
