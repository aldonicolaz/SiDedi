
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/Pengaduan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PengaduanRow))]
    public class PengaduanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/Pengaduan/PengaduanIndex.cshtml");
        }
    }
}