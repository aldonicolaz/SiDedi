
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/ViewAllPenghasilan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewAllPenghasilanRow))]
    public class ViewAllPenghasilanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/ViewAllPenghasilan/ViewAllPenghasilanIndex.cshtml");
        }
    }
}