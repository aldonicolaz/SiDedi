
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ForumNew"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ForumNewRow))]
    public class ForumNewController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ForumNew/ForumNewIndex.cshtml");
        }
    }
}