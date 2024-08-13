using DinePulse_API.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Stripe.Climate;

namespace DinePulse_API.Controllers.AdminControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class KitchenController : ControllerBase
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;
        public KitchenController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
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
    }
}
