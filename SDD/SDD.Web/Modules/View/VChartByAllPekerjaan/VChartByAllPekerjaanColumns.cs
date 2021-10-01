
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.VChartByAllPekerjaan")]
    [BasedOnRow(typeof(Entities.VChartByAllPekerjaanRow), CheckNames = true)]
    public class VChartByAllPekerjaanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 IdNumber { get; set; }
        public Int32 CountTransaksi { get; set; }
        public Decimal TotalPenghasilan { get; set; }
        public Int32 IdPekerjaan { get; set; }
        [EditLink]
        public String NamaPekerjaan { get; set; }
    }
}