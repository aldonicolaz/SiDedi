
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailUserPeternakanPerikanan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailUserPeternakanPerikananRow))]
    public class DetailUserPeternakanPerikananController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailUserPeternakanPerikanan/DetailUserPeternakanPerikananIndex.cshtml");
        }
    }
}