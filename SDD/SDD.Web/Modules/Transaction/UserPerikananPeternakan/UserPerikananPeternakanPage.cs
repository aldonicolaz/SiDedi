
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/UserPerikananPeternakan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserPerikananPeternakanRow))]
    public class UserPerikananPeternakanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/UserPerikananPeternakan/UserPerikananPeternakanIndex.cshtml");
        }
    }
}