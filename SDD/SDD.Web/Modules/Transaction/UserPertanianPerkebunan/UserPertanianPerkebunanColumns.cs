
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.UserPertanianPerkebunan")]
    [BasedOnRow(typeof(Entities.UserPertanianPerkebunanRow), CheckNames = true)]
    public class UserPertanianPerkebunanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdUserPertanian { get; set; }
        [Width(300)]
        public String IdUserDisplayName { get; set; }
        [Width(300)]
        public String IdHasilBudidayaNamaHasil { get; set; }
        [Width(200)]
        public Decimal LuasLahan { get; set; }
        [Width(200)]
        public Int32 JumlahPekerja { get; set; }
        [Width(200)]
        public Int32 PeriodePanen { get; set; }
        [Width(300)]
        public Decimal HasilPanen { get; set; }
        [Width(300)]
        public Decimal NominalHasilPanen { get; set; }
        [Visible(false)]
        public List<Entities.DetailUserPertanianRow> DetailPertanian { get; set; }
    }
}