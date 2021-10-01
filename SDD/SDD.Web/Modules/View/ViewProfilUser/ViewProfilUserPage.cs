
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/ViewProfilUser"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewProfilUserRow))]
    public class ViewProfilUserController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/ViewProfilUser/ViewProfilUserIndex.cshtml");
        }
    }
}