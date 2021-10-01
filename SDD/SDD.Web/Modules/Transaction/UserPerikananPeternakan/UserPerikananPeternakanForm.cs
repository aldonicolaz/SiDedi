
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.UserPerikananPeternakan")]
    [BasedOnRow(typeof(Entities.UserPerikananPeternakanRow), CheckNames = true)]
    public class UserPerikananPeternakanForm
    {
        //public Int32 IdUser { get; set; }
        [LookupEditor("Master.MasterBudidaya")]
        public Int32 Option1 { get; set; }
        
        [LookupEditor(typeof(SDD.Transaction.Lookups.LookupBudidaya), CascadeFrom = "Option1", CascadeField = "IdMasterBudidaya")]
        public Int32 IdHasilBudidaya { get; set; }
        public Decimal TotalBibit { get; set; }
        public Decimal LuasLahan { get; set; }
        public Int32 JumlahPekerja { get; set; }
        public Int32 PeriodePanen { get; set; }
        public Decimal HasilPanen { get; set; }
        public Decimal NominalHasilPanen { get; set; }
        [Category("Detail Peternakan")]
        [DetailUserPeternakanPerikananGrid]
        public List<Entities.DetailUserPeternakanPerikananRow> DetailPeternakan { get; set; }
    }
}