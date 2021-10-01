
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/FormulirKk"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FormulirKkRow))]
    public class FormulirKkController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/FormulirKk/FormulirKkIndex.cshtml");
        }
    }
}