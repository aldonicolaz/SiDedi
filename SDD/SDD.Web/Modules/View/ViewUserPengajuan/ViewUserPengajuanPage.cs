
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/ViewUserPengajuan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewUserPengajuanRow))]
    public class ViewUserPengajuanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/ViewUserPengajuan/ViewUserPengajuanIndex.cshtml");
        }
    }
}