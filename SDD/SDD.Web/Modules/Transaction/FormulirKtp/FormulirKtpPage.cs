
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/FormulirKtp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FormulirKtpRow))]
    public class FormulirKtpController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/FormulirKtp/FormulirKtpIndex.cshtml");
        }
    }
}