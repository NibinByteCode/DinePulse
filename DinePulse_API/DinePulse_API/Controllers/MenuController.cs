﻿using DinePulse_API.Database;
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
    public class MenuController : ControllerBase
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;
        public MenuController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
        }

        [HttpGet]
        [ActionName("GetMenuAll")]
        public IActionResult GetMenuAll()
        {
            try
            {
                DataTable table = new DataTable();
                table = dataLayer.Getfromdb("getmenuall");
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

        [HttpGet]
        [ActionName("GetMenuItemsAll")]
        public IActionResult GetMenuItemsAll()
        {
            try
            {
                DataTable table = new DataTable();
                table = dataLayer.Getfromdb("Menu_GetMenuItemsAll");
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


        [HttpGet]
        [ActionName("GetMenuById")]
        public IActionResult GetMenuById(string itemId)
        {
            try
            {
                List<SqlParameter> sp = new List<SqlParameter>()
        {
            new SqlParameter() { ParameterName = "@item_id", SqlDbType = SqlDbType.VarChar, Value = itemId }
        };

                DataTable table = new DataTable();
                table = dataLayer.Getbulkfromdb("GetMenuById", sp);

                if (table.Rows.Count > 0)
                {
                    string JSONresult;
                    JSONresult = Utils.JsonHelper.DataTableToJsonObj(table);

                    if (!string.IsNullOrEmpty(JSONresult))
                    {
                        return Ok(new { data = JSONresult });
                    }
                    else
                    {
                        return NotFound(); // No data found
                    }
                }
                else
                {
                    return NotFound(); // No data found
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error getting data..." + ex.Message);
                return BadRequest("No Data Fetched...Please Try Later");
            }
        }

        [HttpPost]
        [ActionName("InsertMenuItem")]
        public IActionResult InsertMenuItem([FromBody] MenuModel menuModel)
        {
            try
            {
                byte[] imageBytes = Convert.FromBase64String(menuModel.ItemImageBase64);
               
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter("@item_id", SqlDbType.Int) { Value = menuModel.ItemId },
                    new SqlParameter("@item_name", SqlDbType.VarChar, 100) { Value = menuModel.ItemName },
                    new SqlParameter("@item_category", SqlDbType.Int) { Value = menuModel.ItemCategory },
                    new SqlParameter("@item_description", SqlDbType.VarChar, 255) { Value = menuModel.ItemDescription },
                    new SqlParameter("@item_price", SqlDbType.Decimal) { Value = menuModel.ItemPrice },
                    new SqlParameter("@item_image", SqlDbType.VarBinary, -1) { Value = imageBytes },
                };

                // Execute the stored procedure to insert the menu item
                int rowsAffected = dataLayer.ExecuteSp_transaction("Menu_InsertMenu", parameters);

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
                new LogHelper().LogError("Error inserting menu item: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpPut]
        [ActionName("UpdateMenuItem")]
        public IActionResult UpdateMenuItem([FromBody] MenuModel menuModel)
        {
            try
            {
                byte[] imageBytes = Convert.FromBase64String(menuModel.ItemImageBase64);

                List<SqlParameter> parameters = new List<SqlParameter>
        {
            new SqlParameter("@item_id", SqlDbType.Int) { Value = menuModel.ItemId },
            new SqlParameter("@item_name", SqlDbType.VarChar, 100) { Value = menuModel.ItemName },
            new SqlParameter("@item_category", SqlDbType.Int) { Value = menuModel.ItemCategory },
            new SqlParameter("@item_description", SqlDbType.VarChar, 255) { Value = menuModel.ItemDescription },
            new SqlParameter("@item_price", SqlDbType.Decimal) { Value = menuModel.ItemPrice },
            new SqlParameter("@item_image", SqlDbType.VarBinary, -1) { Value = imageBytes },
        };

               
                int rowsAffected = dataLayer.ExecuteSp_transaction("Menu_UpdateMenu", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("Menu item updated successfully.");
                }
                else
                {
                    return BadRequest("Failed to update menu item.");
                }
            }
            catch (Exception ex)
            {
                // Log the error
                new LogHelper().LogError("Error updating menu item: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }


        [HttpDelete("{itemId}")]
        [ActionName("DeleteMenuItem")]
        public IActionResult DeleteMenuItem(int itemId)
        {
            try
            {
                List<SqlParameter> sp = new List<SqlParameter>()
        {
            new SqlParameter() { ParameterName = "@item_id", SqlDbType = SqlDbType.Int, Value = itemId }
        };

                dataLayer.ExecuteSp_transaction("DeleteMenuItem", sp);
                return Ok("Menu item deleted successfully");
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error deleting menu item..." + ex.Message);
                return BadRequest("Error deleting menu item. Please try again later.");
            }
        }

    }
}
