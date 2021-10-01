
namespace SDD.View.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("View.ViewUserPenghasilan")]
    [BasedOnRow(typeof(Entities.ViewUserPenghasilanRow), CheckNames = true)]
    public class ViewUserPenghasilanForm
    {
        [ReadOnly(true)]
        public String DisplayName { get; set; }
        [ReadOnly(true)]
        public String Email { get; set; }
        //public String NoKtp { get; set; }
        //public String NoKk { get; set; }
        //public String PhoneNumber { get; set; }
        [ReadOnly(true)]
        public String WaNumber { get; set; }
        [ReadOnly(true)]
        public Decimal TotalHasil { get; set; }
        // public Int32 IdPekerjaan { get; set; }
        [ReadOnly(true)]
        public String NamaPekerjaan { get; set; }
        //public Int64 IdDesa { get; set; }
        [ReadOnly(true)]
        public String NamaDesa { get; set; }
        // public Int32 IdKecamatan { get; set; }
        [ReadOnly(true)]
        public String NamaKecamatan { get; set; }
        // public Int32 IdKabupaten { get; set; }
        [ReadOnly(true)]
        public String NamaKabupaten { get; set; }
        // public Int32 IdPropinsi { get; set; }
        [ReadOnly(true)]
        public String NamaPropinsi { get; set; }
    }
}