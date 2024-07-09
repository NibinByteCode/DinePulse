import React, { useState } from "react";
import free_table from "../assets/free_table.png";
import reserved_table from "../assets/reserved_table.png";
import { BsTable } from "react-icons/bs";

export const DashboardReservations = () => {
  const [formData, setFormData] = useState({ guests: '', email: '', phone: '', date: '', time: '', suggestions: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation Details:", formData);
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>RESERVATIONS</h3>
      </div>
      <br /><br />
      <div className="booktable_header">
        <BsTable className="booktable_icon"/> <h2> BOOK A TABLE </h2>
      </div><br />
      <div className="booktable_subheader"><h5> WE OFFER YOU THE BEST RESERVATION SERVICE!!!</h5></div>
      <br />
      <div className="reservation-form-container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="left-side">
            <label>Number of Guests:
              <input type="number" name="guests" value={formData.guests} onChange={handleChange} required/>
            </label>
            <label>Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
            </label>
            <label>Phone Number:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>Date:
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>Time:
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </label>
          </div>
          
          <div className="right-side">
            <label>Suggestions:
              <textarea name="suggestions" value={formData.suggestions} onChange={handleChange}></textarea>
            </label>
            <button type="submit" className='reservation-btn'>Make Your Booking</button>
          </div>
          
          {/*<div className='add'>
                <form className='flex-col' >
                    <div className='add-table-number flex-col'>
                        <p>Number of Guests</p>
                        <input type='number' name="guests" value={formData.guests} onChange={handleChange} required/>   
                    </div>
                    <div className='add-table-capacity flex-col'>
                        <p>Email</p>
                        <input type='email' name="email" value={formData.email} onChange={handleChange} required/> 
                    </div>
                    <div className='add-table-capacity flex-col'>
                        <p>Phone Number</p>
                        <input type='tel' name="phone" value={formData.phone} onChange={handleChange} required /> 
                    </div>
                    <div className='add-table-capacity flex-col'>
                        <p>Date</p>
                        <input type='date' name="date" value={formData.date} onChange={handleChange} required  /> 
                    </div>
                    <div className='add-table-capacity flex-col'>
                        <p>Time</p>
                        <input type='time' name="time" value={formData.time} onChange={handleChange} required  /> 
                    </div>
                    <div className='add-table-capacity flex-col'>
                        <p>Suggestions</p>
                        <textarea name="suggestions" value={formData.suggestions} onChange={handleChange}></textarea>
                    </div>
                    <div className='table-buttons'>
                        <button type='submit' className='reservation-btn'>Make Your Booking</button>
                    </div>
                </form>
            </div>*/}

        </form>
      </div>
    </main>
  );
};
