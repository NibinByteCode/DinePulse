import React, { useState, useEffect } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from 'react-modal';
import axios from 'axios';
import { IoClose } from "react-icons/io5";

// Set the app element for accessibility
Modal.setAppElement('#root');

export const DashboardEmployees = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getEmployeeList, setEmployeeList] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log('Tables Modal Toggled:', !isModalOpen);
  };

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL+'Login/GetUsers'
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: API_URL,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log('Response Data:', response.data); 
            const data = JSON.parse(response.data.data);
            setEmployeeList(data);
        })
        .catch((error) => {
            console.error('Caught error while fetching data:', error); 
        });
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>EMPLOYEE DETAILS</h3>
      </div>
      <br />
      <br />

      <div id="employees" className="employees">
        <button className="addnew_btn" onClick={toggleModal}>
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
                  <th>Staff ID</th>
                  <th>Staff Name</th>
                  <th>Staff Type</th>
                  <th>Registered Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getEmployeeList.map((employeelist) => (
                    <tr key={employeelist.user_id}>
                        <td>{employeelist.user_id}</td>
                        <td>{employeelist.user_name}</td>
                        <td>{employeelist.user_type}</td>
                        <td>{employeelist.user_registered_date}</td>
                        <td>{employeelist.user_status}</td>
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
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal} contentLabel="Add New Employee"
        className="modal" overlayClassName="modal-overlay">
            <div className="modal-header">
                <h2 className='modal-title'>Add New Employee</h2>
                <button className="modal-close-button" onClick={toggleModal}>
                    <IoClose />
                </button>
            </div>
            <div className='add'>
                <form className='flex-col'>
                    <div className='add-product-name flex-col'>
                        <p>Employee Name</p>
                        <input type='number' name='name' placeholder='1'/>
                    </div>
                    <div className='add-category flex-col'>
                        <p>Employee Type</p>
                        <select name='tablestatus'>
                            <option value="kitchen">kitchen</option>
                            <option value="admin">admin</option>
                            <option value="cashier">cashier</option>
                            <option value="waiter">waiter</option>
                        </select>
                    </div>
                    <div className='add-category flex-col'>
                        <p>Employee Status</p>
                        <select name='tablestatus'>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className='section-buttons'>
                        <button type='submit' className='add-btn'>ADD</button>
                        <button type='button' className='cancel-btn' onClick={toggleModal}>CANCEL</button>
                    </div>
                </form>
            </div>
      </Modal>
    </main>
  );
};
