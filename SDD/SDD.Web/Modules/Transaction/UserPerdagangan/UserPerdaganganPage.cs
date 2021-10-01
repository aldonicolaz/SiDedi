
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/UserPerdagangan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserPerdaganganRow))]
    public class UserPerdaganganController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/UserPerdagangan/UserPerdaganganIndex.cshtml");
        }
    }
}