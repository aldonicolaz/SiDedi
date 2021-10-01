
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[UserKaryawan]")]
    [DisplayName("Karyawan"), InstanceName("Karyawan")]
    [ReadPermission("Transaction:UserKaryawan")]
    [ModifyPermission("Transaction:UserKaryawan")]
    public sealed class UserKaryawanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id User Karyawan"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdUserKaryawan
        {
            get { return Fields.IdUserKaryawan[this]; }
            set { Fields.IdUserKaryawan[this] = value; }
        }

        [DisplayName("Iduser"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIduser"), TextualField("IduserUsername")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }

        [DisplayName("Type Perusahaan")]
        public Int32? TypePerusahaan
        {
            get { return Fields.TypePerusahaan[this]; }
            set { Fields.TypePerusahaan[this] = value; }
        }

        [DisplayName("Status Karyawan"), Size(255), QuickSearch]
        public String StatusKaryawan
        {
            get { return Fields.StatusKaryawan[this]; }
            set { Fields.StatusKaryawan[this] = value; }
        }

        [DisplayName("Ratarata Penghasilan"), Size(19), Scale(4)]
        public Decimal? RatarataPenghasilan
        {
            get { return Fields.RatarataPenghasilan[this]; }
            set { Fields.RatarataPenghasilan[this] = value; }
        }

        [DisplayName("Namaperusahaan Usaha"), Size(255)]
        public String NamaperusahaanUsaha
        {
            get { return Fields.NamaperusahaanUsaha[this]; }
            set { Fields.NamaperusahaanUsaha[this] = value; }
        }

        [DisplayName("Alamat Perusahan Usaha"), Size(255)]
        public String AlamatPerusahanUsaha
        {
            get { return Fields.AlamatPerusahanUsaha[this]; }
            set { Fields.AlamatPerusahanUsaha[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }
        [DisplayName("Display Name"), Expression("jIduser.[DisplayName]")]
        public String IduserDisplayName
        {
            get { return Fields.IduserDisplayName[this]; }
            set { Fields.IduserDisplayName[this] = value; }
        }
        [DisplayName("Pekerjaan"), ForeignKey("[dbo].[MasterPekerjaan]", "IdPekerjaan"), LeftJoin("jIdPekerjaan")]
        public Int32? IdPekerjaan
        {
            get { return Fields.IdPekerjaan[this]; }
            set { Fields.IdPekerjaan[this] = value; }
        }
        [DisplayName("Nama Pekerjaan"), Expression("jIdPekerjaan.[NamaPekerjaan]")]
        public String IdPekerjaanNamaPekerjaan
        {
            get { return Fields.IdPekerjaanNamaPekerjaan[this]; }
            set { Fields.IdPekerjaanNamaPekerjaan[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.IdUserKaryawan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StatusKaryawan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserKaryawanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdUserKaryawan;
            public Int32Field IdUser;
            public Int32Field TypePerusahaan;
            public StringField StatusKaryawan;
            public DecimalField RatarataPenghasilan;
            public StringField NamaperusahaanUsaha;
            public StringField AlamatPerusahanUsaha;
            public StringField Desc;
            public StringField IduserDisplayName;
            public Int32Field IdPekerjaan;
            public StringField IdPekerjaanNamaPekerjaan;
        }
    }
}
