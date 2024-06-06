import React, { useState } from 'react';

export const DashboardReports = () => {
    const [activeTab, setActiveTab] = useState('SALES REPORT');

    const openCity = (cityName) => {
      setActiveTab(cityName);
    };
  
    return (
      <main className='main-container'>
          <div className='main-title'>
              <h3>REPORTS</h3>
          </div>
          <br/><br/>
          <div className="reports-tab">
              <button className={`tablinks ${activeTab === 'SALES REPORT' ? 'active' : ''}`}
              onClick={() => openCity('SALES REPORT')}>SALES REPORT
              </button>
              <button className={`tablinks ${activeTab === 'STAFF LIST' ? 'active' : ''}`}
              onClick={() => openCity('STAFF LIST')}>STAFF LIST
              </button>
              <button className={`tablinks ${activeTab === 'MENU LIST' ? 'active' : ''}`}
              onClick={() => openCity('MENU LIST')}>MENU LIST
              </button>
              <button className={`tablinks ${activeTab === 'TABLES LIST' ? 'active' : ''}`}
              onClick={() => openCity('TABLES LIST')}>TABLES LIST
              </button>
              <button className={`tablinks ${activeTab === 'DEVICES LIST' ? 'active' : ''}`}
              onClick={() => openCity('DEVICES LIST')}>DEVICES LIST
              </button>
          </div>
          <div id="salesreport" className={`reportcontent ${activeTab === 'SALES REPORT' ? 'active' : ''}`}>
              <br/> <br/> <br/> 
              <div className='display_salesreport'>
                  <br/>         
                  <div className='salesreport_table'>                           
                      <table>
                          <thead>
                              <tr>
                                  <th>Order ID</th>
                                  <th>Category</th>
                                  <th>Email</th>
                                  <th>Orders</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>                                
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                              </tr> 
                          </tbody>
                      </table>
                  </div>
                  <br/>
              </div>            
          </div>
          <div id="stafflist" className={`reportcontent ${activeTab === 'STAFF LIST' ? 'active' : ''}`}>
              <br/> <br/> <br/> 
              <div className='display_stafflist'>
                  <br/>         
                  <div className='stafflist_table'>                           
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
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                                  <td>ffffff</td>
                                  <td>gggggg</td>
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                                  <td>ffffff</td>
                                  <td>gggggg</td>
                              </tr> 
                          </tbody>
                      </table>
                  </div>
                  <br/>
              </div>
          </div>
          {/*menu list and table list */}
          <div id="menureport" className={`reportcontent ${activeTab === 'MENU LIST' ? 'active' : ''}`}>
              <br/> <br/> <br/> 
              <div className='display_menulist'>
                  <br/>         
                  <div className='menulist_table'>                           
                      <table>
                          <thead>
                              <tr>
                                  <th>Order ID</th>
                                  <th>Category</th>
                                  <th>Email</th>
                                  <th>Orders</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>                                
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                              </tr> 
                          </tbody>
                      </table>
                  </div>
                  <br/>
              </div>            
          </div>
          <div id="tableslist" className={`reportcontent ${activeTab === 'TABLES LIST' ? 'active' : ''}`}>
              <br/> <br/> <br/> 
              <div className='display_tableslist'>
                  <br/>         
                  <div className='tableslist_table'>                           
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
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                                  <td>ffffff</td>
                                  <td>gggggg</td>
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                                  <td>ffffff</td>
                                  <td>gggggg</td>
                              </tr> 
                          </tbody>
                      </table>
                  </div>
                  <br/>
              </div>
          </div>
          {/*device list*/}
          <div id="deviceslist" className={`reportcontent ${activeTab === 'DEVICES LIST' ? 'active' : ''}`}>
              <br/> <br/> <br/> 
              <div className='display_devicelist'>
                  <br/>         
                  <div className='devicelist_table'>                           
                      <table>
                          <thead>
                              <tr>
                                  <th>Order ID</th>
                                  <th>Category</th>
                                  <th>Email</th>
                                  <th>Orders</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>                                
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
                              </tr>
                              <tr>
                                  <td>aaaaaaa</td>
                                  <td>bbbbbb</td>
                                  <td>cccccc</td>
                                  <td>dddddd</td>
                                  <td>eeeeee</td>
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
