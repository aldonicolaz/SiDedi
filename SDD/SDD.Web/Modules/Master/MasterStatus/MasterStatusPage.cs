
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterStatusRow))]
    public class MasterStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterStatus/MasterStatusIndex.cshtml");
        }
    }
}