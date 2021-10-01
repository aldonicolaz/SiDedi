
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[ViewAllPenghasilan]")]
    [DisplayName("View All Penghasilan"), InstanceName("View All Penghasilan")]
    [ReadPermission("View:ViewAllPenghasilan")]
    [ModifyPermission("View:ViewAllPenghasilan")]
    public sealed class ViewAllPenghasilanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Number")]
        public Int64? IdNumber
        {
            get { return Fields.IdNumber[this]; }
            set { Fields.IdNumber[this] = value; }
        }

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

        [DisplayName("Jenis Kelamin"), Size(9), NotNull]
        public String JenisKelamin
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

        [DisplayName("Id Desa"), NotNull]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Nama Desa"), Size(255)]
        public String NamaDesa
        {
            get { return Fields.NamaDesa[this]; }
            set { Fields.NamaDesa[this] = value; }
        }

        [DisplayName("Id Kecamatan"), Column("idKecamatan"), NotNull]
        public Int32? IdKecamatan
        {
            get { return Fields.IdKecamatan[this]; }
            set { Fields.IdKecamatan[this] = value; }
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

        [DisplayName("Nama Kabupaten"), Size(255)]
        public String NamaKabupaten
        {
            get { return Fields.NamaKabupaten[this]; }
            set { Fields.NamaKabupaten[this] = value; }
        }

        [DisplayName("Id Propinsi"), NotNull]
        public Int32? IdPropinsi
        {
            get { return Fields.IdPropinsi[this]; }
            set { Fields.IdPropinsi[this] = value; }
        }

        [DisplayName("Nama Propinsi"), Size(255)]
        public String NamaPropinsi
        {
            get { return Fields.NamaPropinsi[this]; }
            set { Fields.NamaPropinsi[this] = value; }
        }

        [DisplayName("Total Penghasilan Peternakan"), Size(19), Scale(4)]
        public Decimal? TotalPenghasilanPeternakan
        {
            get { return Fields.TotalPenghasilanPeternakan[this]; }
            set { Fields.TotalPenghasilanPeternakan[this] = value; }
        }

        [DisplayName("Total Penghasilan Pertanian"), Size(19), Scale(4)]
        public Decimal? TotalPenghasilanPertanian
        {
            get { return Fields.TotalPenghasilanPertanian[this]; }
            set { Fields.TotalPenghasilanPertanian[this] = value; }
        }

        [DisplayName("Total Penghasilan Nelayan"), Size(19), Scale(4)]
        public Decimal? TotalPenghasilanNelayan
        {
            get { return Fields.TotalPenghasilanNelayan[this]; }
            set { Fields.TotalPenghasilanNelayan[this] = value; }
        }

        [DisplayName("Total Penghasilan Karyawan"), Size(19), Scale(4)]
        public Decimal? TotalPenghasilanKaryawan
        {
            get { return Fields.TotalPenghasilanKaryawan[this]; }
            set { Fields.TotalPenghasilanKaryawan[this] = value; }
        }

        [DisplayName("Total Penghasilan Perdagangan"), Size(19), Scale(4)]
        public Decimal? TotalPenghasilanPerdagangan
        {
            get { return Fields.TotalPenghasilanPerdagangan[this]; }
            set { Fields.TotalPenghasilanPerdagangan[this] = value; }
        }

        [DisplayName("Total Penghasilan"), Size(19), Scale(4)]
        public Decimal? TotalPenghasilan
        {
            get { return Fields.TotalPenghasilan[this]; }
            set { Fields.TotalPenghasilan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdNumber; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisplayName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewAllPenghasilanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field IdNumber;
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
            public StringField JenisKelamin;
            public DateTimeField TanggalLahir;
            public Int64Field IdDesa;
            public StringField NamaDesa;
            public Int32Field IdKecamatan;
            public StringField NamaKecamatan;
            public Int32Field IdKabupaten;
            public StringField NamaKabupaten;
            public Int32Field IdPropinsi;
            public StringField NamaPropinsi;
            public DecimalField TotalPenghasilanPeternakan;
            public DecimalField TotalPenghasilanPertanian;
            public DecimalField TotalPenghasilanNelayan;
            public DecimalField TotalPenghasilanKaryawan;
            public DecimalField TotalPenghasilanPerdagangan;
            public DecimalField TotalPenghasilan;
        }
    }
}
