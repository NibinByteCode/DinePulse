import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa"; // Import icons
import CategoryButton from "./TakeOrdersCategoryButton";
import Product from "./TakeOrdersProduct";
import Cart from "./TakeOrdersCart";
import Modal from "./TakeOrdersOnHoldModal"; // Import the modal component
import { useLocation } from "react-router-dom"; // Import useLocation

export const DashboardTakeOrders = () => {
  const [getCategoryList, setCategoryList] = useState([]);
  const [getMenuByCategoryList, setMenuByCategoryList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false); // State for menu modal visibility
  const [selectedMenuItem, setSelectedMenuItem] = useState(null); // State for selected menu item
  const [menuName, setMenuName] = useState("");
  const [menuDescription, setMenuDescription] = useState("");
  const [menuCategory, setMenuCategory] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [menuImage, setMenuImage] = useState(null);
  const [image, setImage] = useState(null);
  const [menuerrors, setMenuErrors] = useState({});
  const location = useLocation(); // Get the current location

  const [getOnHoldList, setOnHoldList] = useState([]);
  useEffect(() => {
    if (location.state && location.state.action === "On-Hold") {
      setIsModalOpenMenu(true); // Show the modal if action is "On-Hold"
      fetchOnHoldList();
    } else if (location.state && location.state.action === "Take-Away") {
       // Show the modal if action is "On-Hold"  Dine-In
    } else {
      
    }
  }, [location.state]);

  //fetch category details from table
  const fetchOnHoldList = async () => {
    const API_URL = `${process.env.REACT_APP_API_URL}MenuCategory/GetAllMenuCategories`;
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: API_URL,
      headers: {},
    };

    try {
      const response = await axios.request(config);
      const data = response.data;
      setOnHoldList(data);
    } catch (error) {
      console.error("Caught error while fetching GetAllMenuCategories :", error);
    }
  };

  const fetchCategories = async () => {
    const API_URL = `${process.env.REACT_APP_API_URL}MenuCategory/GetAllMenuCategories`;
    try {
      const response = await axios.get(API_URL);
      setCategoryList(response.data);
    } catch (error) {
      console.error("Caught error while fetching GetAllMenuCategories :", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchMenus = async (categoryId) => {
    const API_URL = `${process.env.REACT_APP_API_URL}Menu/GetMenuByCategoryId?itemId=${categoryId}`;
    try {
      const response = await axios.get(API_URL);
      setMenuByCategoryList(response.data.data);
    } catch (error) {
      console.error("Caught error while fetching GetMenuByCategoryId:", error);
    }
  };

  useEffect(() => {
    fetchMenus(1);
  }, []);

  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.item_id === product.item_id);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].count++;
      updatedCartItems[existingIndex].total = (
        parseFloat(updatedCartItems[existingIndex].total) +
        parseFloat(updatedCartItems[existingIndex].item_price)
      ).toFixed(2);
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, count: 1, total: product.item_price },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.item_id !== productId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.total), 0)
      .toFixed(2);
  };

  const closeCart = () => {
    setIsClosing(true); 
    setTimeout(() => {
      setIsCartOpen(false);
      setIsClosing(false);
    }, 300); 
  };

  const [message, setMessage] = useState("");

  const handleInsertOrders = async () => {
    const formData = new FormData();
    formData.append("menuModel.itemName", "aaaaaaa");
    formData.append("menuModel.itemDescription", "bbbbbbb");
    formData.append("menuModel.itemCategory", "ccccccccc");
    formData.append("menuModel.itemPrice", "dddddd");

    try {
      const url = process.env.REACT_APP_API_URL + "Orders/InsertOrders";
      const method = "post";

      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setMessage("Orders inserted successfully.");
      } else {
        setMessage("Failed to save orders.");
      }
    } catch (error) {
      console.error("Error saving orders", error);
      setMessage("An error occurred while processing your request.");
    }
  };

  const handleSubmitMenu = async (event) => {
    event.preventDefault();
    // Handle form submission for adding/editing menu items
    // Add your logic here...
  };

  const toggleModalMenu = () => {
    setIsModalOpenMenu(!isModalOpenMenu);
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>TAKE ORDERS (POS)</h3>
      </div>
      <br />
      <div className="takeorders">
        <div className="categoryvalues">
          <div className="categories">
            {getCategoryList.map((category) => (
              <CategoryButton 
                key={category.categoryId}
                category={category}
                selectedCategory={selectedCategory}
                fetchMenus={fetchMenus}
              />
            ))}
            <FaShoppingCart
              className="cart-icon"
              onClick={() => setIsCartOpen(true)}
            />
          </div>
        </div>
        <div className="content">
          <div className="products">
            {getMenuByCategoryList && getMenuByCategoryList.length > 0 ? (
              getMenuByCategoryList.map((product) => (
                <Product 
                  key={product.item_id}
                  product={product}
                  addToCart={addToCart}
                />
              ))
            ) : (
              <div style={{ fontSize: "17px", color: "#bb521f", backgroundColor: "#ffe5d7", padding: "10px", textAlign: "center" }}>
                No items available!!!
              </div>
            )}
          </div>

          <Cart 
            cartItems={cartItems}
            isCartOpen={isCartOpen}
            isClosing={isClosing}
            closeCart={closeCart}
            removeFromCart={removeFromCart}
            calculateTotalAmount={calculateTotalAmount}
            handleInsertOrders={handleInsertOrders}
          />
        </div>
      </div>

      {/* Modal for showing on-hold order details */}
      <Modal
        isOpen={isModalOpenMenu}
        onRequestClose={toggleModalMenu}
        contentLabel="On-Hold Order Details"
      >
        <div className="add">
          <form className="flex-col">
          <div className="display_categories">
            <div className="categories_table">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Order Details</th>
                    <th>Category</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {getOnHoldList.length > 0 ? (
                      getOnHoldList.map((categorylist) => (
                      <tr key={categorylist.categoryId}>
                        <td>{categorylist.categoryId}</td>
                        <td>{categorylist.categoryName}</td>
                        <td>{categorylist.categoryName}</td>
                        <td>{categorylist.categoryDescription}</td>
                        <td>
                          <button className="onhold_continue">Continiue Ordering</button>
                        </td>
                      </tr>
                    ))) : (
                      <tr>
                        <td colSpan="5" style={{ fontSize: "17px", color: "#bb521f", backgroundColor: "#ffe5d7" }}>No on-hold orders for the day!!!</td>
                      </tr>
                    )}
                </tbody>
              </table>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
};
