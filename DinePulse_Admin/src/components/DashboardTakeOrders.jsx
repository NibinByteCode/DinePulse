import React, { useState } from 'react';

export const DashboardTakeOrders = () => {

 // State for cart items and selected category
 const [cartItems, setCartItems] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState(null);

 // Hardcoded sample data for categories and products
 const categories = ['Starters', 'Hot Beverages', 'Main Course', 'Cold Beverages', 'Desserts'];
 const products = [
   { id: 1, name: 'Product 1', price: '10.99', category: 'Starters' },
   { id: 2, name: 'Product 2', price: '8.99', category: 'Starters' },
   { id: 3, name: 'Product 3', price: '10.99', category: 'Starters' },
   { id: 4, name: 'Product 4', price: '8.99', category: 'Tea/Cofee' },
   { id: 5, name: 'Product 5', price: '8.99', category: 'Tea/Cofee' },
   { id: 6, name: 'Product 6', price: '9.99', category: 'Tea/Cofee' },
   { id: 7, name: 'Product 7', price: '6.99', category: 'Tea/Cofee' },
   { id: 8, name: 'Product 8', price: '8.99', category: 'Main Course' },
   { id: 9, name: 'Product 9', price: '8.99', category: 'Main Course' },
   { id: 10, name: 'Product 10', price: '8.99', category: 'Main Course' },
   { id: 11, name: 'Product 11', price: '8.99', category: 'Cold Drinks' },
   { id: 12, name: 'Product 12', price: '8.99', category: 'Cold Drinks' },
   { id: 13, name: 'Product 13', price: '8.99', category: 'Cold Drinks' },
   { id: 14, name: 'Product 14', price: '8.99', category: 'Cold Drinks' },
   { id: 15, name: 'Product 15', price: '8.99', category: 'Cold Drinks' },
   { id: 16, name: 'Product 16', price: '8.99', category: 'Cold Drinks' },
   { id: 17, name: 'Product 17', price: '8.99', category: 'Cold Drinks' },
   { id: 18, name: 'Product 18', price: '8.99', category: 'Cold Drinks' },
   { id: 19, name: 'Product 19', price: '8.99', category: 'Cold Drinks' },
 ];

 // Function to add item to cart
 const addToCart = (product) => {
   const existingIndex = cartItems.findIndex(item => item.id === product.id);
   if (existingIndex !== -1) {
     // If the product already exists in the cart, update quantity and total price
     const updatedCartItems = [...cartItems];
     updatedCartItems[existingIndex].count++;
     updatedCartItems[existingIndex].total = (parseFloat(updatedCartItems[existingIndex].total) + parseFloat(updatedCartItems[existingIndex].price)).toFixed(2);
     setCartItems(updatedCartItems);
   } else {
     // If the product does not exist in the cart, add it with quantity 1
     setCartItems([...cartItems, { ...product, count: 1, total: product.price }]);
   }
 };

 // Function to remove item from cart
 const removeFromCart = (productId) => {
   const updatedCartItems = cartItems.filter(item => item.id !== productId);
   setCartItems(updatedCartItems);
 };

 // Function to calculate total amount
 const calculateTotalAmount = () => {
   return cartItems.reduce((total, item) => total + parseFloat(item.total), 0).toFixed(2);
 };

 return (

  <main className='main-container'>
        <div className='main-title'>
            <h3>TAKE ORDERS (POS)</h3>
        </div>
    <br/><br/><br/>
   <div className="takeorders">
     <div className='categoryvalues'>
       {/* Display categories horizontally */}
       <div className="categories">
         {categories.map(category => (
           <button key={category} 
             className={selectedCategory === category ? 'active' : ''}
             onClick={() => setSelectedCategory(category)}
           >
             {category}
           </button>
         ))}
       </div>
     </div>
     {/* Display products based on selected category */}
     <div className="content">
       <div className="products">
         {selectedCategory && products.filter(product => product.category === selectedCategory).map(product => (
           <div key={product.id} className="product">
             <p>{product.name}</p>
             <p>{product.price}</p>
             <button onClick={() => addToCart(product)}>Add to Cart</button>
           </div>
         ))}
       </div>
       {/* Display cart items as a table on the right side */}
       <aside className="cart">
         <h2>Cart</h2>
         {cartItems.length === 0 ? (
           <p>Cart is empty</p>
         ) : (
           <>
             <table>
               <thead>
                 <tr>
                   <th>Serial No.</th>
                   <th>Product Name</th>
                   <th>Price</th>
                   <th>Count</th>
                   <th>Total Amount</th>
                   <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                 {cartItems.map((item, index) => (
                   <tr key={item.id}>
                     <td>{index + 1}</td>
                     <td>{item.name}</td>
                     <td>{item.price}</td>
                     <td>{item.count}</td>
                     <td>{item.total}</td>
                     <td>
                       <button onClick={() => removeFromCart(item.id)}>Delete</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
             {/* Display total amount and confirm button */}
             <div className="total">
               <p>Total Amount: ${calculateTotalAmount()}</p>
               <button>Confirm</button>
             </div>
           </>
         )}
       </aside>
     </div>
   </div>
   </main>
  )
}
