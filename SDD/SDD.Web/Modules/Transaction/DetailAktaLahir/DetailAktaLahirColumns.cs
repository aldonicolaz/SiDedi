
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailAktaLahir")]
    [BasedOnRow(typeof(Entities.DetailAktaLahirRow), CheckNames = true)]
    public class DetailAktaLahirColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDetailAktaLahir { get; set; }
        //public String IdAktaLahirNamaBayi { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaSaksi { get; set; }
        [Width(300)]
        public DateTime TglLahirSaksi { get; set; }
        [Width(300)]
        public String PekerjaanSaksi { get; set; }
        [Width(300)]
        public String NikSaksi { get; set; }
        [Width(300)]
        public String Desc { get; set; }
    }
}