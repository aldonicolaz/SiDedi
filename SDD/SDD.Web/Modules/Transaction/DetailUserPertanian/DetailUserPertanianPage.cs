
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailUserPertanian"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailUserPertanianRow))]
    public class DetailUserPertanianController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailUserPertanian/DetailUserPertanianIndex.cshtml");
        }
    }
}