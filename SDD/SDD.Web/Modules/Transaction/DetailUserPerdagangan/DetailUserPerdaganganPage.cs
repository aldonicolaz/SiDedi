
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailUserPerdagangan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailUserPerdaganganRow))]
    public class DetailUserPerdaganganController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailUserPerdagangan/DetailUserPerdaganganIndex.cshtml");
        }
    }
}