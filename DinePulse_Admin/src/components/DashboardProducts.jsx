import React, { useState }  from 'react'
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const DashboardProducts = () => {
  const [activeTab, setActiveTab] = useState('CATEGORIES');

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>CATEGORIES AND MENU</h3>
        </div>
        <br/><br/>
        <div className="tab">
            <button className={`tablinks ${activeTab === 'CATEGORIES' ? 'active' : ''}`}
            onClick={() => openCity('CATEGORIES')}>CATEGORIES
            </button>
            <button className={`tablinks ${activeTab === 'MENU' ? 'active' : ''}`}
            onClick={() => openCity('MENU')}>MENU
            </button>
        </div>
        <div id="categories" className={`tabcontent ${activeTab === 'CATEGORIES' ? 'active' : ''}`}>
            <button className="addnew_btn">
                <b><span class="addnew_text">ADD NEW CATEGORY</span></b>&nbsp;&nbsp;&nbsp;
                <MdAddToPhotos className='add_icon'/>
            </button>
            <br/> <br/> <br/> 
            <div className='display_categories'>
                <br/>         
                <div className='categories_table'>                           
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
                                    <FaEdit className='edit_icon'/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <RiDeleteBin5Fill className='delete_icon'/>
                                </td>                                
                            </tr>
                            <tr>
                                <td>aaaaaaa</td>
                                <td>bbbbbb</td>
                                <td>cccccc</td>
                                <td>dddddd</td>
                                <td>eeeeee</td>
                                <td>
                                    <FaEdit className='edit_icon'/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <RiDeleteBin5Fill className='delete_icon'/>
                                </td>
                            </tr>
                            <tr>
                                <td>aaaaaaa</td>
                                <td>bbbbbb</td>
                                <td>cccccc</td>
                                <td>dddddd</td>
                                <td>eeeeee</td>
                                <td>
                                    <FaEdit className='edit_icon'/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <RiDeleteBin5Fill className='delete_icon'/>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                <br/>
            </div>            
        </div>
        <div id="menuitems" className={`tabcontent ${activeTab === 'MENU' ? 'active' : ''}`}>
            <button className="addnew_btn">
                <b><span class="addnew_text">ADD NEW MENU</span></b>&nbsp;&nbsp;&nbsp;
                <MdAddToPhotos className='add_icon'/>
            </button>
            <br/> <br/> <br/> 
            <div className='display_categories'>
                <br/>         
                <div className='categories_table'>                           
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
                                    <FaEdit className='edit_icon'/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <RiDeleteBin5Fill className='delete_icon'/>
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
                                    <FaEdit className='edit_icon'/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <RiDeleteBin5Fill className='delete_icon'/>
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
                                    <FaEdit className='edit_icon'/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <RiDeleteBin5Fill className='delete_icon'/>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                <br/>
            </div>
        </div>
    </main>
  )
}
