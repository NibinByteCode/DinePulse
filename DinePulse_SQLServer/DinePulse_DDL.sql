-- Switch to the master database
USE master;
GO

-- Set the database to single-user mode and drop it if it exists
IF EXISTS (SELECT name FROM sys.databases WHERE name = 'dinepulse')
BEGIN
    ALTER DATABASE dinepulse SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE dinepulse;
END
GO

-- Create the new database
CREATE DATABASE dinepulse;
GO

-- Switch to the new database
USE dinepulse;
GO

-- Create tbl_user table
CREATE TABLE tbl_user (
    user_id INT PRIMARY KEY,
    user_name VARCHAR(50),
    user_password VARCHAR(50),
    user_type VARCHAR(50),
    user_status VARCHAR(50),
	user_registered_date DATE
);

-- Create tbl_roles table
CREATE TABLE tbl_roles (
    role_id INT PRIMARY KEY,
    role_name VARCHAR(50)
);

-- Create tbl_user_roles table
CREATE TABLE tbl_user_roles (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES tbl_user(user_id),
    FOREIGN KEY (role_id) REFERENCES tbl_roles(role_id)
);

-- Create tbl_menu_category table
CREATE TABLE tbl_menu_category (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50),
    category_description VARCHAR(255),
    category_image VARBINARY(MAX)
);

-- Create tbl_menu table
CREATE TABLE tbl_menu (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(100),
    item_category INT,
    item_description VARCHAR(255),
    item_price DECIMAL(10, 2),
    item_image VARBINARY(MAX),
    FOREIGN KEY (item_category) REFERENCES tbl_menu_category(category_id)
);

-- Create tbl_customer table
CREATE TABLE tbl_customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(20),
    customer_registered_date DATE
);

CREATE TABLE tbl_customer_login (
    customer_login_id INT PRIMARY KEY,
    customer_id INT,
    customer_username VARCHAR(50),
    customer_password VARCHAR(50),
    FOREIGN KEY (customer_id) REFERENCES tbl_customer(customer_id)
);
-- Create tbl_table_detail table
CREATE TABLE tbl_table_detail (
    table_id INT PRIMARY KEY,
    table_number INT,
    table_capacity INT,
    table_status VARCHAR(50)
);

-- Create tbl_order_type table
CREATE TABLE tbl_order_type (
    order_type_id INT PRIMARY KEY,
    order_type_name VARCHAR(50)
);

-- Create tbl_order_status table
CREATE TABLE tbl_order_status (
    status_id INT PRIMARY KEY,
    status_name VARCHAR(50)
);

-- Create tbl_order table
CREATE TABLE tbl_order (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_datetime DATETIME,
    order_type_id INT,
    table_id INT,
    status_id INT,
    FOREIGN KEY (customer_id) REFERENCES tbl_customer(customer_id),
    FOREIGN KEY (order_type_id) REFERENCES tbl_order_type(order_type_id),
    FOREIGN KEY (table_id) REFERENCES tbl_table_detail(table_id),
    FOREIGN KEY (status_id) REFERENCES tbl_order_status(status_id)
);

-- Create tbl_order_detail table
CREATE TABLE tbl_order_detail (
    order_detail_id INT PRIMARY KEY,
    order_id INT,
    item_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES tbl_order(order_id),
    FOREIGN KEY (item_id) REFERENCES tbl_menu(item_id)
);

-- Create tbl_bill_detail table
CREATE TABLE tbl_bill_detail (
    bill_id INT PRIMARY KEY,
    order_id INT,
    customer_id INT,
    bill_date DATE,
    total_amount DECIMAL(10, 2),
    status VARCHAR(50),
    FOREIGN KEY (order_id) REFERENCES tbl_order(order_id),
    FOREIGN KEY (customer_id) REFERENCES tbl_customer(customer_id)
);

-- Create tbl_slot table
CREATE TABLE tbl_slot (
    slot_id INT PRIMARY KEY,
    slot_start_time TIME,
    slot_end_time TIME
);

-- Create tbl_reservation table
CREATE TABLE tbl_reservation (
    reservation_id INT PRIMARY KEY,
    table_id INT,
    reservation_date DATE,
    customer_id INT,
    slot_id INT,
    status VARCHAR(50),
    FOREIGN KEY (table_id) REFERENCES tbl_table_detail(table_id),
    FOREIGN KEY (customer_id) REFERENCES tbl_customer(customer_id),
    FOREIGN KEY (slot_id) REFERENCES tbl_slot(slot_id)
);

-- Create tbl_configuration table
CREATE TABLE tbl_configuration (
	shop_id int primary key,
    shop_name VARCHAR(250),
    shop_email VARCHAR(250),
    shop_phone_number VARCHAR(250),
    shop_address VARCHAR(250),
    tax_rate DECIMAL(10, 2)
);

-- Create tbl_device table
CREATE TABLE tbl_device (
    device_id VARCHAR(250) PRIMARY KEY,
    device_username VARCHAR(250),
    device_password VARCHAR(250),
    device_token VARCHAR(MAX),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES tbl_user(user_id)
  
);

-- Create tbl_order_tracking table
CREATE TABLE tbl_order_tracking (
    tracking_id INT PRIMARY KEY,
    order_id INT,
    status_id INT,
    changed_datetime DATETIME,
    FOREIGN KEY (order_id) REFERENCES tbl_order(order_id),
    FOREIGN KEY (status_id) REFERENCES tbl_order_status(status_id)
);
GO

CREATE TABLE tbl_feedback (
    feedback_id INT PRIMARY KEY,
    customer_id INT,
    feedback_date DATE,
    feedback_text VARCHAR(500),
    rating INT, 
    FOREIGN KEY (customer_id) REFERENCES tbl_customer(customer_id)
);
