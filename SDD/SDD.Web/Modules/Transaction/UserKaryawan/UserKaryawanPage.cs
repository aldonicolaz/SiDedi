
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/UserKaryawan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserKaryawanRow))]
    public class UserKaryawanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/UserKaryawan/UserKaryawanIndex.cshtml");
        }
    }
}