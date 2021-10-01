
namespace SDD.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MasterForum"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterForumRow))]
    public class MasterForumController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MasterForum/MasterForumIndex.cshtml");
        }
    }
}