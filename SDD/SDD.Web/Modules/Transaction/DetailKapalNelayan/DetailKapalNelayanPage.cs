
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/DetailKapalNelayan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailKapalNelayanRow))]
    public class DetailKapalNelayanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/DetailKapalNelayan/DetailKapalNelayanIndex.cshtml");
        }
    }
}