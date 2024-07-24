using Microsoft.AspNetCore.Mvc;

namespace DinePulse_API.Controllers.CustomerWebsiteControllers
{
    public class TableReservationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
