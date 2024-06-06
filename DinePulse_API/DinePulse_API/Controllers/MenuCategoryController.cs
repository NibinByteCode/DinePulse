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



    }
}
