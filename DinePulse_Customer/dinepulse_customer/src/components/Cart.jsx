import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";
import empty_cart from "../assets/empty-cart.png";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const updateCart = (updatedItems) => {
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleIncrement = (index) => {
        const updatedItems = [...cartItems];
        updatedItems[index].count++;
        updateCart(updatedItems);
    };

    const handleDecrement = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].count > 1) {
        updatedItems[index].count--;
        updateCart(updatedItems);
    }
    };

    const handleRemove = (itemId) => {
        const updatedItems = cartItems.filter((item) => item.item_id !== itemId);
        updateCart(updatedItems);
      };

    const orderPrice = cartItems.reduce((total, item) => total + (item.count * parseFloat(item.item_price)), 0);
    const shippingCharges = 5.49;
    const totalPayable = orderPrice + shippingCharges;

    const navigate = useNavigate();

    return (
        <div className="cart">
            <h1>Our Cart</h1>
            <p>Cart</p>
            {cartItems.length > 0 ? (
                <main className="cart-container">
                    <div className="order-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img 
                                                src={`${process.env.REACT_APP_IMAGE_URL}${item.item_image}`} 
                                                alt={item.item_name} 
                                                className='product-image' 
                                            />
                                        </td>
                                        <td>{item.item_name}</td>
                                        <td>${item.item_price}</td>
                                        <td>
                                            <button 
                                                className='quantity-btn' 
                                                onClick={() => handleDecrement(index)}
                                            >
                                                &nbsp;-&nbsp;
                                            </button>
                                            <span id={`quantity-${item.item_id}`}>
                                                &nbsp;{item.count}&nbsp;
                                            </span>
                                            <button 
                                                className='quantity-btn' 
                                                onClick={() => handleIncrement(index)}
                                            >
                                                &nbsp;+&nbsp;
                                            </button>
                                        </td>
                                        <td>
                                            <RiDeleteBin5Fill 
                                                className='delete-icon' 
                                                onClick={() => handleRemove(item.item_id)} 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <aside className="paymentInfo">
                        <div className="team_payment">
                            <br/>
                            <h2>Payment Summary</h2>
                            <h4 id="total">Order price: ${orderPrice.toFixed(2)}</h4>
                            <h4>Shipping charges: ${shippingCharges.toFixed(2)}</h4>
                            <hr />
                            <h4>Total payable: ${totalPayable.toFixed(2)}</h4>
                            <p>
                                <button className="checkout-button" onClick={() => navigate("/checkout")}>Continue to checkout</button>
                            </p>
                            <br />
                        </div>
                    </aside>
                </main>
            ) : (
                <div>
                    <img src={empty_cart} alt="Empty cart" className="header-logo" />
                    <br />
                    <h4>Your cart is empty!!!</h4>
                </div>
            )}
        </div>
    );
};

export default Cart;
