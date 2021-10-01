
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/ViewAllPengajuan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewAllPengajuanRow))]
    public class ViewAllPengajuanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/ViewAllPengajuan/ViewAllPengajuanIndex.cshtml");
        }
    }
}