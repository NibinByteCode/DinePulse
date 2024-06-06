import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";
import upload_image from './Assets/upload_image.png';

// Set the app element for accessibility
Modal.setAppElement('#root');

export const DashboardProducts = () => {
  const [activeTab, setActiveTab] = useState("CATEGORIES");
  const [getCategoryList, setCategoryList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [image, setImage] = useState(false);

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log('Menu Modal Toggled:', !isModalOpen);
  };

  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
    console.log('Category Modal Toggled:', !isModalOpen1);
  };

  useEffect(() => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://10.192.34.65:5000/api/MenuCategory/getCategory',
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log('Response Data:', response.data); // Log the entire response data for debugging
            const data = response.data.data; // Access the first element of the data array               
            setCategoryList(data);
        })
        .catch((error) => {
            console.error('Caught error while fetching data:', error); // Log the error for debugging
        });
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>CATEGORIES AND MENU</h3>
      </div>
      <br />
      <br />
      <div className="tab">
        <button
          className={`tablinks ${activeTab === "CATEGORIES" ? "active" : ""}`}
          onClick={() => openCity("CATEGORIES")}
        >
          CATEGORIES
        </button>
        <button
          className={`tablinks ${activeTab === "MENU" ? "active" : ""}`}
          onClick={() => openCity("MENU")}
        >
          MENU
        </button>
      </div>
      <div
        id="categories"
        className={`tabcontent ${activeTab === "CATEGORIES" ? "active" : ""}`}
      >
        <button className="addnew_btn" onClick={toggleModal1}>
          <b>
            <span className="addnew_text">ADD NEW CATEGORY</span>
          </b>
          &nbsp;&nbsp;&nbsp;
          <MdAddToPhotos className="add_icon" />
        </button>
        <br /> <br /> <br />
        <div className="display_categories">
          <div className="categories_table">
            <table>
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getCategoryList.map((categorylist) => (
                  <tr key={categorylist.category_id}>
                      <td>{categorylist.category_id}</td>
                      <td>{categorylist.category_name}</td>
                      <td>{categorylist.category_description}</td>
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
        id="menuitems"
        className={`tabcontent ${activeTab === "MENU" ? "active" : ""}`}
      >
        <button className="addnew_btn" onClick={toggleModal}>
          <b>
            <span className="addnew_text">ADD NEW MENU</span>
          </b>
          &nbsp;&nbsp;&nbsp;
          <MdAddToPhotos className="add_icon" />
        </button>
        <br /> <br /> <br />
        <div className="display_categories">
          <br />
          <div className="categories_table">
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
      <Modal isOpen={isModalOpen1} onRequestClose={toggleModal1} contentLabel="Add New Category"
        className="modal" overlayClassName="modal-overlay">
            <div className="modal-header">
                <h2 className='modal-title'>Add New Category</h2>
                <button className="modal-close-button" onClick={toggleModal1}>
                    <IoClose />
                </button>
            </div>
            <div className='add'>
                <form className='flex-col'>
                    <div className='add-img-upload flex-col'>
                        <p>Upload Image</p>
                        <label htmlFor='image'>
                            <img src={image ? URL.createObjectURL(image) : upload_image} alt='' />
                        </label>
                        <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
                    </div>
                    <div className='add-product-name flex-col'>
                        <p>Category Name</p>
                        <input type='text' name='name' placeholder='Type here'/>
                    </div>
                    <div className='add-product-description flex-col'>
                        <p>Category Description</p>
                        <textarea name='description' placeholder='Write content here' required/>
                    </div>
                    <div className='section-buttons'>
                        <button type='submit' className='add-btn'>ADD</button>
                        <button type='button' className='cancel-btn' onClick={toggleModal1}>CANCEL</button>
                    </div>
                </form>
            </div>
      </Modal>

      <Modal isOpen={isModalOpen} onRequestClose={toggleModal} contentLabel="Add New MenuItem"
        className="modal" overlayClassName="modal-overlay">
            <div className="modal-header">
                <h2 className='modal-title'>Add New MenuItem</h2>
                <button className="modal-close-button" onClick={toggleModal}>
                    <IoClose />
                </button>
            </div>
            <div className='add'>
                <form className='flex-col'>
                    <div className='add-img-upload flex-col'>
                        <p>Upload Image</p>
                        <label htmlFor='image'>
                            <img src={image ? URL.createObjectURL(image) : upload_image} alt='' />
                        </label>
                        <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
                    </div>
                    <div className='add-product-name flex-col'>
                        <p>Product Name</p>
                        <input type='text' name='name' placeholder='Type here'/>
                    </div>
                    <div className='add-product-description flex-col'>
                        <p>Product Description</p>
                        <textarea name='description' placeholder='Write content here' required/>
                    </div>
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select name='category'>
                            <option value="#">Select Category</option>
                            <option value="aaaa">aaaa</option>
                            <option value="bbbb">bbbb</option>
                            <option value="cccc">cccc</option>
                            <option value="dddd">dddd</option>
                            <option value="eeee">eeee</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input type='number' name='price' placeholder='$20'/>
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
