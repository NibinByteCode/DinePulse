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
        [ActionName("GetCategory")]
        public IActionResult GetMenuCategory()
        {
            try
            {
                DataTable table = new DataTable();
                table = dataLayer.Getfromdb("MenuCategory_GetCategory");
                if (table.Rows.Count > 0)
                {
                    string JSONresult;
                    JSONresult = Utils.JsonHelper.DataTableToJsonObj(table);
                    if (JSONresult != null)
                    {

                        return Ok("{\"data\":" + JSONresult + "}");
                    }
                    else
                    {
                        return BadRequest("No data");
                    }
                }
                else
                {
                    return BadRequest("No data");
                }


            }

            catch (Exception ex)
            {
                new LogHelper().LogError("Error getting data..." + ex.Message);
                return BadRequest("No Data Fetched...Please Try Later");
            }
        }


        [HttpPost]
        [ActionName("InsertCategory")]
        public IActionResult InsertMenuItem([FromBody] CategoryModel categoryModel)
        {
            try
            {
               // byte[] imageBytes = Convert.FromBase64String(categoryModel.ItemImageBase64);

                List<SqlParameter> parameters = new List<SqlParameter>
                {
                   
                    new SqlParameter("@category_name", SqlDbType.VarChar, 100) { Value = categoryModel.CategoryName },
                    new SqlParameter("@category_description", SqlDbType.Int) { Value = categoryModel.CategoryDescription },
                    new SqlParameter("@category_image", SqlDbType.VarChar, 255) { Value = null },
                   
                };

                // Execute the stored procedure to insert the menu item
                int rowsAffected = dataLayer.ExecuteSp_transaction("MenuCategory_InsertCategory", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("Menu item inserted successfully.");
                }
                else
                {
                    return BadRequest("Failed to insert menu item.");
                }
            }
            catch (Exception ex)
            {
                // Log the error
                new LogHelper().LogError("Error inserting Category item: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }




    }
}
