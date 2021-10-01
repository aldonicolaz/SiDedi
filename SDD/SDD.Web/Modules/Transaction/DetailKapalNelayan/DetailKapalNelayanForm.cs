
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailKapalNelayan")]
    [BasedOnRow(typeof(Entities.DetailKapalNelayanRow), CheckNames = true)]
    public class DetailKapalNelayanForm
    {
       // public Int32 IdUserNelayan { get; set; }
        public GetStatusKapal StatusKapal { get; set; }
        [TypeKapal]
        public String TypeKapal { get; set; }
        [TextAreaEditor(Rows =6)]
        public String LokasiSandarKapal { get; set; }
        public Decimal HasilBulanan { get; set; }
    }
}