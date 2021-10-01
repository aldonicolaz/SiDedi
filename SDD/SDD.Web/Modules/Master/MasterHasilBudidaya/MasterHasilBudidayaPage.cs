
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterHasilBudidaya"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterHasilBudidayaRow))]
    public class MasterHasilBudidayaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterHasilBudidaya/MasterHasilBudidayaIndex.cshtml");
        }
    }
}