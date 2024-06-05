using DinePulse_API.Database;
using DinePulse_API.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace DinePulse_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TableController : ControllerBase
    {

        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;
        public TableController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
        }
        [HttpGet]
        [ActionName("GetAllTables")]
        public IActionResult GetAllTables()
        {
            try
            {
                DataTable table = new DataTable();
                table = dataLayer.Getfromdb("getalltables");
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

    }
}
