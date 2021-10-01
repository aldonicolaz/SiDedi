
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[viewTransaksiFormulir]")]
    [DisplayName("View Transaksi Formulir"), InstanceName("View Transaksi Formulir")]
    [ReadPermission("View:ViewTransaksiFormulir")]
    [ModifyPermission("View:ViewTransaksiFormulir")]
    public sealed class ViewTransaksiFormulirRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Transaksi"), NotNull]
        public Int32? IdTransaksi
        {
            get { return Fields.IdTransaksi[this]; }
            set { Fields.IdTransaksi[this] = value; }
        }

        [DisplayName("Id Transaksi Form")]
        public Int32? IdTransaksiForm
        {
            get { return Fields.IdTransaksiForm[this]; }
            set { Fields.IdTransaksiForm[this] = value; }
        }

        [DisplayName("Id User Pengajuan")]
        public Int32? IdUserPengajuan
        {
            get { return Fields.IdUserPengajuan[this]; }
            set { Fields.IdUserPengajuan[this] = value; }
        }

        [DisplayName("Id User Aparat")]
        public Int32? IdUserAparat
        {
            get { return Fields.IdUserAparat[this]; }
            set { Fields.IdUserAparat[this] = value; }
        }

        [DisplayName("Info"), Size(255), QuickSearch]
        public String Info
        {
            get { return Fields.Info[this]; }
            set { Fields.Info[this] = value; }
        }

        [DisplayName("Time Stamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? TimeStamp
        {
            get { return Fields.TimeStamp[this]; }
            set { Fields.TimeStamp[this] = value; }
        }

        [DisplayName("Master Form")]
        public Int32? IdMasterForm
        {
            get { return Fields.IdMasterForm[this]; }
            set { Fields.IdMasterForm[this] = value; }
        }

        [DisplayName("Status")]
        public Int32? IdStatus
        {
            get { return Fields.IdStatus[this]; }
            set { Fields.IdStatus[this] = value; }
        }

        [DisplayName("Id Formulir")]
        public Int32? IdFormulir
        {
            get { return Fields.IdFormulir[this]; }
            set { Fields.IdFormulir[this] = value; }
        }

        [DisplayName("Formulir"), Size(255), NotNull]
        public String Formulir
        {
            get { return Fields.Formulir[this]; }
            set { Fields.Formulir[this] = value; }
        }

        [DisplayName("Dok Pendukung"), Size(900)]
        [MultipleFileUploadEditor(FilenameFormat = "FileUpload/Documents/~", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String Dokumen
        {
            get { return Fields.Dokumen[this]; }
            set { Fields.Dokumen[this] = value; }
        }

        [DisplayName("Nama Status"), Size(255)]
        public String NamaStatus
        {
            get { return Fields.NamaStatus[this]; }
            set { Fields.NamaStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdTransaksi; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Info; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewTransaksiFormulirRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTransaksi;
            public Int32Field IdTransaksiForm;
            public Int32Field IdUserPengajuan;
            public Int32Field IdUserAparat;
            public StringField Info;
            public DateTimeField TimeStamp;
            public Int32Field IdMasterForm;
            public Int32Field IdStatus;
            public Int32Field IdFormulir;
            public StringField Formulir;
            public StringField Dokumen;
            public StringField NamaStatus;
        }
    }
}
