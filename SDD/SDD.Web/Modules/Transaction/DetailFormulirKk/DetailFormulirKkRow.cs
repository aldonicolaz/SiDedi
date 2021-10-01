
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailFormulirKK]")]
    [DisplayName("Detail Formulir Kk"), InstanceName("Detail Formulir Kk")]
    [ReadPermission("Transaction:DetailFormulirKk")]
    [ModifyPermission("Transaction:DetailFormulirKk")]
    public sealed class DetailFormulirKkRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Detail KK"), Column("IdDetailKK"), Identity]
        public Int32? IdDetailKk
        {
            get { return Fields.IdDetailKk[this]; }
            set { Fields.IdDetailKk[this] = value; }
        }

        [DisplayName("Id Formulir KK"), Column("IdFormulirKK"), ForeignKey("[dbo].[FormulirKK]", "IdFormulirKK"), LeftJoin("jIdFormulirKk"), TextualField("IdFormulirKkAlasanPemohon")]
        public Int32? IdFormulirKk
        {
            get { return Fields.IdFormulirKk[this]; }
            set { Fields.IdFormulirKk[this] = value; }
        }

        [DisplayName("Hubungan"), ForeignKey("[dbo].[MasterHubungan]", "IdHubungan"), LeftJoin("jIdMasterHub"), TextualField("IdMasterHubNamaHubungan")]
        public Int32? IdMasterHub
        {
            get { return Fields.IdMasterHub[this]; }
            set { Fields.IdMasterHub[this] = value; }
        }

        [DisplayName("NIK"), Column("NIK"), Size(255), QuickSearch]
        public String Nik
        {
            get { return Fields.Nik[this]; }
            set { Fields.Nik[this] = value; }
        }

        [DisplayName("Nama Lengkap"), Size(255)]
        public String NamaLengkap
        {
            get { return Fields.NamaLengkap[this]; }
            set { Fields.NamaLengkap[this] = value; }
        }

        [DisplayName("Id Master Flow"), Expression("jIdFormulirKk.[IdMasterFlow]")]
        public Int32? IdFormulirKkIdMasterFlow
        {
            get { return Fields.IdFormulirKkIdMasterFlow[this]; }
            set { Fields.IdFormulirKkIdMasterFlow[this] = value; }
        }

        [DisplayName("ID User"), Expression("jIdFormulirKk.[IdUser]")]
        public Int32? IdFormulirKkIdUser
        {
            get { return Fields.IdFormulirKkIdUser[this]; }
            set { Fields.IdFormulirKkIdUser[this] = value; }
        }

        [DisplayName("Alasan Pemohon"), Expression("jIdFormulirKk.[AlasanPemohon]")]
        public String IdFormulirKkAlasanPemohon
        {
            get { return Fields.IdFormulirKkAlasanPemohon[this]; }
            set { Fields.IdFormulirKkAlasanPemohon[this] = value; }
        }

        [DisplayName("Jumlah KK"), Expression("jIdFormulirKk.[JumlahKK]")]
        public Int32? IdFormulirKkJumlahKk
        {
            get { return Fields.IdFormulirKkJumlahKk[this]; }
            set { Fields.IdFormulirKkJumlahKk[this] = value; }
        }

        //[DisplayName("Dokumen Pendukung"), Size(255)]
        //[FileUploadEditor(FilenameFormat = "FileUpload/Documents/~")]
        //public String IdFormulirKkDokPendukung
        //{
        //    get { return Fields.IdFormulirKkDokPendukung[this]; }
        //    set { Fields.IdFormulirKkDokPendukung[this] = value; }
        //}




        [DisplayName("KK Timestamp"), Expression("jIdFormulirKk.[Timestamp]")]
        public DateTime? IdFormulirKkTimestamp
        {
            get { return Fields.IdFormulirKkTimestamp[this]; }
            set { Fields.IdFormulirKkTimestamp[this] = value; }
        }

        [DisplayName("Link Dokumen KK"), Expression("jIdFormulirKk.[LinkDocKK]")]
        public String IdFormulirKkLinkDocKk
        {
            get { return Fields.IdFormulirKkLinkDocKk[this]; }
            set { Fields.IdFormulirKkLinkDocKk[this] = value; }
        }

        [DisplayName("Nama Hubungan"), Expression("jIdMasterHub.[NamaHubungan]"),MinSelectLevel(SelectLevel.List)]
        public String IdMasterHubNamaHubungan
        {
            get { return Fields.IdMasterHubNamaHubungan[this]; }
            set { Fields.IdMasterHubNamaHubungan[this] = value; }
        }

        [DisplayName("Kode Hubungan"), Expression("jIdMasterHub.[KodeHubungan]")]
        public String IdMasterHubKodeHubungan
        {
            get { return Fields.IdMasterHubKodeHubungan[this]; }
            set { Fields.IdMasterHubKodeHubungan[this] = value; }
        }

        [DisplayName("Desc Hubungan"), Expression("jIdMasterHub.[DescHubungan]")]
        public String IdMasterHubDescHubungan
        {
            get { return Fields.IdMasterHubDescHubungan[this]; }
            set { Fields.IdMasterHubDescHubungan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailKk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nik; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailFormulirKkRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailKk;
            public Int32Field IdFormulirKk;
            public Int32Field IdMasterHub;
            public StringField Nik;
            public StringField NamaLengkap;

            public Int32Field IdFormulirKkIdMasterFlow;
            public Int32Field IdFormulirKkIdUser;
            public StringField IdFormulirKkAlasanPemohon;
            public Int32Field IdFormulirKkJumlahKk;
           // public StringField IdFormulirKkDokPendukung;
            public DateTimeField IdFormulirKkTimestamp;
            public StringField IdFormulirKkLinkDocKk;

            public StringField IdMasterHubNamaHubungan;
            public StringField IdMasterHubKodeHubungan;
            public StringField IdMasterHubDescHubungan;
        }
    }
}
