
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailKapalNelayan")]
    [BasedOnRow(typeof(Entities.DetailKapalNelayanRow), CheckNames = true)]
    public class DetailKapalNelayanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdKapalNelayan { get; set; }
       // public Int32 IdUserNelayan { get; set; }
       [Width(200)]
        public GetStatusKapal StatusKapal { get; set; }
        [EditLink]
        [TypeKapal]
        [Width(300)]
        public String TypeKapal { get; set; }
        [Width(300)]
        public String LokasiSandarKapal { get; set; }
        [Width(200)]
        public Decimal HasilBulanan { get; set; }
    }
}