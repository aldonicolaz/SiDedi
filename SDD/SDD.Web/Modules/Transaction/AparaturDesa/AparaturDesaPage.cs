
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/AparaturDesa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AparaturDesaRow))]
    public class AparaturDesaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/AparaturDesa/AparaturDesaIndex.cshtml");
        }
    }
}