
namespace SDD.View.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("View/ViewTransaksiFormulir"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewTransaksiFormulirRow))]
    public class ViewTransaksiFormulirController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/View/ViewTransaksiFormulir/ViewTransaksiFormulirIndex.cshtml");
        }
    }
}