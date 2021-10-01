
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/ViewUserPenghasilan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewUserPenghasilanRow))]
    public class ViewUserPenghasilanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/ViewUserPenghasilan/ViewUserPenghasilanIndex.cshtml");
        }
    }
}