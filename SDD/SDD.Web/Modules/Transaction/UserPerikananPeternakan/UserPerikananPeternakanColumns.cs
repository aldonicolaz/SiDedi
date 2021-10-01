
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.UserPerikananPeternakan")]
    [BasedOnRow(typeof(Entities.UserPerikananPeternakanRow), CheckNames = true)]
    public class UserPerikananPeternakanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdUserPerikanan { get; set; }
        [Width(300)]
        public String IdUserDisplayName { get; set; }
        [Width(300)]
        public String IdHasilBudidayaNamaHasil { get; set; }
        [Width(300)]
        public Decimal TotalBibit { get; set; }
        [Width(300)]
        public Decimal LuasLahan { get; set; }
        [Width(300)]
        public Int32 JumlahPekerja { get; set; }
        [Width(300)]
        public Int32 PeriodePanen { get; set; }
        [Width(300)]
        public Decimal HasilPanen { get; set; }
        [Width(300)]
        public Decimal NominalHasilPanen { get; set; }
        [Visible(false)]
        public List<Entities.DetailUserPeternakanPerikananRow> DetailPeternakan { get; set; }
    }
}