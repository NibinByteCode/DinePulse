using Microsoft.AspNetCore.Mvc;

namespace DinePulse_API.Controllers.CustomerWebsiteControllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
