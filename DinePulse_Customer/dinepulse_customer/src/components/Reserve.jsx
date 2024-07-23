import React, {useState} from "react";
import { BsTable } from "react-icons/bs";
import "../styles/Reserve.css";
import axios from "axios";

const Reserve = () => {

  //state for reservation input fields
  const [noofGuests, setNoofGuests] = useState("");
  const [reservationEmail, setReservationEmail] = useState("");
  const [reservationPhone, setReservationPhone] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [reservationSuggestions, setReservationSuggestions] = useState("");

  //state for reservation inputs validation errors
  const [reservationerrors, setReservationErrors] = useState({});

  //function to validate reservation form inputs
  const validateReservationForm = () => {
    const reservationerrors = {};
    if (!noofGuests.trim()) {
      reservationerrors.noofGuests = "No.of Guests is required.";
    }
    if (!reservationEmail.trim()) {
      reservationerrors.reservationEmail = "Reservation Email is required.";
    }
    if (!reservationPhone.trim()) {
      reservationerrors.reservationPhone = "Contact Number is required.";
    }
    if (!reservationDate.trim()) {
      reservationerrors.reservationDate = "Reservation Date is required.";
    }
    if (!reservationTime.trim()) {
      reservationerrors.reservationTime = "Reservation Time is required.";
    }
    if (!reservationSuggestions.trim()) {
      reservationerrors.reservationSuggestions = "Suggestions is required.";
    }
    return reservationerrors;
  };

  //popup insert and update functionality of reservation
  const handleSubmitReservation = async (e) => {
    e.preventDefault();

    const reservationerrors = validateReservationForm();
    if (Object.keys(reservationerrors).length > 0) {
      setReservationErrors(reservationerrors);
      return;
    }

    /*const formData = new FormData();
    formData.append("userName", noofGuests);
    formData.append("userPassword", reservationEmail);
    formData.append("userType", reservationPhone);
    formData.append("userName", reservationDate);
    formData.append("userPassword", reservationTime);
    formData.append("userType", reservationSuggestions);

    console.log("reservation noofGuests ==> "+noofGuests);
    console.log("reservation reservationEmail ==> "+reservationEmail);
    console.log("reservation reservationPhone ==> "+reservationPhone);
    console.log("reservation reservationDate ==> "+reservationDate);
    console.log("reservation reservationTime ==> "+reservationTime);
    console.log("reservation reservationSuggestions ==> "+reservationSuggestions);

    try {
      const url = `${process.env.REACT_APP_API_URL}Login/AddUser`;

      const method = "post";

      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Reservation Details inserted successfully.");
        setNoofGuests("");
        setReservationEmail("");
        setReservationPhone("");
        setReservationDate("");
        setReservationTime("");
        setReservationSuggestions("");
      } else {
        alert("Failed to save Reservation Details.");
      }
    } catch (error) {
      console.error("Error saving Reservation Details", error);
      alert("An error occurred while processing your request.");
    }*/
  };

  const resetAll = () => {

    alert("aaaaaaaaaa")
      setNoofGuests("");
      setReservationEmail("");
      setReservationPhone("");
      setReservationDate(null);
      setReservationTime(null);
      setReservationSuggestions(null);
      setReservationErrors({}); //clear errors when closing the modal
  };

  return (
    <div className="reserve">
      <br/><br/><br/><br/><br/><br/>
      <div className="add">
          <div className='reservetoday'>
                <form className='reserve-col' onSubmit={handleSubmitReservation}>
                    <div className="booktable_header">
                      <BsTable className="booktable_icon"/> <h3> BOOK A TABLE </h3>
                    </div>
                    <div className="booktable_subheader"><h5> WE OFFER YOU THE BEST RESERVATION SERVICE!!!</h5></div>
                    <br />
                    <div className="reservation-form-container">
                      <div className="reservation-form" >
                        <div className="left-side">
                          <label>Number of Guests:
                            <input type="number" name="guests" placeholder='Type here'
                            onChange={(e) => setNoofGuests(e.target.value)}/>
                            {reservationerrors.noofGuests && <p className="error">{reservationerrors.noofGuests}</p>}
                          </label>             
                          <label>Email ID:
                            <input type="email" name="email" placeholder="Type here"
                            onChange={(e) => setReservationEmail(e.target.value)}/>
                            {reservationerrors.reservationEmail && (
                              <p className="error">{reservationerrors.reservationEmail}</p>
                            )}
                          </label>
                          <label>Phone Number:
                            <input type="tel" name="phone" placeholder="Type here"
                            onChange={(e) => setReservationPhone(e.target.value)}/>
                            {reservationerrors.reservationPhone && (
                              <p className="error">{reservationerrors.reservationPhone}</p>
                            )}
                          </label>
                          <label>Date:
                            <input type="date" name="date" placeholder="Type here"
                              onChange={(e) => setReservationDate(e.target.value)}
                            />
                            {reservationerrors.reservationDate && (
                              <p className="error">{reservationerrors.reservationDate}</p>
                            )}
                          </label>
                          <label>Time:
                            <input type="time" name="time" placeholder="Type here"
                            onChange={(e) => setReservationTime(e.target.value)}
                          />
                          {reservationerrors.reservationTime && (
                            <p className="error">{reservationerrors.reservationTime}</p>
                          )}
                          </label>
                        </div>
                        
                        <div className="right-side">
                          <label>Suggestions:
                            <textarea name="suggestions" placeholder="If no suggestions, enter NIL"
                            onChange={(e) => setReservationSuggestions(e.target.value)}
                            ></textarea>
                            {reservationerrors.reservationSuggestions && (
                              <p className="error">
                                {reservationerrors.reservationSuggestions}
                              </p>
                            )}
                          </label>
                          <div className='reservation-buttons'>
                            <button type="submit" className="add-btn">MAKE BOOKING</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="cancel-btn"  onClick={resetAll}>RESET</button>
                          </div>
                          
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>      
    </div>
  );
};

export default Reserve;
