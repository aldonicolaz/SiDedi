
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/Banner"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BannerRow))]
    public class BannerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/Banner/BannerIndex.cshtml");
        }
    }
}