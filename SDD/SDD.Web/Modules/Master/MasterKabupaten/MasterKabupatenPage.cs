
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterKabupaten"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterKabupatenRow))]
    public class MasterKabupatenController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterKabupaten/MasterKabupatenIndex.cshtml");
        }
    }
}