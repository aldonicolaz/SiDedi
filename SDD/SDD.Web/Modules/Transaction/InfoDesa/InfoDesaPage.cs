
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/InfoDesa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InfoDesaRow))]
    public class InfoDesaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/InfoDesa/InfoDesaIndex.cshtml");
        }
    }
}