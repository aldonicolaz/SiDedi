
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[ViewProfilUser]")]
    [DisplayName("View Profil User"), InstanceName("View Profil User")]
    [ReadPermission("View:ViewProfilUser")]
    [ModifyPermission("View:ViewProfilUser")]
    [LookupScript(Permission ="*")]
    public sealed class ViewProfilUserRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull, QuickSearch]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Username"), Size(100), NotNull]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Address"), Size(255)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Id Hubungan "), Column("IdHubungan ")]
        public Int32? IdHubungan
        {
            get { return Fields.IdHubungan[this]; }
            set { Fields.IdHubungan[this] = value; }
        }

        [DisplayName("No Ktp"), Column("NoKTP"), Size(255)]
        public String NoKtp
        {
            get { return Fields.NoKtp[this]; }
            set { Fields.NoKtp[this] = value; }
        }

        [DisplayName("No Kk"), Column("NoKK"), Size(255)]
        public String NoKk
        {
            get { return Fields.NoKk[this]; }
            set { Fields.NoKk[this] = value; }
        }

        [DisplayName("Phone Number"), Size(255)]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Wa Number"), Size(255)]
        public String WaNumber
        {
            get { return Fields.WaNumber[this]; }
            set { Fields.WaNumber[this] = value; }
        }

        [DisplayName("Jenis Kelamin")]
        public Int32? JenisKelamin
        {
            get { return Fields.JenisKelamin[this]; }
            set { Fields.JenisKelamin[this] = value; }
        }

        [DisplayName("Tanggal Lahir")]
        public DateTime? TanggalLahir
        {
            get { return Fields.TanggalLahir[this]; }
            set { Fields.TanggalLahir[this] = value; }
        }

        [DisplayName("Id Desa")]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Pendidikan"), Size(255)]
        public String Pendidikan
        {
            get { return Fields.Pendidikan[this]; }
            set { Fields.Pendidikan[this] = value; }
        }

        [DisplayName("Id Kecamatan")]
        public Int32? IdKecamatan
        {
            get { return Fields.IdKecamatan[this]; }
            set { Fields.IdKecamatan[this] = value; }
        }

        [DisplayName("Nama Desa"), Size(255)]
        public String NamaDesa
        {
            get { return Fields.NamaDesa[this]; }
            set { Fields.NamaDesa[this] = value; }
        }

        [DisplayName("Logo Desa"), Size(255)]
        public String LogoDesa
        {
            get { return Fields.LogoDesa[this]; }
            set { Fields.LogoDesa[this] = value; }
        }

        [DisplayName("No Kode Desa"), Size(255)]
        public String NoKodeDesa
        {
            get { return Fields.NoKodeDesa[this]; }
            set { Fields.NoKodeDesa[this] = value; }
        }

        [DisplayName("Nama Kecamatan"), Size(255)]
        public String NamaKecamatan
        {
            get { return Fields.NamaKecamatan[this]; }
            set { Fields.NamaKecamatan[this] = value; }
        }

        [DisplayName("Id Kabupaten"), NotNull]
        public Int32? IdKabupaten
        {
            get { return Fields.IdKabupaten[this]; }
            set { Fields.IdKabupaten[this] = value; }
        }

        [DisplayName("No Kode Kecamatan"), Size(255)]
        public String NoKodeKecamatan
        {
            get { return Fields.NoKodeKecamatan[this]; }
            set { Fields.NoKodeKecamatan[this] = value; }
        }

        [DisplayName("Kode Pos"), Size(255)]
        public String KodePos
        {
            get { return Fields.KodePos[this]; }
            set { Fields.KodePos[this] = value; }
        }

        [DisplayName("No Kode Kabupaten"), Size(255)]
        public String NoKodeKabupaten
        {
            get { return Fields.NoKodeKabupaten[this]; }
            set { Fields.NoKodeKabupaten[this] = value; }
        }

        [DisplayName("Id Propinsi")]
        public Int32? IdPropinsi
        {
            get { return Fields.IdPropinsi[this]; }
            set { Fields.IdPropinsi[this] = value; }
        }

        [DisplayName("Nama Kabupaten"), Size(255)]
        public String NamaKabupaten
        {
            get { return Fields.NamaKabupaten[this]; }
            set { Fields.NamaKabupaten[this] = value; }
        }

        [DisplayName("Logo Kabupaten"), Size(255)]
        public String LogoKabupaten
        {
            get { return Fields.LogoKabupaten[this]; }
            set { Fields.LogoKabupaten[this] = value; }
        }

        [DisplayName("Nama Propinsi"), Size(255)]
        public String NamaPropinsi
        {
            get { return Fields.NamaPropinsi[this]; }
            set { Fields.NamaPropinsi[this] = value; }
        }

        [DisplayName("Ibu Kota Propinsi"), Size(255)]
        public String IbuKotaPropinsi
        {
            get { return Fields.IbuKotaPropinsi[this]; }
            set { Fields.IbuKotaPropinsi[this] = value; }
        }

        [DisplayName("Logo Propinsi"), Size(255)]
        public String LogoPropinsi
        {
            get { return Fields.LogoPropinsi[this]; }
            set { Fields.LogoPropinsi[this] = value; }
        }

        [DisplayName("No Kode Propinsi"), Size(255)]
        public String NoKodePropinsi
        {
            get { return Fields.NoKodePropinsi[this]; }
            set { Fields.NoKodePropinsi[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisplayName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewProfilUserRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public StringField DisplayName;
            public StringField Username;
            public StringField Email;
            public StringField Address;
            public Int32Field IdHubungan;
            public StringField NoKtp;
            public StringField NoKk;
            public StringField PhoneNumber;
            public StringField WaNumber;
            public Int32Field JenisKelamin;
            public DateTimeField TanggalLahir;
            public Int64Field IdDesa;
            public StringField Pendidikan;
            public Int32Field IdKecamatan;
            public StringField NamaDesa;
            public StringField LogoDesa;
            public StringField NoKodeDesa;
            public StringField NamaKecamatan;
            public Int32Field IdKabupaten;
            public StringField NoKodeKecamatan;
            public StringField KodePos;
            public StringField NoKodeKabupaten;
            public Int32Field IdPropinsi;
            public StringField NamaKabupaten;
            public StringField LogoKabupaten;
            public StringField NamaPropinsi;
            public StringField IbuKotaPropinsi;
            public StringField LogoPropinsi;
            public StringField NoKodePropinsi;
            public StringField UserImage;
        }
    }
}
