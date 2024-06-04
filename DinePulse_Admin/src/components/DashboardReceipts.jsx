import React from 'react'
import { FaEdit } from "react-icons/fa";
import { IoPrintSharp } from "react-icons/io5";

export const DashboardReceipts = () => {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>RECEIPTS</h3>
        </div>
        <br/><br/>
        <div className="billsradio">
            <input type="radio" id="aaa" name="category" value="aaa" />
            <label htmlFor="aaa">ALL</label>
            <input type="radio" id="bbbb" name="category" value="bbbb" />
            <label htmlFor="bbbb">TAKE AWAY</label>
            <input type="radio" id="ccc" name="category" value="ccc" />
            <label htmlFor="ccc">DINE-IN</label>
            <input type="radio" id="ddd" name="category" value="ddd" />
            <label htmlFor="ddd">DELIVERY</label>
        </div>
        <div id="categories" className="aaaaaa">
            
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
                                    <IoPrintSharp className='delete_icon'/>
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
                                    <IoPrintSharp className='delete_icon'/>
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
                                    <IoPrintSharp className='delete_icon'/>
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
