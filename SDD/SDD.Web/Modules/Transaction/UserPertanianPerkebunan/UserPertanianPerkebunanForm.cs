
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.UserPertanianPerkebunan")]
    [BasedOnRow(typeof(Entities.UserPertanianPerkebunanRow), CheckNames = true)]
    public class UserPertanianPerkebunanForm
    {
        //public Int32 IdUser { get; set; }
        [LookupEditor("Master.MasterBudidaya")]
        public Int32 Option1 { get; set; }

        [LookupEditor(typeof(SDD.Transaction.Lookups.LookupBudidaya), CascadeFrom = "Option1", CascadeField = "IdMasterBudidaya")]
        public Int32 IdHasilBudidaya { get; set; }
        public Decimal LuasLahan { get; set; }
        public Int32 JumlahPekerja { get; set; }
        public Int32 PeriodePanen { get; set; }
        public Decimal HasilPanen { get; set; }
        public Decimal NominalHasilPanen { get; set; }

        [Category("Detail Pertanian")]
        [DetailUserPertanianGrid]
        public List<Entities.DetailUserPertanianRow> DetailPertanian { get; set; }
    }
}