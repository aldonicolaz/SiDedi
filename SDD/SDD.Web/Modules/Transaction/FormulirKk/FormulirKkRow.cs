
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[FormulirKK]")]
    [DisplayName("Formulir Kk"), InstanceName("Formulir Kk")]
    [ReadPermission("Transaction:FormulirKk")]
    [ModifyPermission("Transaction:FormulirKk")]
    public sealed class FormulirKkRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Formulir Kk"), Column("IdFormulirKK"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdFormulirKk
        {
            get { return Fields.IdFormulirKk[this]; }
            set { Fields.IdFormulirKk[this] = value; }
        }

        [DisplayName("Master Flow"), ForeignKey("[dbo].[MasterFlowFormulir]", "IdFormFlow"), LeftJoin("jIdMasterFlow"), TextualField("IdMasterFlowDescForm")]
        public Int32? IdMasterFlow
        {
            get { return Fields.IdMasterFlow[this]; }
            set { Fields.IdMasterFlow[this] = value; }
        }

        [DisplayName("Id User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser"), TextualField("IdUserUsername")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }

        [DisplayName("Alasan Pemohon"), Size(255), QuickSearch]
        public String AlasanPemohon
        {
            get { return Fields.AlasanPemohon[this]; }
            set { Fields.AlasanPemohon[this] = value; }
        }

        [DisplayName("Jumlah Kk"), Column("JumlahKK")]
        public Int32? JumlahKk
        {
            get { return Fields.JumlahKk[this]; }
            set { Fields.JumlahKk[this] = value; }
        }

        [DisplayName("Dok Pendukung"), Size(900) ]
        [MultipleFileUploadEditor(FilenameFormat = "FileUpload/Documents/~", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String DokPendukungKK
        {
            get { return Fields.DokPendukungKK[this]; }
            set { Fields.DokPendukungKK[this] = value; }
        }


        /* [DisplayName("Dok Pendukung"), Size(255)]
         public String DokPendukung
         {
             get { return Fields.DokPendukung[this]; }
             set { Fields.DokPendukung[this] = value; }
         }*/

        [DisplayName("Timestamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        [DisplayName("Link Doc Kk"), Column("LinkDocKK"), Size(255)]
        public String LinkDocKk
        {
            get { return Fields.LinkDocKk[this]; }
            set { Fields.LinkDocKk[this] = value; }
        }

        [DisplayName("Id Master Flow Id Master Form"), Expression("jIdMasterFlow.[IdMasterForm]")]
        public Int32? IdMasterFlowIdMasterForm
        {
            get { return Fields.IdMasterFlowIdMasterForm[this]; }
            set { Fields.IdMasterFlowIdMasterForm[this] = value; }
        }

        [DisplayName("Id Master Flow Slaform"), Expression("jIdMasterFlow.[Slaform]")]
        public Int32? IdMasterFlowSlaform
        {
            get { return Fields.IdMasterFlowSlaform[this]; }
            set { Fields.IdMasterFlowSlaform[this] = value; }
        }

        [DisplayName(" Flow Form"), Expression("jIdMasterFlow.[DescForm]")]
        public String IdMasterFlowDescForm
        {
            get { return Fields.IdMasterFlowDescForm[this]; }
            set { Fields.IdMasterFlowDescForm[this] = value; }
        }

        [DisplayName("Flow Id Desa"), Expression("jIdMasterFlow.[IdDesa]")]
        public Int64? IdMasterFlowIdDesa
        {
            get { return Fields.IdMasterFlowIdDesa[this]; }
            set { Fields.IdMasterFlowIdDesa[this] = value; }
        }

        [DisplayName("Username"), Expression("jIdUser.[Username]")]
        public String IdUserUsername
        {
            get { return Fields.IdUserUsername[this]; }
            set { Fields.IdUserUsername[this] = value; }
        }

        [DisplayName("Display Name"), Expression("jIdUser.[DisplayName]")]
        public String IdUserDisplayName
        {
            get { return Fields.IdUserDisplayName[this]; }
            set { Fields.IdUserDisplayName[this] = value; }
        }

        [DisplayName("Email"), Expression("jIdUser.[Email]")]
        public String IdUserEmail
        {
            get { return Fields.IdUserEmail[this]; }
            set { Fields.IdUserEmail[this] = value; }
        }

        [DisplayName("Source"), Expression("jIdUser.[Source]")]
        public String IdUserSource
        {
            get { return Fields.IdUserSource[this]; }
            set { Fields.IdUserSource[this] = value; }
        }

        [DisplayName("Password Hash"), Expression("jIdUser.[PasswordHash]")]
        public String IdUserPasswordHash
        {
            get { return Fields.IdUserPasswordHash[this]; }
            set { Fields.IdUserPasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Expression("jIdUser.[PasswordSalt]")]
        public String IdUserPasswordSalt
        {
            get { return Fields.IdUserPasswordSalt[this]; }
            set { Fields.IdUserPasswordSalt[this] = value; }
        }

        [DisplayName("Last Directory Update"), Expression("jIdUser.[LastDirectoryUpdate]")]
        public DateTime? IdUserLastDirectoryUpdate
        {
            get { return Fields.IdUserLastDirectoryUpdate[this]; }
            set { Fields.IdUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User Image"), Expression("jIdUser.[UserImage]")]
        public String IdUserUserImage
        {
            get { return Fields.IdUserUserImage[this]; }
            set { Fields.IdUserUserImage[this] = value; }
        }

        [DisplayName("Insert Date"), Expression("jIdUser.[InsertDate]")]
        public DateTime? IdUserInsertDate
        {
            get { return Fields.IdUserInsertDate[this]; }
            set { Fields.IdUserInsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), Expression("jIdUser.[InsertUserId]")]
        public Int32? IdUserInsertUserId
        {
            get { return Fields.IdUserInsertUserId[this]; }
            set { Fields.IdUserInsertUserId[this] = value; }
        }

        [DisplayName("Update Date"), Expression("jIdUser.[UpdateDate]")]
        public DateTime? IdUserUpdateDate
        {
            get { return Fields.IdUserUpdateDate[this]; }
            set { Fields.IdUserUpdateDate[this] = value; }
        }

        [DisplayName("Update User Id"), Expression("jIdUser.[UpdateUserId]")]
        public Int32? IdUserUpdateUserId
        {
            get { return Fields.IdUserUpdateUserId[this]; }
            set { Fields.IdUserUpdateUserId[this] = value; }
        }

        [DisplayName("Id User Is Active"), Expression("jIdUser.[IsActive]")]
        public Int16? IdUserIsActive
        {
            get { return Fields.IdUserIsActive[this]; }
            set { Fields.IdUserIsActive[this] = value; }
        }

        [DisplayName("Alamat"), Expression("jIdUser.[Address]")]
        public String IdUserAddress
        {
            get { return Fields.IdUserAddress[this]; }
            set { Fields.IdUserAddress[this] = value; }
        }

        [DisplayName("Id Hubungan "), Expression("jIdUser.[IdHubungan ]")]
        public Int32? IdUserIdHubungan
        {
            get { return Fields.IdUserIdHubungan[this]; }
            set { Fields.IdUserIdHubungan[this] = value; }
        }

        [DisplayName("No KTP"), Expression("jIdUser.[NoKTP]")]
        public String IdUserNoKtp
        {
            get { return Fields.IdUserNoKtp[this]; }
            set { Fields.IdUserNoKtp[this] = value; }
        }

        [DisplayName("No Kk"), Expression("jIdUser.[NoKK]")]
        public String IdUserNoKk
        {
            get { return Fields.IdUserNoKk[this]; }
            set { Fields.IdUserNoKk[this] = value; }
        }

        [DisplayName("Nomor Handphone"), Expression("jIdUser.[PhoneNumber]")]
        public String IdUserPhoneNumber
        {
            get { return Fields.IdUserPhoneNumber[this]; }
            set { Fields.IdUserPhoneNumber[this] = value; }
        }

        [DisplayName("Nomor Whatsapp"), Expression("jIdUser.[WaNumber]")]
        public String IdUserWaNumber
        {
            get { return Fields.IdUserWaNumber[this]; }
            set { Fields.IdUserWaNumber[this] = value; }
        }

        [DisplayName("Option1"), Expression("jIdUser.[Option1]")]
        public String IdUserOption1
        {
            get { return Fields.IdUserOption1[this]; }
            set { Fields.IdUserOption1[this] = value; }
        }

        [DisplayName("Option2"), Expression("jIdUser.[Option2]")]
        public String IdUserOption2
        {
            get { return Fields.IdUserOption2[this]; }
            set { Fields.IdUserOption2[this] = value; }
        }

        [DisplayName("Option3"), Expression("jIdUser.[Option3]")]
        public String IdUserOption3
        {
            get { return Fields.IdUserOption3[this]; }
            set { Fields.IdUserOption3[this] = value; }
        }

        //[DisplayName("Option4"), Expression("jIdUser.[Option4]")]
        //public String IdUserOption4
        //{
        //    get { return Fields.IdUserOption4[this]; }
        //    set { Fields.IdUserOption4[this] = value; }
        //}

        [DisplayName("Tanggal Lahir"), Expression("jIdUser.[TanggalLahir]")]
        public DateTime? IdUserTanggalLahir
        {
            get { return Fields.IdUserTanggalLahir[this]; }
            set { Fields.IdUserTanggalLahir[this] = value; }
        }

        [DisplayName("Description"), Expression("jIdUser.[Description]")]
        public String IdUserDescription
        {
            get { return Fields.IdUserDescription[this]; }
            set { Fields.IdUserDescription[this] = value; }
        }

        [DisplayName("Detail Formulir"), MasterDetailRelation(foreignKey: "IdFormulirKk"), NotMapped]
        public List<DetailFormulirKkRow> DetailFormulir
        {
            get { return Fields.DetailFormulir[this]; }
            set { Fields.DetailFormulir[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.IdFormulirKk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AlasanPemohon; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FormulirKkRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdFormulirKk;
            public Int32Field IdMasterFlow;
            public Int32Field IdUser;
            public StringField AlasanPemohon;
            public Int32Field JumlahKk;
            public StringField DokPendukungKK;
            public DateTimeField Timestamp;
            public StringField LinkDocKk;

            public Int32Field IdMasterFlowIdMasterForm;
            public Int32Field IdMasterFlowSlaform;
            public StringField IdMasterFlowDescForm;
            public Int64Field IdMasterFlowIdDesa;

            public StringField IdUserUsername;
            public StringField IdUserDisplayName;
            public StringField IdUserEmail;
            public StringField IdUserSource;
            public StringField IdUserPasswordHash;
            public StringField IdUserPasswordSalt;
            public DateTimeField IdUserLastDirectoryUpdate;
            public StringField IdUserUserImage;
            public DateTimeField IdUserInsertDate;
            public Int32Field IdUserInsertUserId;
            public DateTimeField IdUserUpdateDate;
            public Int32Field IdUserUpdateUserId;
            public Int16Field IdUserIsActive;
            public StringField IdUserAddress;
            public Int32Field IdUserIdHubungan;
            public StringField IdUserNoKtp;
            public StringField IdUserNoKk;
            public StringField IdUserPhoneNumber;
            public StringField IdUserWaNumber;
            public StringField IdUserOption1;
            public StringField IdUserOption2;
            public StringField IdUserOption3;
           // public StringField IdUserOption4;
            public DateTimeField IdUserTanggalLahir;
            public StringField IdUserDescription;
            public RowListField<DetailFormulirKkRow> DetailFormulir;
        }
    }
}
