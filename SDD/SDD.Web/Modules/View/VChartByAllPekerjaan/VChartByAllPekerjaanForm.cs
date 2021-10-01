
namespace SDD.View.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("View.VChartByAllPekerjaan")]
    [BasedOnRow(typeof(Entities.VChartByAllPekerjaanRow), CheckNames = true)]
    public class VChartByAllPekerjaanForm
    {
        public Int32 CountTransaksi { get; set; }
        public Decimal TotalPenghasilan { get; set; }
        public Int32 IdPekerjaan { get; set; }
        public String NamaPekerjaan { get; set; }
    }
}