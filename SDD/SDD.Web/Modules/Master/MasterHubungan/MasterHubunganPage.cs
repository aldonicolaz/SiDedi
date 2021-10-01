
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterHubungan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterHubunganRow))]
    public class MasterHubunganController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterHubungan/MasterHubunganIndex.cshtml");
        }
    }
}