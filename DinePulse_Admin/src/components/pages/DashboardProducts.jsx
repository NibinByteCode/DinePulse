import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import upload_image from "../assets/upload_image.png";

// Set the app element for accessibility
Modal.setAppElement("#root");

export const DashboardProducts = () => {
  const [activeTab, setActiveTab] = useState("CATEGORIES");
  const [getCategoryList, setCategoryList] = useState([]);
  const [isModalOpenCategory, setIsModalOpenCategory] = useState(false);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);
  const [image, setImage] = useState(null);
  const [getMenuList, setMenuList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryModel.CategoryName", categoryName);
    formData.append("categoryModel.CategoryDescription", categoryDescription);
    formData.append("categoryImage", categoryImage);
    if (selectedCategory) {
      formData.append("categoryModel.categoryId", selectedCategory.categoryId);
    }

    try {
      const url = selectedCategory
        ? `${process.env.REACT_APP_API_URL}MenuCategory/UpdateMenuCategory`
        : `${process.env.REACT_APP_API_URL}MenuCategory/InsertCategory`;

      const method = selectedCategory ? "put" : "post";

      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setMessage(
          selectedCategory
            ? "Category updated successfully."
            : "Category inserted successfully."
        );
        setIsModalOpenCategory(false);
        setCategoryName("");
        setCategoryDescription("");
        setCategoryImage(null);
        setSelectedCategory(null);
        fetchCategories();
      } else {
        setMessage("Failed to save category.");
      }
    } catch (error) {
      console.error("Error saving category", error);
      setMessage("An error occurred while processing your request.");
    }
  };

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleModalCategory = () => {
    if (isModalOpenCategory) {
      setSelectedCategory(null);
      setCategoryName("");
      setCategoryDescription("");
      setCategoryImage(null);
      setImage(null);
    }
    setIsModalOpenCategory(!isModalOpenCategory);
  };

  const toggleModalMenu = () => {
    setIsModalOpenMenu(!isModalOpenMenu);
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setCategoryName(category.categoryName);
    setCategoryDescription(category.categoryDescription);
    setImage(null);
    toggleModalCategory();
  };

  // Inside your component function DashboardProducts
  const [selectedCategoryToDelete, setSelectedCategoryToDelete] =
    useState(null);

  // Add a new state variable to control the delete modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Function to open the delete modal
  const openDeleteModal = (category) => {
    setSelectedCategoryToDelete(category);
    setIsDeleteModalOpen(true);
  };

  // Function to close the delete modal
  const closeDeleteModal = () => {
    setSelectedCategoryToDelete(null);
    setIsDeleteModalOpen(false);
  };

  // Modify the handleDeleteCategory function to directly open the delete modal
  const handleDeleteCategory = (categoryId) => {
    const categoryToDelete = getCategoryList.find(
      (category) => category.categoryId === categoryId
    );
    openDeleteModal(categoryToDelete);
  };

  const handleConfirmDelete = async (categoryId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}MenuCategory/DeleteMenuCategory/${categoryId}`
      );
      if (response.status === 200) {
        setMessage("Category deleted successfully.");
        setCategoryList(
          getCategoryList.filter(
            (category) => category.categoryId !== categoryId
          )
        );
        setIsDeleteModalOpen(false);
      } else {
        setMessage("Failed to delete category.");
      }
    } catch (error) {
      console.error("Error deleting category", error);
      setMessage("An error occurred while processing your request.");
    }
  };

  const fetchCategories = async () => {
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
      setCategoryList(data);
    } catch (error) {
      console.error("Caught error while fetching data:", error);
    }
  };

  const fetchMenus = async () => {
    const API_URL = `${process.env.REACT_APP_API_URL}Menu/GetMenuAll`;
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: API_URL,
      headers: {},
    };

    try {
      const response = await axios.request(config);
      const data = response.data.data;
      setMenuList(data);
    } catch (error) {
      console.error("Caught error while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>CATEGORIES AND MENU</h3>
      </div>
      <br />
      <br />
      <div className="tab">
        <button
          className={`tablinks ${activeTab === "CATEGORIES" ? "active" : ""}`}
          onClick={() => openTab("CATEGORIES")}
        >
          CATEGORIES
        </button>
        <button
          className={`tablinks ${activeTab === "MENU" ? "active" : ""}`}
          onClick={() => openTab("MENU")}
        >
          MENU
        </button>
      </div>
      <div
        id="categories"
        className={`tabcontent ${activeTab === "CATEGORIES" ? "active" : ""}`}
      >
        <button className="addnew_btn" onClick={toggleModalCategory}>
          <b>
            <span className="addnew_text">ADD NEW CATEGORY</span>
          </b>
          &nbsp;&nbsp;&nbsp;
          <MdAddToPhotos className="add_icon" />
        </button>
        <br /> <br /> <br />
        <div className="display_categories">
          <div className="categories_table">
            <table>
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Category Image</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getCategoryList.map((categorylist) => (
                  <tr key={categorylist.categoryId}>
                    <td>{categorylist.categoryId}</td>
                    <td style={{ TextAlign: "center" }}>
                      {categorylist.categoryImageBase64 && (
                        <img
                          src={`data:image/jpeg;base64,${categorylist.categoryImageBase64}`}
                          className="categoryImage"
                          alt={categorylist.categoryName}
                          style={{ display: "block", margin: "0 auto" }}
                        />
                      )}
                    </td>
                    <td>{categorylist.categoryName}</td>
                    <td>{categorylist.categoryDescription}</td>
                    <td>
                      <FaEdit
                        className="edit_icon"
                        onClick={() => handleEditCategory(categorylist)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <RiDeleteBin5Fill
                        className="delete_icon"
                        onClick={() =>
                          handleDeleteCategory(categorylist.categoryId)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        id="menuitems"
        className={`tabcontent ${activeTab === "MENU" ? "active" : ""}`}
      >
        <button className="addnew_btn" onClick={toggleModalMenu}>
          <b>
            <span className="addnew_text">ADD NEW MENU</span>
          </b>
          &nbsp;&nbsp;&nbsp;
          <MdAddToPhotos className="add_icon" />
        </button>
        <br /> <br /> <br />
        <div className="display_categories">
          <br />
          <div className="categories_table">
            <table>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getMenuList.map((menulist) => (
                  <tr key={menulist.item_id}>
                    <td>{menulist.item_id}</td>
                    <td>{menulist.item_name}</td>
                    <td>{menulist.item_category}</td>
                    <td>{menulist.item_description}</td>
                    <td>${menulist.item_price}</td>
                    <td>
                      <FaEdit className="edit_icon" />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <RiDeleteBin5Fill className="delete_icon" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
        </div>
      </div>
      <Modal
        isOpen={isModalOpenCategory}
        onRequestClose={toggleModalCategory}
        contentLabel="Add New Category"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2 className="modal-title">
            {selectedCategory ? "Edit Category" : "Add New Category"}
          </h2>
          <button className="modal-close-button" onClick={toggleModalCategory}>
            <IoClose />
          </button>
        </div>
        <div className="add">
          <form className="flex-col" onSubmit={handleSubmit}>
            <div className="add-category-img-upload flex-col">
              <p>Upload Image</p>
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : upload_image}
                  alt=""
                />
              </label>
              <input
                onChange={(e) => {
                  setCategoryImage(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
                type="file"
                id="image"
                required
              />
            </div>
            <div className="add-category-name flex-col">
              <p>Category Name</p>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </div>
            <div className="add-category-description flex-col">
              <p>Category Description</p>
              <textarea
                name="description"
                placeholder="Write content here"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                required
              />
            </div>
            <div className="category-buttons">
              <button type="submit" className="add-btn">
                {selectedCategory ? "UPDATE" : "ADD"}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={toggleModalCategory}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={isModalOpenMenu}
        onRequestClose={toggleModalMenu}
        contentLabel="Add New MenuItem"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2 className="modal-title">Add New MenuItem</h2>
          <button className="modal-close-button" onClick={toggleModalMenu}>
            <IoClose />
          </button>
        </div>
        <div className="add">
          <form className="flex-col">
            <div className="add-product-img-upload flex-col">
              <p>Upload Image</p>
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : upload_image}
                  alt=""
                />
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
                required
              />
            </div>
            <div className="add-product-name flex-col">
              <p>Product Name</p>
              <input type="text" name="name" placeholder="Type here" />
            </div>
            <div className="add-product-description flex-col">
              <p>Product Description</p>
              <textarea
                name="description"
                placeholder="Write content here"
                required
              />
            </div>
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select name="category">
                <option value="#">Select Category</option>
                <option value="aaaa">aaaa</option>
                <option value="bbbb">bbbb</option>
                <option value="cccc">cccc</option>
                <option value="dddd">dddd</option>
                <option value="eeee">eeee</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input type="number" name="price" placeholder="$20" />
            </div>
            <div className="section-buttons">
              <button type="submit" className="add-btn">
                ADD
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={toggleModalMenu}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Category"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2 className="modal-title">Delete Category</h2>
          <button className="modal-close-button" onClick={closeDeleteModal}>
            <IoClose />
          </button>
        </div>
        <div className="delete">
          <p>Are you sure you want to delete this category?</p>
          <div className="delete-buttons">
            <button
              className="delete-btn"
              onClick={() =>
                handleConfirmDelete(selectedCategoryToDelete.categoryId)
              }
            >
              Delete
            </button>
            <button className="cancel-btn" onClick={closeDeleteModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
