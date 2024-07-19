import React, { useState } from "react";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [formData, setFormData] = useState({
        custName: '',
        custEmail: '',
        custPhone: '',
        custUnitno: '',
        custStreetname: '',
        custCity: '',
        custProvince: '',
        custCountry: '',
        custPincode: '',
        cardName: '',
        issuingBank: '',
        cardNumber: '',
        expiryDate: '',
        cardcvv: '',
    });

    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/; // Adjust this pattern as needed

        /*for (const [key, value] of Object.entries(formData)) {
            if (!value.trim()) {
                newErrors[key] = "This field is required";
            }
        }

        if (formData.custEmail && !emailPattern.test(formData.custEmail)) {
            newErrors.custEmail = "Invalid email format";
        }

        if (formData.custPhone && !phonePattern.test(formData.custPhone)) {
            newErrors.custPhone = "Invalid phone number format";
        }

        if (formData.cardNumber && formData.cardNumber.length !== 16) {
            newErrors.cardNumber = "Card number must be 16 digits";
        }

        if (formData.cardcvv && formData.cardcvv.length !== 3) {
            newErrors.cardcvv = "CVV must be 3 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;*/
        if (!formData.custName.trim()) newErrors.custName = "Customer Name is required";
        if (!formData.custEmail.trim()) newErrors.custEmail = "Email ID is required";
        if (formData.custEmail && !emailPattern.test(formData.custEmail)) newErrors.custEmail = "Invalid email format";
        if (!formData.custPhone.trim()) newErrors.custPhone = "Contact No. is required";
        if (formData.custPhone && !phonePattern.test(formData.custPhone)) newErrors.custPhone = "Invalid phone number format";
        if (!formData.custUnitno.trim()) newErrors.custUnitno = "Unit No# is required";
        if (!formData.custStreetname.trim()) newErrors.custStreetname = "Street Name is required";
        if (!formData.custCity.trim()) newErrors.custCity = "City is required";
        if (!formData.custProvince.trim()) newErrors.custProvince = "Province is required";
        if (!formData.custCountry.trim()) newErrors.custCountry = "Country is required";
        if (!formData.custPincode.trim()) newErrors.custPincode = "Pincode is required";
        if (!formData.cardName.trim()) newErrors.cardName = "Name on Card is required";
        if (!formData.issuingBank.trim()) newErrors.issuingBank = "Issuing Bank is required";
        if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card Number is required";
        if (formData.cardNumber && formData.cardNumber.length !== 16) newErrors.cardNumber = "Card number must be 16 digits";
        if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry Date is required";
        if (!formData.cardcvv.trim()) newErrors.cardcvv = "CVV is required";
        if (formData.cardcvv && formData.cardcvv.length !== 3) newErrors.cardcvv = "CVV must be 3 digits";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (validate()) {
            // Handle form submission
            alert('Form submitted successfully!');
            navigate('/ordersuccess');
            // You can perform further actions like sending the data to a server here
        }
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <p>Checkout Page</p>
            <main className="checkout-container">
                <form onSubmit={handleSubmit} id="order_form">
                    <div className="form-sections">
                        <section className="personal-details">
                            <div className="personal-section">
                                <h2>Contact Information</h2>
                                <div className="divContents">
                                    <label htmlFor="custName" className="label">Customer Name:</label>
                                    <input
                                        type="text"
                                        id="custName"
                                        name="custName"
                                        className="textContent"
                                        value={formData.custName}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custName && <span className="error">{errors.custName}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custEmail" className="label">Email ID:</label>
                                    <input
                                        type="text"
                                        id="custEmail"
                                        name="custEmail"
                                        className="textContent"
                                        value={formData.custEmail}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custEmail && <span className="error">{errors.custEmail}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custPhone" className="label">Contact No.:</label>
                                    <input
                                        type="text"
                                        id="custPhone"
                                        name="custPhone"
                                        className="textContent"
                                        value={formData.custPhone}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custPhone && <span className="error">{errors.custPhone}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custUnitno" className="label">Unit No#:</label>
                                    <input
                                        type="number"
                                        id="custUnitno"
                                        name="custUnitno"
                                        className="textContent"
                                        value={formData.custUnitno}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custUnitno && <span className="error">{errors.custUnitno}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custStreetname" className="label">Street Name:</label>
                                    <input
                                        type="text"
                                        id="custStreetname"
                                        name="custStreetname"
                                        className="textContent"
                                        value={formData.custStreetname}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custStreetname && <span className="error">{errors.custStreetname}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custCity" className="label">City:</label>
                                    <input
                                        type="text"
                                        id="custCity"
                                        name="custCity"
                                        className="textContent"
                                        value={formData.custCity}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custCity && <span className="error">{errors.custCity}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custProvince" className="label">Province:</label>
                                    <input
                                        type="text"
                                        id="custProvince"
                                        name="custProvince"
                                        className="textContent"
                                        value={formData.custProvince}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custProvince && <span className="error">{errors.custProvince}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custCountry" className="label">Country:</label>
                                    <input
                                        type="text"
                                        id="custCountry"
                                        name="custCountry"
                                        className="textContent"
                                        value={formData.custCountry}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custCountry && <span className="error">{errors.custCountry}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="custPincode" className="label">Pincode:</label>
                                    <input
                                        type="text"
                                        id="custPincode"
                                        name="custPincode"
                                        className="textContent"
                                        value={formData.custPincode}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.custPincode && <span className="error">{errors.custPincode}</span>}
                                </div>
                            </div>
                        </section>
                        <section className="card-details">
                            <div className="card-section">
                                <h2>Cardholder Information</h2>
                                <div className="divContents">
                                    <label htmlFor="cardName" className="label">Name on Card:</label>
                                    <input
                                        type="text"
                                        id="cardName"
                                        name="cardName"
                                        className="textContent"
                                        value={formData.cardName}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.cardName && <span className="error">{errors.cardName}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="issuingBank" className="label">Issuing Bank:</label>
                                    <input
                                        type="text"
                                        id="issuingBank"
                                        name="issuingBank"
                                        className="textContent"
                                        value={formData.issuingBank}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.issuingBank && <span className="error">{errors.issuingBank}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="cardNumber" className="label">Card Number:</label>
                                    <input
                                        type="number"
                                        id="cardNumber"
                                        name="cardNumber"
                                        className="textContent"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="expiryDate" className="label">Expiry Date:</label>
                                    <input
                                        type="date"
                                        id="expiryDate"
                                        name="expiryDate"
                                        className="textContent"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                                </div>
                                <div className="divContents">
                                    <label htmlFor="cardcvv" className="label">CVV:</label>
                                    <input
                                        type="password"
                                        id="cardcvv"
                                        name="cardcvv"
                                        className="textContent"
                                        value={formData.cardcvv}
                                        onChange={handleChange}
                                    />
                                    <span>*</span>
                                    {errors.cardcvv && <span className="error">{errors.cardcvv}</span>}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="buttonClick">
                        <input type="submit" name="submit" id="submit" value="PROCEED TO PAY" />
                    </div>
                    {/*{formSubmitted && !Object.keys(errors).length && (
                        <div className="order-success">
                            <h5>Form submitted successfully!</h5>
                        </div>
                    )}*/}
                </form>
            </main>
        </div>
    );
};

export default Checkout;
