
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.UserKaryawan")]
    [BasedOnRow(typeof(Entities.UserKaryawanRow), CheckNames = true)]
    public class UserKaryawanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdUserKaryawan { get; set; }
        //public Int32 IdUser { get; set; }
        [Width(300)]
        public GetTypePerusahaan TypePerusahaan { get; set; }
        [EditLink]
        [StatusKaryawan]
        [Width(300)]
        public String StatusKaryawan { get; set; }
        [Width(300)]
        public Decimal RatarataPenghasilan { get; set; }
        [Width(300)]
        public String NamaperusahaanUsaha { get; set; }
        [Width(300)]
        public String AlamatPerusahanUsaha { get; set; }
        [Width(300)]
        public String Desc { get; set; }
        [Width(300)]
        public String IduserDisplayName { get; set; }
    }
}