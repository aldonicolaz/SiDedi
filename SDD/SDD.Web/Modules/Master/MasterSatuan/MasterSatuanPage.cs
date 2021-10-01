
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterSatuan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterSatuanRow))]
    public class MasterSatuanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterSatuan/MasterSatuanIndex.cshtml");
        }
    }
}