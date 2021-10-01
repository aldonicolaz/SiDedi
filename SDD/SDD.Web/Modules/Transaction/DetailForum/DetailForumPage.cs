
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailForum"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailForumRow))]
    public class DetailForumController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailForum/DetailForumIndex.cshtml");
        }
    }
}