
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/Forum"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ForumRow))]
    public class ForumController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/Forum/ForumIndex.cshtml");
        }
    }
}