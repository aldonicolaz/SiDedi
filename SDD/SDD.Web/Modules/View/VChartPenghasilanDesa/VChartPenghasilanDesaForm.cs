
namespace SDD.View.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("View.VChartPenghasilanDesa")]
    [BasedOnRow(typeof(Entities.VChartPenghasilanDesaRow), CheckNames = true)]
    public class VChartPenghasilanDesaForm
    {
        //public Int32 CountTransaksi { get; set; }
        public String Namadesa { get; set; }
        public Decimal TotalPenghasilan { get; set; }
       
    }
}