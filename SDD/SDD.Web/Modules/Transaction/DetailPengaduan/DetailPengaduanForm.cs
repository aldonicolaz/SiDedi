
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailPengaduan")]
    [BasedOnRow(typeof(Entities.DetailPengaduanRow), CheckNames = true)]
    public class DetailPengaduanForm
    {

        //public Int32 IdPengaduan { get; set; }
        //public Int32 IdUserPenanggap { get; set; }
        [TextAreaEditor(Rows = 6),DisplayName("Perihal Tanggapan")]
        public String Tanggapan { get; set; }
        //public DateTime Timestamp { get; set; }
    }
}