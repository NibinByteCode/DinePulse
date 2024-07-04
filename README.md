**DINEPULSE - CAPSTONE PROJECT**

Group members
-------------------------
- Aimy Shaju : 8898297
- Joshy Johny : 8857731
- Nibin Moideenkutty : 8890966
----------------------------------------------------------------------------------------------------------------------------
The primary objective of this capstone project is the design and development of a robust restaurant management system that includes both web and mobile applications. We'd like to make the system user-friendly with the use of modern technologies, including React, the .NET framework, and MS SQL, that would enhance the overall dining experience. Also, we will make use of Flutter to provide a fully responsive mobile application to complement the web-based solution.
The scope of our project encompasses several key components essential for effective restaurant management:
- Admin Dashboard : Our web application will feature an intuitive admin dashboard equipped with tools for online order monitoring,  order approval management, dine-in order and table management, receipt generation, menu management, and periodic reports generation.
- Table Order Management Mobile App : To facilitate table management, we will develop a separate mobile application. This app will enable restaurant staff to view available tables, reserve tables for customers, and manage orders directly from their mobile devices for both dine-in and takeout.
- Customer Order Placing : Customers will have the convenience of placing orders online through our user-friendly web application. They can easily log in, browse the menu, add items to their cart, proceed to checkout, and receive digital receipts upon completion.

**How to Run the Project:**
The Project mainly has 3 Parts: 
- A backend API developed in ASP.NET Core.
- An Admin dashboard using REACT.
- A Mobile App developed using Flutter.

**Using the Cloud API**

The Backend API is already hosted in the Azure Cloud with the Database server configured in the Azure SQL . A CI/CD pipeline with GitHub Actions is configured so as whenever the commit happens to the main branch, API will be build and deployed to the Backend Server.
       
**Using Local Instance of API:**
- First Create a database in MS SQL with name as dinepulse and run the DB Scripts available in folder- Dinepulse_DinepulseSQLServer.
- Run the API Source Code using Visual Studio from the folder Dinepulse/Dinepulse_API. Make sure to change the Connection String in the secrets.json file.
- Run the Admin Dashboard app from the folder- Dinepulse/Dinepulse_Admin - using command *npm start* . Make sure to change the API URL in the .env file.

**User Credentials**

Default 
        Username : admin
        
        Password : admin123
        
This user will be able to login in both Admin dashboard and Mobile application.
  
