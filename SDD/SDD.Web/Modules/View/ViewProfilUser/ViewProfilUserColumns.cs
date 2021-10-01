
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.ViewProfilUser")]
    [BasedOnRow(typeof(Entities.ViewProfilUserRow), CheckNames = true)]
    public class ViewProfilUserColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserId { get; set; }
        [EditLink]
        public String DisplayName { get; set; }
        public String Username { get; set; }
        public String Email { get; set; }
        public String Address { get; set; }
        public Int32 IdHubungan { get; set; }
        public String NoKtp { get; set; }
        public String NoKk { get; set; }
        public String PhoneNumber { get; set; }
        public String WaNumber { get; set; }
        public Int32 JenisKelamin { get; set; }
        public DateTime TanggalLahir { get; set; }
        public Int64 IdDesa { get; set; }
        public String Pendidikan { get; set; }
        public Int32 IdKecamatan { get; set; }
        public String NamaDesa { get; set; }
        public String LogoDesa { get; set; }
        public String NoKodeDesa { get; set; }
        public String NamaKecamatan { get; set; }
        public Int32 IdKabupaten { get; set; }
        public String NoKodeKecamatan { get; set; }
        public String KodePos { get; set; }
        public String NoKodeKabupaten { get; set; }
        public Int32 IdPropinsi { get; set; }
        public String NamaKabupaten { get; set; }
        public String LogoKabupaten { get; set; }
        public String NamaPropinsi { get; set; }
        public String IbuKotaPropinsi { get; set; }
        public String LogoPropinsi { get; set; }
        public String NoKodePropinsi { get; set; }
        public String UserImage { get; set; }
    }
}