
namespace SDD.View.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("View.ViewAllPenghasilan")]
    [BasedOnRow(typeof(Entities.ViewAllPenghasilanRow), CheckNames = true)]
    public class ViewAllPenghasilanForm
    {
        public Int32 UserId { get; set; }
        public String DisplayName { get; set; }
        public String Username { get; set; }
        public String Email { get; set; }
        public String Address { get; set; }
        public Int32 IdHubungan { get; set; }
        public String NoKtp { get; set; }
        public String NoKk { get; set; }
        public String PhoneNumber { get; set; }
        public String WaNumber { get; set; }
        public String JenisKelamin { get; set; }
        public DateTime TanggalLahir { get; set; }
        public Int64 IdDesa { get; set; }
        public String NamaDesa { get; set; }
        public Int32 IdKecamatan { get; set; }
        public String NamaKecamatan { get; set; }
        public Int32 IdKabupaten { get; set; }
        public String NamaKabupaten { get; set; }
        public Int32 IdPropinsi { get; set; }
        public String NamaPropinsi { get; set; }
        public Decimal TotalPenghasilanPeternakan { get; set; }
        public Decimal TotalPenghasilanPertanian { get; set; }
        public Decimal TotalPenghasilanNelayan { get; set; }
        public Decimal TotalPenghasilanKaryawan { get; set; }
        public Decimal TotalPenghasilanPerdagangan { get; set; }
        public Decimal TotalPenghasilan { get; set; }
    }
}