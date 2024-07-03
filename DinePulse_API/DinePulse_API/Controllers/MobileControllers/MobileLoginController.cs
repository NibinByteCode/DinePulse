using DinePulse_API.Database;
using DinePulse_API.Models;
using DinePulse_API.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace DinePulse_API.Controllers.MobileControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MobileLoginController : Controller
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;

        public MobileLoginController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
        }

        [HttpPost]
        [ActionName("LoginUser")]
        public IActionResult Login([FromBody] LoginUserModel loginRequest)
        {
            try
            {
                List<SqlParameter> parameters = new List<SqlParameter>
        {
            new SqlParameter("@user_name", SqlDbType.VarChar, 50) { Value = loginRequest.userName },
            new SqlParameter("@user_password", SqlDbType.VarChar, 50) { Value = loginRequest.userPassword }
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

    }
}
