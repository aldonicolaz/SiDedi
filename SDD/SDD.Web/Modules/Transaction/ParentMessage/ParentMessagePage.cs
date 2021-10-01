
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ParentMessage"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ParentMessageRow))]
    public class ParentMessageController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ParentMessage/ParentMessageIndex.cshtml");
        }
    }
}