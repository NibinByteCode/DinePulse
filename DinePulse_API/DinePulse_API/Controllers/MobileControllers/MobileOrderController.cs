using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using DinePulse_API.Database;
using Microsoft.Extensions.Configuration;
using DinePulse_API.Models;
using System.Text.Json;

namespace DinePulse_API.Controllers.MobileControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MobileOrderController : Controller
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;

        public MobileOrderController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrderRequestModel orderRequest)
        {
            try
            {
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter("@customerId", orderRequest.CustomerId),
                    new SqlParameter("@tableId", orderRequest.TableId),
                    new SqlParameter("@orderTypeId", orderRequest.OrderTypeId),
                    new SqlParameter("@statusId", orderRequest.StatusId),
                    new SqlParameter("@orderDetails", JsonSerializer.Serialize(orderRequest.OrderDetails))
                };
                int result = await dataLayer.ExecuteNonQueryAsync("Order_InsertDetails", parameters);
                if (result > 0)
                {
                    return Ok(new { message = "Order created successfully" });
                }
                else
                {
                    return StatusCode(500, new { message = "Failed to create order" });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Failed to create order."+ex.Message });
            }
        }
    }
}
