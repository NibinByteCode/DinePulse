import React, { useState, useEffect } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from 'react-modal';
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import upload_image from './Assets/upload_image.png';

// Set the app element for accessibility
Modal.setAppElement('#root');

export const DashboardTables = () => {
  const [activeTab, setActiveTab] = useState("TABLES");
  const [getTableList, setTableList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [image, setImage] = useState(false);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log('Tables Modal Toggled:', !isModalOpen);
  };

  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
    console.log('Devices Modal Toggled:', !isModalOpen1);
  };

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL+'Table/GetTables'
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
            setTableList(data);
        })
        .catch((error) => {
            console.error('Caught error while fetching data:', error); 
        });
  }, []);

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
          onClick={() => openTab("TABLES")}
        >
          TABLES
        </button>
        <button
          className={`tablinks ${activeTab === "DEVICES" ? "active" : ""}`}
          onClick={() => openTab("DEVICES")}
        >
          DEVICES
        </button>
      </div>
      <div
        id="tables"
        className={`tabcontent ${activeTab === "TABLES" ? "active" : ""}`}
      >
        <button className="addnew_btn" onClick={toggleModal1}>
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
                  <th>Table ID</th>
                  <th>Table No</th>
                  <th>Capacity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getTableList.map((tablelist) => (
                    <tr key={tablelist.table_id}>
                        <td>{tablelist.table_id}</td>
                        <td>{tablelist.table_number}</td>
                        <td>{tablelist.table_capacity}</td>
                        <td>{tablelist.table_status}</td>
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
      <div
        id="devices"
        className={`tabcontent ${activeTab === "DEVICES" ? "active" : ""}`}
      >
        <button className="addnew_btn" onClick={toggleModal}>
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
                  <th>Device ID</th>
                  <th>Device Name</th>
                  <th>Device IMEI</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>aaaaaaa</td>
                  <td>bbbbbb</td>
                  <td>cccccc</td>
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

      <Modal isOpen={isModalOpen1} onRequestClose={toggleModal1} contentLabel="Add New Table"
        className="modal" overlayClassName="modal-overlay">
            <div className="modal-header">
                <h2 className='modal-title'>Add New Table</h2>
                <button className="modal-close-button" onClick={toggleModal1}>
                    <IoClose />
                </button>
            </div>
            <div className='add'>
                <form className='flex-col'>
                    <div className='add-product-name flex-col'>
                        <p>Table Number</p>
                        <input type='number' name='name' placeholder='1'/>
                    </div>
                    <div className='add-product-name flex-col'>
                        <p>Table Capacity</p>
                        <input type='number' name='name' placeholder='1'/>
                    </div>
                    <div className='add-category flex-col'>
                        <p>Table Status</p>
                        <select name='tablestatus'>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className='section-buttons'>
                        <button type='submit' className='add-btn'>ADD</button>
                        <button type='button' className='cancel-btn' onClick={toggleModal1}>CANCEL</button>
                    </div>
                </form>
            </div>
      </Modal>

      <Modal isOpen={isModalOpen} onRequestClose={toggleModal} contentLabel="Add New Device"
        className="modal" overlayClassName="modal-overlay">
            <div className="modal-header">
                <h2 className='modal-title'>Add New Device</h2>
                <button className="modal-close-button" onClick={toggleModal}>
                    <IoClose />
                </button>
            </div>
            <div className='add'>
                <form className='flex-col'>
                    <div className='add-product-name flex-col'>
                        <p>Device Name</p>
                        <input type='text' name='name' placeholder='Type here'/>
                    </div>
                    <div className='add-product-name flex-col'>
                        <p>Device IMEI</p>
                        <input type='text' name='name' placeholder='Type here'/>
                    </div>
                    <div className='add-category flex-col'>
                        <p>Device Status</p>
                        <select name='devicestatus'>
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
