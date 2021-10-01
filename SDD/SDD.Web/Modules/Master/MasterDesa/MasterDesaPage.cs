
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterDesa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterDesaRow))]
    public class MasterDesaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterDesa/MasterDesaIndex.cshtml");
        }
    }
}