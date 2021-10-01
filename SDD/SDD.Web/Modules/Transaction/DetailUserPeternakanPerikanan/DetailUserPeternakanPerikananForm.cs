
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailUserPeternakanPerikanan")]
    [BasedOnRow(typeof(Entities.DetailUserPeternakanPerikananRow), CheckNames = true)]
    public class DetailUserPeternakanPerikananForm
    {
        [LookupEditor("Master.MasterSatuan")]
        public Int32 IdSatuanPendukung { get; set; }
        public String AlatBahanPendukung { get; set; }
        public Int32 QuantityPendukung { get; set; }
        public Decimal NominalPendukung { get; set; }
        public Decimal TotalNominalPendukung { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
       // public Int32 IdUserPerikanan { get; set; }
    }
}