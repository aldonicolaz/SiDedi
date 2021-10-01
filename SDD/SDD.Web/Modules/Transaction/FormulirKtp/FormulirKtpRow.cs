
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[FormulirKTP]")]
    [DisplayName("Formulir Ktp"), InstanceName("Formulir Ktp")]
    [ReadPermission("Transaction:FormulirKtp")]
    [ModifyPermission("Transaction:FormulirKtp")]
    public sealed class FormulirKtpRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Formulir Ktp"), Column("IdFormulirKTP"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdFormulirKtp
        {
            get { return Fields.IdFormulirKtp[this]; }
            set { Fields.IdFormulirKtp[this] = value; }
        }

        [DisplayName("Formulir")]
        public Int32? IdFFowForm
        {
            get { return Fields.IdFFowForm[this]; }
            set { Fields.IdFFowForm[this] = value; }
        }

        [DisplayName("Type Permohonan"), Size(255), QuickSearch]
        public String TypePermohonan
        {
            get { return Fields.TypePermohonan[this]; }
            set { Fields.TypePermohonan[this] = value; }
        }


        [DisplayName("Dok Pendukung "), Column("DokPendukung "), Size(900)]

        [MultipleFileUploadEditor(FilenameFormat = "FileUpload/Documents/~", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String DokPendukung
        {
            get { return Fields.DokPendukung[this]; }
            set { Fields.DokPendukung[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }
        [DisplayName("Id User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser"), ]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }
        [DisplayName("Display Name"), Expression("jIdUser.[DisplayName]")]
        public String IdUserDisplayName
        {
            get { return Fields.IdUserDisplayName[this]; }
            set { Fields.IdUserDisplayName[this] = value; }
        }

        [DisplayName("Link Doc KTP")]
        public String LinkDocKTP
        {
            get { return Fields.LinkDocKTP[this]; }
            set { Fields.LinkDocKTP[this] = value; }
        }

        [DisplayName("Timestamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdFormulirKtp; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypePermohonan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FormulirKtpRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdFormulirKtp;
            public Int32Field IdFFowForm;
            public StringField TypePermohonan;
            public StringField DokPendukung;
            public StringField Desc;
            public StringField IdUserDisplayName;
            public Int32Field IdUser;
            public StringField LinkDocKTP;
            public DateTimeField Timestamp;
        }
    }
}
