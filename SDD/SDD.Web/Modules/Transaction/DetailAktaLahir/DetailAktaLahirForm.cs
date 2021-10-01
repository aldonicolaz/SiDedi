
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailAktaLahir")]
    [BasedOnRow(typeof(Entities.DetailAktaLahirRow), CheckNames = true)]
    public class DetailAktaLahirForm
    {
       // public Int32 IdAktaLahir { get; set; }
        public String NamaSaksi { get; set; }
        public DateTime TglLahirSaksi { get; set; }
        public String PekerjaanSaksi { get; set; }
        public String NikSaksi { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
    }
}