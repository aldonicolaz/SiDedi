
namespace SDD.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {

            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromSeconds(1),
               SDD.View.Entities.VChartPenghasilanDesaRow.Fields.GenerationKey, () =>
               {
                   var model = new DashboardPageModel();

                 
                   var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
                  

                   using (var connection = SqlConnections.NewFor<SDD.View.Entities.VChartPenghasilanDesaRow>())
                   {
                       model.TotalPenghasilanDesa = connection.List<SDD.View.Entities.VChartPenghasilanDesaRow>();
                   }
                   using (var connection = SqlConnections.NewFor<SDD.View.Entities.VChartByAllPekerjaanRow>())
                   {
                       model.TotalPenghasilanPekerjaan = connection.List<SDD.View.Entities.VChartByAllPekerjaanRow>();
                   }
                   return model;
               });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
