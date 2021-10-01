
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/ViewMaasterForm"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewMaasterFormRow))]
    public class ViewMaasterFormController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/ViewMaasterForm/ViewMaasterFormIndex.cshtml");
        }
    }
}