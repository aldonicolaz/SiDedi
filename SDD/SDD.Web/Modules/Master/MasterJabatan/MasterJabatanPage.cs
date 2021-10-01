
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterJabatan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterJabatanRow))]
    public class MasterJabatanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterJabatan/MasterJabatanIndex.cshtml");
        }
    }
}