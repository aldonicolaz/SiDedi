
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailUserPeternakanPerikanan")]
    [BasedOnRow(typeof(Entities.DetailUserPeternakanPerikananRow), CheckNames = true)]
    public class DetailUserPeternakanPerikananColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDetailPeternakan { get; set; }
        [Width(300)]
        public String IdSatuanPendukungNamaSatuan { get; set; }
        [EditLink]
        [Width(300)]
        public String AlatBahanPendukung { get; set; }
        [Width(300)]
        public Int32 QuantityPendukung { get; set; }
        [Width(300)]
        public Decimal NominalPendukung { get; set; }
        [Width(300)]
        public Decimal TotalNominalPendukung { get; set; }
        [Width(300)]
        public String Desc { get; set; }
        // public Int32 IdUserPerikanan { get; set; }
    }
}