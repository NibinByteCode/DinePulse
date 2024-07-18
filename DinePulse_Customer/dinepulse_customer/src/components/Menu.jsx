import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Menu.css";

const Menu = () => {

  const [getCategoryList, setCategoryList] = useState([]);
  const [getMenuByCategoryList, setMenuByCategoryList] = useState([]);

  const fetchCategories = async () => {
    const API_URL = process.env.REACT_APP_API_URL + 'MenuCategory/GetAllMenuCategories';
    try {
      const response = await axios.get(API_URL);
      setCategoryList(response.data);
    } catch (error) {
      console.error(
        "Caught error while fetching GetAllMenuCategories :",
        error
      );
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

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <p>Menu</p>

      <section className="food-main">
          <div className="food-main-content">
              <h2>We believe food to be almost art, almost sacred...</h2>
              <p>
                  DinePulse is a gourmet paradise that entices palates with a delectable blend of world cuisines. 
                  We have a wide selection of delectable foods on our menu that are expertly prepared to please
                  every palate. Every mouthful at SavoryBites is an adventure through culinary perfection, from 
                  savory appetizers that set the tone for an amazing meal to masterfully prepared main meals 
                  showcasing the best ingredients. Our chefs create a symphony of flavors with a dedication to 
                  quality and innovation that turns eating into a pleasurable and unforgettable celebration of 
                  cuisine.
              </p>
          </div>
      </section>

      <section className="food-items">
            <div className="food">
                <h1>Explore Drinks and Food Options</h1>
                <form method="post" action="">
                    <div className="divContents">                           
                        <label className="label">Filter by Category:</label>
                        <select name="category" id="category" className="textContent">
                            <option value="all">All</option>
                            {getCategoryList.map((category) => (
                              <option key={category.categoryId} value={category.categoryId}>
                                {category.categoryName}
                              </option>
                            ))}
                            <option value="Mojito">Mojitoss</option>
                            <option value="Smoothie">Smoothiesss</option>
                            <option value="Starters">Starterssss</option>
                            <option value="Main course">Main Coursesss</option>
                        </select>
                        <button type="submit" className="filterButton" name="filter">Apply Filter</button>
                    </div>
                </form>
                <br/>
              
                <main>
                    <div class="product-row">
                    {getMenuByCategoryList && getMenuByCategoryList.length > 0 ? (
                      getMenuByCategoryList.map((product) => (
                        <div class="item">
                            <div class="img-container">
                                <img src={`${process.env.REACT_APP_IMAGE_URL}${product.item_image}`}
                                alt={product.item_name}/>
                                <div class="overlay">
                                  <p>{product.item_name}</p>
                                </div>
                            </div>
                            <h3>{product.item_name}</h3> 
                            <p>{product.item_price}</p>                                                
                            <input type="hidden" name="product_id" value={product.item_id}/>
                            <input type="hidden" name="product_name" value={product.item_name}/>
                            <input type="hidden" name="product_price" value={product.item_price}/>
                            <input type="hidden" name="product_image" value={product.item_name}/>
                            <button type="submit" class="cartButton" name="add_to_cart">Add to Cart</button>                          
                        </div>
                      ))
                      ) : (
                        <div
                          style={{
                            fontSize: "17px",
                            color: "#bb521f",
                            backgroundColor: "#ffe5d7",
                            padding: "10px",
                            textAlign: "center",
                          }}
                        >
                        No items available!!!
                      </div>
                    )}
                    </div>
                </main>
            </div>
        </section> 



      
    </div>
  );
};

export default Menu;
