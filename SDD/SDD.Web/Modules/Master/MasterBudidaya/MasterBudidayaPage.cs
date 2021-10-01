
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterBudidaya"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterBudidayaRow))]
    public class MasterBudidayaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterBudidaya/MasterBudidayaIndex.cshtml");
        }
    }
}