import React from "react";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const DashboardEmployees = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>EMPLOYEE DETAILS</h3>
      </div>
      <br />
      <br />

      <div id="employees" className="employees">
        <button className="addnew_btn">
          <b>
            <span class="addnew_text">ADD NEW EMPLOYEE</span>
          </b>
          &nbsp;&nbsp;&nbsp;
          <MdAddToPhotos className="add_icon" />
        </button>
        <br /> <br /> <br />
        <div className="display_employees">
          <div className="employees_table">
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
    </main>
  );
};
