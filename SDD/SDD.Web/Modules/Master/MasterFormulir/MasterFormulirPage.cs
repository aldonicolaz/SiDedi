
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterFormulir"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterFormulirRow))]
    public class MasterFormulirController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterFormulir/MasterFormulirIndex.cshtml");
        }
    }
}