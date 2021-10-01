
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailPengaduan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailPengaduanRow))]
    public class DetailPengaduanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailPengaduan/DetailPengaduanIndex.cshtml");
        }
    }
}