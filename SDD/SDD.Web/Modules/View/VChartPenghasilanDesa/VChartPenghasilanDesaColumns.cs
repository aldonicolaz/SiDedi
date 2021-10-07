
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.VChartPenghasilanDesa")]
    [BasedOnRow(typeof(Entities.VChartPenghasilanDesaRow), CheckNames = true)]
    public class VChartPenghasilanDesaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int64 IdNumber { get; set; }
        [LookupEditor("Master.MasterDesa"), Visible(false), QuickFilter]
        public Int64 IdDesa { get; set; }
       
       
        [EditLink]
        [Width(400)]
        public String Namadesa { get; set; }
        [Width(400)]
        public Decimal TotalPenghasilan { get; set; }
    }
}