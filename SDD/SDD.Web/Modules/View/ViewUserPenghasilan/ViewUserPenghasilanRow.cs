
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
    [DisplayName("Penghasilan Penduduk"), InstanceName("Penghasilan Penduduk")]
    [ReadPermission("View:ViewUserPenghasilan")]
    [ModifyPermission("View:ViewUserPenghasilan")]
    public sealed class ViewUserPenghasilanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Number")]
        [SortOrder(1, descending: true)]
        public Int64? NumberId
        {
            get { return Fields.NumberId[this]; }
            set { Fields.NumberId[this] = value; }
        }
        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Nama"), Size(100), QuickSearch]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100), QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("No Ktp"), Column("NoKTP"), Size(255), QuickSearch]
        public String NoKtp
        {
            get { return Fields.NoKtp[this]; }
            set { Fields.NoKtp[this] = value; }
        }

        [DisplayName("No Kk"), Column("NoKK"), Size(255), QuickSearch]
        public String NoKk
        {
            get { return Fields.NoKk[this]; }
            set { Fields.NoKk[this] = value; }
        }

        [DisplayName("Phone Number"), Size(255), QuickSearch]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("No.WA"), Size(255), QuickSearch]
        public String WaNumber
        {
            get { return Fields.WaNumber[this]; }
            set { Fields.WaNumber[this] = value; }
        }

        [DisplayName("Total Penghasilan"), Size(19), Scale(2), DisplayFormat("#,###.00")]
        public Decimal? TotalHasil
        {
            get { return Fields.TotalHasil[this]; }
            set { Fields.TotalHasil[this] = value; }
        }

        [DisplayName("Pekerjaan"), NotNull]
        public Int32? IdPekerjaan
        {
            get { return Fields.IdPekerjaan[this]; }
            set { Fields.IdPekerjaan[this] = value; }
        }

        [DisplayName("Nama Pekerjaan"), Size(255)]
        public String NamaPekerjaan
        {
            get { return Fields.NamaPekerjaan[this]; }
            set { Fields.NamaPekerjaan[this] = value; }
        }

        [DisplayName("Desa")]
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

        [DisplayName("Kecamatan"), Column("idKecamatan"), NotNull]
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

        [DisplayName("Kabupaten"), NotNull]
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

        [DisplayName("Propinsi"), NotNull]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.NumberId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisplayName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewUserPenghasilanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NumberId;
            public Int32Field UserId;
            public StringField DisplayName;
            public StringField Email;
            public StringField NoKtp;
            public StringField NoKk;
            public StringField PhoneNumber;
            public StringField WaNumber;
            public DecimalField TotalHasil;
            public Int32Field IdPekerjaan;
            public StringField NamaPekerjaan;
            public Int64Field IdDesa;
            public StringField NamaDesa;
            public Int32Field IdKecamatan;
            public StringField NamaKecamatan;
            public Int32Field IdKabupaten;
            public StringField NamaKabupaten;
            public Int32Field IdPropinsi;
            public StringField NamaPropinsi;
        }
    }
}
