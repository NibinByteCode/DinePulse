using DinePulse_API.Database;
using DinePulse_API.Models;
using DinePulse_API.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace DinePulse_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MenuCategoryController : ControllerBase
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;
        public MenuCategoryController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
        }
        [HttpGet]
        [ActionName("GetAllMenuCategories")]
        public IActionResult GetAllMenuCategories()
        {
            try
            {
                DataTable table = dataLayer.Getfromdb("MenuCategory_GetCategory");

                List<CategoryModel> categories = new List<CategoryModel>();
                foreach (DataRow row in table.Rows)
                {
                    CategoryModel category = new CategoryModel
                    {
                        CategoryId = Convert.ToInt32(row["category_id"]),
                        CategoryName = row["category_name"].ToString(),
                        CategoryDescription = row["category_description"].ToString(),
                        CategoryImageBase64 = Convert.ToBase64String(row["category_image"] as byte[])
                    };

                    categories.Add(category);
                }

                return Ok(categories);
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error retrieving menu categories: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpPost]
        [ActionName("InsertCategory")]
        public async Task<IActionResult> InsertMenuItem([FromForm] CategoryModel categoryModel, [FromForm] IFormFile categoryImage)
        {
            try
            {
                byte[] imageBytes = null;
                if (categoryImage != null && categoryImage.Length > 0)
                {
                    using (var ms = new MemoryStream())
                    {
                        await categoryImage.CopyToAsync(ms);
                        imageBytes = ms.ToArray();
                    }
                }

                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter("@category_name", SqlDbType.VarChar, 100) { Value = categoryModel.CategoryName },
                    new SqlParameter("@category_description", SqlDbType.VarChar, 255) { Value = categoryModel.CategoryDescription },
                    new SqlParameter("@category_image", SqlDbType.VarBinary) { Value = (object)imageBytes ?? DBNull.Value }
                };

                int rowsAffected = dataLayer.ExecuteSp_transaction("MenuCategory_InsertCategory", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("Category inserted successfully.");
                }
                else
                {
                    return BadRequest("Failed to insert category.");
                }
            }
            catch (Exception ex)
            {
                // Log the error
                new LogHelper().LogError("Error inserting category: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpPut]
        [ActionName("UpdateMenuCategory")]
        public async Task<IActionResult> UpdateMenuCategory([FromForm] CategoryModel categoryModel, [FromForm] IFormFile categoryImage)
        {
            try
            {
                byte[] imageBytes = null;
                if (categoryImage != null && categoryImage.Length > 0)
                {
                    using (var ms = new MemoryStream())
                    {
                        await categoryImage.CopyToAsync(ms);
                        imageBytes = ms.ToArray();
                    }
                }
                else if (!string.IsNullOrEmpty(categoryModel.CategoryImageBase64))
                {
                    imageBytes = Convert.FromBase64String(categoryModel.CategoryImageBase64);
                }

                List<SqlParameter> parameters = new List<SqlParameter>
        {
            new SqlParameter("@category_id", SqlDbType.Int) { Value = categoryModel.CategoryId },
            new SqlParameter("@category_name", SqlDbType.VarChar, 50) { Value = categoryModel.CategoryName },
            new SqlParameter("@category_description", SqlDbType.VarChar, 255) { Value = categoryModel.CategoryDescription },
            new SqlParameter("@category_image", SqlDbType.VarBinary, -1) { Value = (object)imageBytes ?? DBNull.Value }
        };

                int rowsAffected = dataLayer.ExecuteSp_transaction("MenuCategory_UpdateCategory", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("Menu category updated successfully.");
                }
                else
                {
                    return BadRequest("Failed to update menu category.");
                }
            }
            catch (Exception ex)
            {
                // Log the error
                new LogHelper().LogError("Error updating menu category: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }


        [HttpDelete("{categoryId}")]
        [ActionName("DeleteMenuCategory")]
        public IActionResult DeleteMenuCategory(int categoryId)
        {
            try
            {
                List<SqlParameter> parameters = new List<SqlParameter>
        {
            new SqlParameter("@category_id", SqlDbType.Int) { Value = categoryId }
        };

               
                int rowsAffected = dataLayer.ExecuteSp_transaction("MenuCategory_DeleteCategory", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("Menu category deleted successfully.");
                }
                else
                {
                    return BadRequest("Failed to delete menu category.");
                }
            }
            catch (Exception ex)
            {
              
                new LogHelper().LogError("Error deleting menu category: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }



    }
}
