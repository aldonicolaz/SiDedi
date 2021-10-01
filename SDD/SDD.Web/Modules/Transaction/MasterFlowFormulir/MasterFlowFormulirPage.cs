
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/MasterFlowFormulir"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterFlowFormulirRow))]
    public class MasterFlowFormulirController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/MasterFlowFormulir/MasterFlowFormulirIndex.cshtml");
        }
    }
}