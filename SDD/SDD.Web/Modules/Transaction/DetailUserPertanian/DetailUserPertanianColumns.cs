
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailUserPertanian")]
    [BasedOnRow(typeof(Entities.DetailUserPertanianRow), CheckNames = true)]
    public class DetailUserPertanianColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDetailPertanian { get; set; }
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
       // public Int32 IdUserPertanian { get; set; }
    }
}