
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailFormulirKk"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailFormulirKkRow))]
    public class DetailFormulirKkController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailFormulirKk/DetailFormulirKkIndex.cshtml");
        }
    }
}