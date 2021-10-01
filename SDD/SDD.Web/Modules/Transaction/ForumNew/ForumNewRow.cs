
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[Forum]")]
    [DisplayName("Forum"), InstanceName("Forum")]
    [ReadPermission("Transaction:ForumNew")]
    [ModifyPermission("Transaction:ForumNew")]
    public sealed class ForumNewRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Forum"), Identity]
        public Int32? IdForum
        {
            get { return Fields.IdForum[this]; }
            set { Fields.IdForum[this] = value; }
        }

        [DisplayName("Id Master Forum"), ForeignKey("[dbo].[MasterForum]", "IdMasterForum"), LeftJoin("jIdMasterForum"), TextualField("IdMasterForumNamaForum")]
        public Int32? IdMasterForum
        {
            get { return Fields.IdMasterForum[this]; }
            set { Fields.IdMasterForum[this] = value; }
        }

        [DisplayName("Id User Insert"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserInsert"), TextualField("IdUserInsertUsername")]
        public Int32? IdUserInsert
        {
            get { return Fields.IdUserInsert[this]; }
            set { Fields.IdUserInsert[this] = value; }
        }

        [DisplayName("Respon Forum"), MasterDetailRelation(foreignKey: "IdForum"), NotMapped]
        public System.Collections.Generic.List<DetailForumRow> Detail
        {
            get { return Fields.Detail[this]; }
            set { Fields.Detail[this] = value; }
        }
        [DisplayName("Detail Forum"), Size(900), QuickSearch]
        public String DetailForum
        {
            get { return Fields.DetailForum[this]; }
            set { Fields.DetailForum[this] = value; }
        }
        [DisplayName("Foto Dokumen Forum"), Size(900)]
        [MultipleFileUploadEditor(FilenameFormat = "FileUpload/Documents/", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String FotoDokumenForum
        {
            get { return Fields.FotoDokumenForum[this]; }
            set { Fields.FotoDokumenForum[this] = value; }
        }

        [DisplayName("Hidden User")]
        public Int32? HiddenUser
        {
            get { return Fields.HiddenUser[this]; }
            set { Fields.HiddenUser[this] = value; }
        }

        [DisplayName("Timestamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        [DisplayName("Nama Forum"), Expression("jIdMasterForum.[NamaForum]")]
        public String IdMasterForumNamaForum
        {
            get { return Fields.IdMasterForumNamaForum[this]; }
            set { Fields.IdMasterForumNamaForum[this] = value; }
        }

        [DisplayName("Id Master Forum Deskripsi"), Expression("jIdMasterForum.[Deskripsi]")]
        public String IdMasterForumDeskripsi
        {
            get { return Fields.IdMasterForumDeskripsi[this]; }
            set { Fields.IdMasterForumDeskripsi[this] = value; }
        }

        [DisplayName("Id User Insert Username"), Expression("jIdUserInsert.[Username]")]
        public String IdUserInsertUsername
        {
            get { return Fields.IdUserInsertUsername[this]; }
            set { Fields.IdUserInsertUsername[this] = value; }
        }

        [DisplayName("User Insert"), Expression("jIdUserInsert.[DisplayName]")]
        public String IdUserInsertDisplayName
        {
            get { return Fields.IdUserInsertDisplayName[this]; }
            set { Fields.IdUserInsertDisplayName[this] = value; }
        }

        [DisplayName("Id User Insert Email"), Expression("jIdUserInsert.[Email]")]
        public String IdUserInsertEmail
        {
            get { return Fields.IdUserInsertEmail[this]; }
            set { Fields.IdUserInsertEmail[this] = value; }
        }

        [DisplayName("Id User Insert Source"), Expression("jIdUserInsert.[Source]")]
        public String IdUserInsertSource
        {
            get { return Fields.IdUserInsertSource[this]; }
            set { Fields.IdUserInsertSource[this] = value; }
        }

        [DisplayName("Id User Insert Password Hash"), Expression("jIdUserInsert.[PasswordHash]")]
        public String IdUserInsertPasswordHash
        {
            get { return Fields.IdUserInsertPasswordHash[this]; }
            set { Fields.IdUserInsertPasswordHash[this] = value; }
        }

        [DisplayName("Id User Insert Password Salt"), Expression("jIdUserInsert.[PasswordSalt]")]
        public String IdUserInsertPasswordSalt
        {
            get { return Fields.IdUserInsertPasswordSalt[this]; }
            set { Fields.IdUserInsertPasswordSalt[this] = value; }
        }

        [DisplayName("Id User Insert Last Directory Update"), Expression("jIdUserInsert.[LastDirectoryUpdate]")]
        public DateTime? IdUserInsertLastDirectoryUpdate
        {
            get { return Fields.IdUserInsertLastDirectoryUpdate[this]; }
            set { Fields.IdUserInsertLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id User Insert User Image"), Expression("jIdUserInsert.[UserImage]")]
        public String IdUserInsertUserImage
        {
            get { return Fields.IdUserInsertUserImage[this]; }
            set { Fields.IdUserInsertUserImage[this] = value; }
        }

        [DisplayName("Id User Insert Insert Date"), Expression("jIdUserInsert.[InsertDate]")]
        public DateTime? IdUserInsertInsertDate
        {
            get { return Fields.IdUserInsertInsertDate[this]; }
            set { Fields.IdUserInsertInsertDate[this] = value; }
        }

        [DisplayName("Id User Insert Insert User Id"), Expression("jIdUserInsert.[InsertUserId]")]
        public Int32? IdUserInsertInsertUserId
        {
            get { return Fields.IdUserInsertInsertUserId[this]; }
            set { Fields.IdUserInsertInsertUserId[this] = value; }
        }

        [DisplayName("Id User Insert Update Date"), Expression("jIdUserInsert.[UpdateDate]")]
        public DateTime? IdUserInsertUpdateDate
        {
            get { return Fields.IdUserInsertUpdateDate[this]; }
            set { Fields.IdUserInsertUpdateDate[this] = value; }
        }

        [DisplayName("Id User Insert Update User Id"), Expression("jIdUserInsert.[UpdateUserId]")]
        public Int32? IdUserInsertUpdateUserId
        {
            get { return Fields.IdUserInsertUpdateUserId[this]; }
            set { Fields.IdUserInsertUpdateUserId[this] = value; }
        }

        [DisplayName("Id User Insert Is Active"), Expression("jIdUserInsert.[IsActive]")]
        public Int16? IdUserInsertIsActive
        {
            get { return Fields.IdUserInsertIsActive[this]; }
            set { Fields.IdUserInsertIsActive[this] = value; }
        }

        [DisplayName("Id User Insert Address"), Expression("jIdUserInsert.[Address]")]
        public String IdUserInsertAddress
        {
            get { return Fields.IdUserInsertAddress[this]; }
            set { Fields.IdUserInsertAddress[this] = value; }
        }

        [DisplayName("Id User Insert Id Hubungan "), Expression("jIdUserInsert.[IdHubungan ]")]
        public Int32? IdUserInsertIdHubungan
        {
            get { return Fields.IdUserInsertIdHubungan[this]; }
            set { Fields.IdUserInsertIdHubungan[this] = value; }
        }

        [DisplayName("Id User Insert No Ktp"), Expression("jIdUserInsert.[NoKTP]")]
        public String IdUserInsertNoKtp
        {
            get { return Fields.IdUserInsertNoKtp[this]; }
            set { Fields.IdUserInsertNoKtp[this] = value; }
        }

        [DisplayName("Id User Insert No Kk"), Expression("jIdUserInsert.[NoKK]")]
        public String IdUserInsertNoKk
        {
            get { return Fields.IdUserInsertNoKk[this]; }
            set { Fields.IdUserInsertNoKk[this] = value; }
        }

        [DisplayName("Id User Insert Phone Number"), Expression("jIdUserInsert.[PhoneNumber]")]
        public String IdUserInsertPhoneNumber
        {
            get { return Fields.IdUserInsertPhoneNumber[this]; }
            set { Fields.IdUserInsertPhoneNumber[this] = value; }
        }

        [DisplayName("Id User Insert Wa Number"), Expression("jIdUserInsert.[WaNumber]")]
        public String IdUserInsertWaNumber
        {
            get { return Fields.IdUserInsertWaNumber[this]; }
            set { Fields.IdUserInsertWaNumber[this] = value; }
        }

        [DisplayName("Id User Insert Option1"), Expression("jIdUserInsert.[Option1]")]
        public String IdUserInsertOption1
        {
            get { return Fields.IdUserInsertOption1[this]; }
            set { Fields.IdUserInsertOption1[this] = value; }
        }

        [DisplayName("Id User Insert Option2"), Expression("jIdUserInsert.[Option2]")]
        public String IdUserInsertOption2
        {
            get { return Fields.IdUserInsertOption2[this]; }
            set { Fields.IdUserInsertOption2[this] = value; }
        }

        [DisplayName("Id User Insert Option3"), Expression("jIdUserInsert.[Option3]")]
        public String IdUserInsertOption3
        {
            get { return Fields.IdUserInsertOption3[this]; }
            set { Fields.IdUserInsertOption3[this] = value; }
        }

        [DisplayName("Id User Insert Jenis Kelamin"), Expression("jIdUserInsert.[JenisKelamin]")]
        public Int32? IdUserInsertJenisKelamin
        {
            get { return Fields.IdUserInsertJenisKelamin[this]; }
            set { Fields.IdUserInsertJenisKelamin[this] = value; }
        }

        [DisplayName("Id User Insert Tanggal Lahir"), Expression("jIdUserInsert.[TanggalLahir]")]
        public DateTime? IdUserInsertTanggalLahir
        {
            get { return Fields.IdUserInsertTanggalLahir[this]; }
            set { Fields.IdUserInsertTanggalLahir[this] = value; }
        }

        [DisplayName("Id User Insert Description"), Expression("jIdUserInsert.[Description]")]
        public String IdUserInsertDescription
        {
            get { return Fields.IdUserInsertDescription[this]; }
            set { Fields.IdUserInsertDescription[this] = value; }
        }

        [DisplayName("Id User Insert Id Desa"), Expression("jIdUserInsert.[IdDesa]")]
        public Int64? IdUserInsertIdDesa
        {
            get { return Fields.IdUserInsertIdDesa[this]; }
            set { Fields.IdUserInsertIdDesa[this] = value; }
        }

        [DisplayName("Id User Insert Pendidikan"), Expression("jIdUserInsert.[Pendidikan]")]
        public String IdUserInsertPendidikan
        {
            get { return Fields.IdUserInsertPendidikan[this]; }
            set { Fields.IdUserInsertPendidikan[this] = value; }
        }

        [DisplayName("Id User Insert Id Version"), Expression("jIdUserInsert.[IdVersion]")]
        public Int32? IdUserInsertIdVersion
        {
            get { return Fields.IdUserInsertIdVersion[this]; }
            set { Fields.IdUserInsertIdVersion[this] = value; }
        }

        [DisplayName("Id User Insert Fcm Token"), Expression("jIdUserInsert.[FcmToken]")]
        public String IdUserInsertFcmToken
        {
            get { return Fields.IdUserInsertFcmToken[this]; }
            set { Fields.IdUserInsertFcmToken[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdForum; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DetailForum; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ForumNewRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdForum;
            public Int32Field IdMasterForum;
            public Int32Field IdUserInsert;
            public StringField DetailForum;
            public StringField FotoDokumenForum;
            public Int32Field HiddenUser;
            public DateTimeField Timestamp;

            public StringField IdMasterForumNamaForum;
            public StringField IdMasterForumDeskripsi;

            public StringField IdUserInsertUsername;
            public StringField IdUserInsertDisplayName;
            public StringField IdUserInsertEmail;
            public StringField IdUserInsertSource;
            public StringField IdUserInsertPasswordHash;
            public StringField IdUserInsertPasswordSalt;
            public DateTimeField IdUserInsertLastDirectoryUpdate;
            public StringField IdUserInsertUserImage;
            public DateTimeField IdUserInsertInsertDate;
            public Int32Field IdUserInsertInsertUserId;
            public DateTimeField IdUserInsertUpdateDate;
            public Int32Field IdUserInsertUpdateUserId;
            public Int16Field IdUserInsertIsActive;
            public StringField IdUserInsertAddress;
            public Int32Field IdUserInsertIdHubungan;
            public StringField IdUserInsertNoKtp;
            public StringField IdUserInsertNoKk;
            public StringField IdUserInsertPhoneNumber;
            public StringField IdUserInsertWaNumber;
            public StringField IdUserInsertOption1;
            public StringField IdUserInsertOption2;
            public StringField IdUserInsertOption3;
            public Int32Field IdUserInsertJenisKelamin;
            public DateTimeField IdUserInsertTanggalLahir;
            public StringField IdUserInsertDescription;
            public Int64Field IdUserInsertIdDesa;
            public StringField IdUserInsertPendidikan;
            public Int32Field IdUserInsertIdVersion;
            public StringField IdUserInsertFcmToken;
            public RowListField<DetailForumRow> Detail;
        }
    }
}
