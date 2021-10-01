
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailFlowForm"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailFlowFormRow))]
    public class DetailFlowFormController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailFlowForm/DetailFlowFormIndex.cshtml");
        }
    }
}