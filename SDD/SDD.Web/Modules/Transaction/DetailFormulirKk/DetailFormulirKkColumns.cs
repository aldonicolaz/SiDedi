
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailFormulirKk")]
    [BasedOnRow(typeof(Entities.DetailFormulirKkRow), CheckNames = true)]
    public class DetailFormulirKkColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDetailKk { get; set; }
        //public String IdFormulirKkAlasanPemohon { get; set; }
        //public String IdMasterHubNamaHubungan { get; set; }
        [EditLink]
        public String Nik { get; set; }
        public String NamaLengkap { get; set; }
    }
}