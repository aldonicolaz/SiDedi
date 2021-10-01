
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[TransaksiStatus]")]
    [DisplayName("Approval Pengajuan"), InstanceName("Approval Pengajuan")]
    [ReadPermission("Transaction:TransaksiStatus")]
    [ModifyPermission("Transaction:TransaksiStatus")]
    public sealed class TransaksiStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Transaksi"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdTransaksi
        {
            get { return Fields.IdTransaksi[this]; }
            set { Fields.IdTransaksi[this] = value; }
        }

        [DisplayName("Id Master Form"), ForeignKey("[dbo].[MasterFormulir]", "IdFormulir"), LeftJoin("jIdMasterForm"), TextualField("IdMasterFormNamaFormulir")]
        public Int32? IdMasterForm
        {
            get { return Fields.IdMasterForm[this]; }
            set { Fields.IdMasterForm[this] = value; }
        }
        [DisplayName("Id Transaksi"), ForeignKey("[dbo].[viewTransaksiFormulir]", "IdTransaksiForm"), LeftJoin("jIdview")]
     
        public Int32? IdTransaksiForm
        {
            get { return Fields.IdTransaksiForm[this]; }
            set { Fields.IdTransaksiForm[this] = value; }
        }
        [DisplayName("Formulir"),Expression("jIdview.IdFormulir")]
        public Int32? IdFormulir
        {
            get { return Fields.IdFormulir[this]; }
            set { Fields.IdFormulir[this] = value; }
        }

        //[DisplayName("Formulir"), ForeignKey("[dbo].[viewUserPengajuan]", "IdFormulir"), Expression("jIdMasterForm.IdFormulir"), LeftJoin("jIdview")]
        //public Int32? IdFormulir
        //{
        //    get { return Fields.IdFormulir[this]; }
        //    set { Fields.IdFormulir[this] = value; }
        //}

        [DisplayName("Dok Pendukung"), Size(900), Expression("jIdview.Dokumen")]
        [MultipleFileUploadEditor(FilenameFormat = "FileUpload/Documents/~", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String Dokumen
        {
            get { return Fields.Dokumen[this]; }
            set { Fields.Dokumen[this] = value; }
        }

        [DisplayName("Status"), ForeignKey("[dbo].[MasterStatus]", "IdStatus"), LeftJoin("jStatus")]
        public Int32? IdStatus
        {
            get { return Fields.IdStatus[this]; }
            set { Fields.IdStatus[this] = value; }
        }

        [DisplayName("Status Transaksi"), Size(150), QuickSearch, Expression("JStatus.[NamaStatus]")]
        public String NamaStatus
        {
            get { return Fields.NamaStatus[this]; }
            set { Fields.NamaStatus[this] = value; }
        }

        [DisplayName("IdUserPengajuan"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("JUsers")]
        public Int32? IdUserPengajuan
        {
            get { return Fields.IdUserPengajuan[this]; }
            set { Fields.IdUserPengajuan[this] = value; }
        }


        [DisplayName("Desa"), Expression("JUsers.[IdDesa]"), ForeignKey("[dbo].[MasterDesa]", "IdDesa"), LeftJoin("JDesa")]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Nama Desa"), Size(255),Expression("JDesa.NamaDesa")]
        public String NamaDesa
        {
            get { return Fields.NamaDesa[this]; }
            set { Fields.NamaDesa[this] = value; }
        }
        [DisplayName("Nama Pengaju"), Size(255), QuickSearch, Expression("JUsers.[DisplayName]")]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Keterangan Transaksi"), Size(255), QuickSearch]
        public String Keterangan
        {
            get { return Fields.Keterangan[this]; }
            set { Fields.Keterangan[this] = value; }
        }

        [DisplayName("Id User Aparat"), ForeignKey("[dbo].[viewAparatDesa]", "IdUserAparatDesa"), LeftJoin("JUserAparat")]
        public Int32? IdUserAparat
        {
            get { return Fields.IdUserAparat[this]; }
            set { Fields.IdUserAparat[this] = value; }
        }

        [DisplayName("Aparat Desa"), Size(255), QuickSearch, Expression("JUserAparat.[DisplayName]")]
        public String DisplayName1
        {
            get { return Fields.DisplayName1[this]; }
            set { Fields.DisplayName1[this] = value; }
        }

        [DisplayName("Jabatan"), Size(255), QuickSearch, Expression("JUserAparat.[NamaJabatan]")]
        public String Jabatan
        {
            get { return Fields.Jabatan[this]; }
            set { Fields.Jabatan[this] = value; }
        }

        [DisplayName("Tanggal"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? TimeStamp
        {
            get { return Fields.TimeStamp[this]; }
            set { Fields.TimeStamp[this] = value; }
        }

        [DisplayName("Formulir"), Expression("jIdMasterForm.[NamaFormulir]")]
        public String IdMasterFormNamaFormulir
        {
            get { return Fields.IdMasterFormNamaFormulir[this]; }
            set { Fields.IdMasterFormNamaFormulir[this] = value; }
        }

        [DisplayName("Id Master Form Desc Formulir"), Expression("jIdMasterForm.[DescFormulir]")]
        public String IdMasterFormDescFormulir
        {
            get { return Fields.IdMasterFormDescFormulir[this]; }
            set { Fields.IdMasterFormDescFormulir[this] = value; }
        }

        [DisplayName("Link Formulir"), Size(255), Expression("jIdview.Formulir")]
        public String LinkFormulir
        {
            get { return Fields.LinkFormulir[this]; }
            set { Fields.LinkFormulir[this] = value; }
        }

        [DisplayName("Info Status"), Size(255)]
        public String Info
        {
            get { return Fields.Info[this]; }
            set { Fields.Info[this] = value; }
        }

       
        IIdField IIdRow.IdField
        {
            get { return Fields.IdTransaksi; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Keterangan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransaksiStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTransaksi;
            public Int32Field IdMasterForm;
            public Int32Field IdStatus;
            public Int32Field IdUserPengajuan;
            public StringField Keterangan;
            public Int32Field IdUserAparat;
            public DateTimeField TimeStamp;
            public StringField DisplayName;
            public StringField DisplayName1;
            public StringField NamaStatus;
            public Int64Field IdDesa;
            public StringField IdMasterFormNamaFormulir;
            public StringField IdMasterFormDescFormulir;
            public StringField LinkFormulir;
            public StringField NamaDesa;
            public Int32Field IdFormulir;
            public StringField Dokumen;
            public StringField Info;
            public StringField Jabatan;
            public Int32Field IdTransaksiForm;

        }
    }
}
