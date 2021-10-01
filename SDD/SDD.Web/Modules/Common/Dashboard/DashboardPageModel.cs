
using System.Collections.Generic;

namespace SDD.Common
{
    public class DashboardPageModel
    {
        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }

        public List<View.Entities.VChartPenghasilanDesaRow> TotalPenghasilanDesa { get; set; }
        public List<View.Entities.VChartByAllPekerjaanRow> TotalPenghasilanPekerjaan { get; set; }
    }
}