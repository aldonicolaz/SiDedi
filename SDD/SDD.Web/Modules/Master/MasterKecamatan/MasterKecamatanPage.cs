
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterKecamatan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterKecamatanRow))]
    public class MasterKecamatanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterKecamatan/MasterKecamatanIndex.cshtml");
        }
    }
}