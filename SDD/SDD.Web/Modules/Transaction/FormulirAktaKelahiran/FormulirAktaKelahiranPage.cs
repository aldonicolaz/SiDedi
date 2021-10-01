
namespace SDD.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/FormulirAktaKelahiran"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FormulirAktaKelahiranRow))]
    public class FormulirAktaKelahiranController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/FormulirAktaKelahiran/FormulirAktaKelahiranIndex.cshtml");
        }
    }
}