using DinePulse_API.Database;
using DinePulse_API.Hubs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using Stripe.Climate;
using System.Data.SqlClient;

namespace DinePulse_API.Controllers.AdminControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class KitchenController : ControllerBase
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;
        private readonly IHubContext<AdminNotificationHub> _hubContext;
        public KitchenController(IConfiguration iconfiguration, IHubContext<AdminNotificationHub> hubContext)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
            _hubContext = hubContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetTodayOrders()
        {
            var jsonResult = await dataLayer.ExecuteJsonResultAsync("GetOrderDetails");

            if (!string.IsNullOrEmpty(jsonResult))
            {
                //var orders = JsonConvert.DeserializeObject<List<Order>>(jsonResult);
                return Ok(jsonResult); // Return the orders as a JSON response
            }
            else
            {
                return NotFound("No orders found for today.");
            }
        }


        [HttpPost]
        public async Task<IActionResult> UpdateOrderStatus(int orderId, string status)
        {
            var parameters = new List<SqlParameter>
            {
                new SqlParameter("@OrderId", orderId),
                new SqlParameter("@Status", status)
            };

            var result = await dataLayer.ExecuteNonQueryAsync("Kitchen_UpdateOrderStatus", parameters);

            if (result > 0)
            {
                return Ok("Order status updated successfully.");
            }
            else
            {
                return BadRequest("Failed to update order status.");
            }
        }
    }
}
