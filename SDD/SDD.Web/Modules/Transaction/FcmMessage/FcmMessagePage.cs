
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/FcmMessage"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FcmMessageRow))]
    public class FcmMessageController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/FcmMessage/FcmMessageIndex.cshtml");
        }
    }
}