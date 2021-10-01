
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterVersion"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterVersionRow))]
    public class MasterVersionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterVersion/MasterVersionIndex.cshtml");
        }
    }
}