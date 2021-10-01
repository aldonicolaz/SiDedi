
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailAktaLahir"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailAktaLahirRow))]
    public class DetailAktaLahirController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailAktaLahir/DetailAktaLahirIndex.cshtml");
        }
    }
}