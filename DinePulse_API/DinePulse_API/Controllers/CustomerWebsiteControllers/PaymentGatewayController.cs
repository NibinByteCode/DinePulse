using DinePulse_API.Models;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Forwarding;

namespace DinePulse_API.Controllers.CustomerWebsiteControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PaymentGatewayController : Controller
    {

        public PaymentGatewayController()
        {

            StripeConfiguration.ApiKey = "sk_test_51PlO8JGXMgxB8JculPNhhXaCY26lXdpsxA8GATjjmwk8JPdOIKo1Fh64AnhbEmgj4wySORvqzjrNWWqadGVQgOAa006uFwdoA4";
        }

        [HttpPost]
        [ActionName("MakePayment")]
        public IActionResult CreatePayment([FromBody] PaymentRequestModel paymentrequest)
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = paymentrequest.Amount,
                Currency = "cad",
                PaymentMethodTypes = new List<string> { "card" },
            };
            var service = new PaymentIntentService();
            var paymentIntent = service.Create(options);

            return Ok(new { clientSecret = paymentIntent.ClientSecret });
        }
    }
}

