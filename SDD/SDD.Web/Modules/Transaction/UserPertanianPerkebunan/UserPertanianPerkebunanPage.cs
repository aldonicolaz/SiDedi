
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/UserPertanianPerkebunan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserPertanianPerkebunanRow))]
    public class UserPertanianPerkebunanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/UserPertanianPerkebunan/UserPertanianPerkebunanIndex.cshtml");
        }
    }
}