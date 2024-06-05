using DinePulse_API.Database;
using DinePulse_API.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;


namespace DinePulse_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;

        public LoginController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
        }

        [HttpPost]
        [ActionName("Login")]
        public IActionResult Login(string userName, string userPassword)
        {
            try
            {
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter("@user_name", SqlDbType.VarChar, 50) { Value = userName },
                    new SqlParameter("@user_password", SqlDbType.VarChar, 50) { Value = userPassword }
                };

                DataTable table = dataLayer.Getbulkfromdb("ValidateUser", parameters);

                if (table.Rows.Count > 0)
                {
                    return Ok("Login successful.");
                }
                else
                {
                    return Unauthorized("Invalid username or password.");
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error validating user: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpPost]
        [ActionName("AddUser")]
        public IActionResult AddUser(string userName, string userPassword, string userType )
        {
            try
            {
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                   
                    new SqlParameter("@user_name", SqlDbType.VarChar, 50) { Value = userName },
                    new SqlParameter("@user_password", SqlDbType.VarChar, 50) { Value = userPassword },
                    new SqlParameter("@user_type", SqlDbType.VarChar, 50) { Value = userType },
                    new SqlParameter("@user_status", SqlDbType.VarChar, 50) { Value = "Active" },
                    new SqlParameter("@user_registered_date", SqlDbType.Date) { Value = System.DateTime.Now }
                };

                int rowsAffected = dataLayer.ExecuteSp_transaction("InsertUser", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("User added successfully.");
                }
                else
                {
                    return BadRequest("Failed to add user.");
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error adding user: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpPut]
        [ActionName("EditUser")]
        public IActionResult EditUser(int userId, string userName, string userPassword, string userType, string userStatus)
        {
            try
            {
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter("@user_id", SqlDbType.Int) { Value = userId },
                    new SqlParameter("@user_name", SqlDbType.VarChar, 50) { Value = userName },
                    new SqlParameter("@user_password", SqlDbType.VarChar, 50) { Value = userPassword },
                    new SqlParameter("@user_type", SqlDbType.VarChar, 50) { Value = userType },
                    new SqlParameter("@user_status", SqlDbType.VarChar, 50) { Value = userStatus }
                };

                int rowsAffected = dataLayer.ExecuteSp_transaction("UpdateUser", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("User updated successfully.");
                }
                else
                {
                    return BadRequest("Failed to update user.");
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error updating user: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpGet]
        [ActionName("GetUsers")]
        public IActionResult GetUsers()
        {
            try
            {
                DataTable table = dataLayer.Getfromdb("GetUsers");

                if (table.Rows.Count > 0)
                {
                    string JSONresult = Utils.JsonHelper.DataTableToJsonObj(table);
                    return Ok(new { data = JSONresult });
                }
                else
                {
                    return NotFound("No users found.");
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error getting users: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpDelete]
        [ActionName("DeleteUser/{userId}")]
        public IActionResult DeleteUser(int userId)
        {
            try
            {
               List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter("@user_id", SqlDbType.Int) { Value = userId }
                };

                int rowsAffected = dataLayer.ExecuteSp_transaction("DeleteUser", parameters);

                if (rowsAffected > 0)
                {
                    return Ok("User deleted successfully.");
                }
                else
                {
                    return NotFound("User not found.");
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError("Error deleting user: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
