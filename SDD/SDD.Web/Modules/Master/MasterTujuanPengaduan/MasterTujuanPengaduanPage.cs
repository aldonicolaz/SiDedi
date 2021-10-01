
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterTujuanPengaduan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterTujuanPengaduanRow))]
    public class MasterTujuanPengaduanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterTujuanPengaduan/MasterTujuanPengaduanIndex.cshtml");
        }
    }
}