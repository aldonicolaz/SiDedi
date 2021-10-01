
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/VChartByAllPekerjaan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VChartByAllPekerjaanRow))]
    public class VChartByAllPekerjaanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/VChartByAllPekerjaan/VChartByAllPekerjaanIndex.cshtml");
        }
    }
}