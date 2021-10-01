
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterPropinsi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterPropinsiRow))]
    public class MasterPropinsiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterPropinsi/MasterPropinsiIndex.cshtml");
        }
    }
}