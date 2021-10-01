
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/VChartPenghasilanDesa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VChartPenghasilanDesaRow))]
    public class VChartPenghasilanDesaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/VChartPenghasilanDesa/VChartPenghasilanDesaIndex.cshtml");
        }
    }
}