
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/UserNelayan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserNelayanRow))]
    public class UserNelayanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/UserNelayan/UserNelayanIndex.cshtml");
        }
    }
}