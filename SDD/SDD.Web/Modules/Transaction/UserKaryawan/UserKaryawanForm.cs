
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.UserKaryawan")]
    [BasedOnRow(typeof(Entities.UserKaryawanRow), CheckNames = true)]
    public class UserKaryawanForm
    {
        //public Int32 IdUser { get; set; }
        public GetTypePerusahaan TypePerusahaan { get; set; }
        [StatusKaryawan]
        public String StatusKaryawan { get; set; }
        public Decimal RatarataPenghasilan { get; set; }
        public String NamaperusahaanUsaha { get; set; }
        [TextAreaEditor(Rows =6)]
        public String AlamatPerusahanUsaha { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Desc { get; set; }

        [DefaultValue(3),Visible(false)]
        public Int32 IdPekerjaan { get; set; }
    }
}