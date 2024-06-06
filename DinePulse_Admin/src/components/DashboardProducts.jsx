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
  const [isModalOpenCategory, setIsModalOpenCategory] = useState(false);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);
  const [image, setImage] = useState(false);
  const [getMenuList, setMenuList] = useState([]);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleModalCategory = () => {
    setIsModalOpenCategory(!isModalOpenCategory);
    console.log('Category Modal Toggled:', !isModalOpenCategory);
  };

  const toggleModalMenu = () => {
    setIsModalOpenMenu(!isModalOpenMenu);
    console.log('Menu Modal Toggled:', !isModalOpenMenu);
  };

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL+'MenuCategory/getCategory'
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: API_URL,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log('Response Data:', response.data); 
            const data = response.data.data;     
            setCategoryList(data);
        })
        .catch((error) => {
            console.error('Caught error while fetching data:', error);
        });
  }, []);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL+'Menu/GetMenuAll'
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: API_URL,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log('Response Data:', response.data); 
            const data = response.data.data;      
            setMenuList(data);
        })
        .catch((error) => {
            console.error('Caught error while fetching data:', error); 
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
          onClick={() => openTab("CATEGORIES")}
        >
          CATEGORIES
        </button>
        <button
          className={`tablinks ${activeTab === "MENU" ? "active" : ""}`}
          onClick={() => openTab("MENU")}
        >
          MENU
        </button>
      </div>
      <div
        id="categories"
        className={`tabcontent ${activeTab === "CATEGORIES" ? "active" : ""}`}
      >
        <button className="addnew_btn" onClick={toggleModalCategory}>
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
        <button className="addnew_btn" onClick={toggleModalMenu}>
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
                  <th>Product ID</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getMenuList.map((menulist) => (
                    <tr key={menulist.item_id}>
                        <td>{menulist.item_id}</td>
                        <td>{menulist.item_name}</td>
                        <td>{menulist.item_category}</td>
                        <td>{menulist.item_description}</td>
                        <td>${menulist.item_price}</td>
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
          <br />
        </div>
      </div>
      <Modal isOpen={isModalOpenCategory} onRequestClose={toggleModalCategory} contentLabel="Add New Category"
        className="modal" overlayClassName="modal-overlay">
            <div className="modal-header">
                <h2 className='modal-title'>Add New Category</h2>
                <button className="modal-close-button" onClick={toggleModalCategory}>
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
                        <button type='button' className='cancel-btn' onClick={toggleModalCategory}>CANCEL</button>
                    </div>
                </form>
            </div>
      </Modal>

      <Modal isOpen={isModalOpenMenu} onRequestClose={toggleModalMenu} contentLabel="Add New MenuItem"
        className="modal" overlayClassName="modal-overlay">
            <div className="modal-header">
                <h2 className='modal-title'>Add New MenuItem</h2>
                <button className="modal-close-button" onClick={toggleModalMenu}>
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
                        <button type='button' className='cancel-btn' onClick={toggleModalMenu}>CANCEL</button>
                    </div>
                </form>
            </div>
        </Modal>
    </main>
  );
};
