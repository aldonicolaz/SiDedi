
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/FcmMessageUser"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FcmMessageUserRow))]
    public class FcmMessageUserController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/FcmMessageUser/FcmMessageUserIndex.cshtml");
        }
    }
}