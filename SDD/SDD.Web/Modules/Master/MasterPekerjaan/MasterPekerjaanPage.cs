
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterPekerjaan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterPekerjaanRow))]
    public class MasterPekerjaanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterPekerjaan/MasterPekerjaanIndex.cshtml");
        }
    }
}