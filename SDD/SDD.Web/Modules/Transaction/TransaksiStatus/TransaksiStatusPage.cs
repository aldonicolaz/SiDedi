
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/TransaksiStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransaksiStatusRow))]
    public class TransaksiStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/TransaksiStatus/TransaksiStatusIndex.cshtml");
        }
    }
}