
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailForum]")]
    [DisplayName("Detail Forum"), InstanceName("Detail Forum")]
    [ReadPermission("Transaction:DetailForum")]
    [ModifyPermission("Transaction:DetailForum")]
    public sealed class DetailForumRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Detail Forum"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdDetailForum
        {
            get { return Fields.IdDetailForum[this]; }
            set { Fields.IdDetailForum[this] = value; }
        }

        [DisplayName("Id Forum"), ForeignKey("[dbo].[Forum]", "IdForum"), LeftJoin("jIdForum"), TextualField("IdForumDetailForum")]
        public Int32? IdForum
        {
            get { return Fields.IdForum[this]; }
            set { Fields.IdForum[this] = value; }
        }

        [DisplayName("Id User Respon"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserRespon"), TextualField("IdUserResponUsername")]
        public Int32? IdUserRespon
        {
            get { return Fields.IdUserRespon[this]; }
            set { Fields.IdUserRespon[this] = value; }
        }

        [DisplayName("Detail Respon"), Size(900), QuickSearch]
        public String DetailRespon
        {
            get { return Fields.DetailRespon[this]; }
            set { Fields.DetailRespon[this] = value; }
        }

        [DisplayName("Foto Dokumen Respon"), Size(900)]
        [MultipleFileUploadEditor(FilenameFormat = "FileUpload/Documents/", CopyToHistory = true, DisableDefaultBehavior = true)]

        public String FotoDokumenRespon
        {
            get { return Fields.FotoDokumenRespon[this]; }
            set { Fields.FotoDokumenRespon[this] = value; }
        }

        [DisplayName("Timestamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        [DisplayName("Id Forum Id Master Forum"), Expression("jIdForum.[IdMasterForum]")]
        public Int32? IdForumIdMasterForum
        {
            get { return Fields.IdForumIdMasterForum[this]; }
            set { Fields.IdForumIdMasterForum[this] = value; }
        }

        [DisplayName("Id Forum Id User Insert"), Expression("jIdForum.[IdUserInsert]")]
        public Int32? IdForumIdUserInsert
        {
            get { return Fields.IdForumIdUserInsert[this]; }
            set { Fields.IdForumIdUserInsert[this] = value; }
        }

        [DisplayName("Id Forum Detail Forum"), Expression("jIdForum.[DetailForum]")]
        public String IdForumDetailForum
        {
            get { return Fields.IdForumDetailForum[this]; }
            set { Fields.IdForumDetailForum[this] = value; }
        }

        [DisplayName("Id Forum Foto Dokumen Forum"), Expression("jIdForum.[FotoDokumenForum]")]
        public String IdForumFotoDokumenForum
        {
            get { return Fields.IdForumFotoDokumenForum[this]; }
            set { Fields.IdForumFotoDokumenForum[this] = value; }
        }

        [DisplayName("Id Forum Hidden User"), Expression("jIdForum.[HiddenUser]")]
        public Int32? IdForumHiddenUser
        {
            get { return Fields.IdForumHiddenUser[this]; }
            set { Fields.IdForumHiddenUser[this] = value; }
        }

        [DisplayName("Id Forum Timestamp"), Expression("jIdForum.[Timestamp]")]
        public DateTime? IdForumTimestamp
        {
            get { return Fields.IdForumTimestamp[this]; }
            set { Fields.IdForumTimestamp[this] = value; }
        }

        [DisplayName("Id User Respon Username"), Expression("jIdUserRespon.[Username]")]
        public String IdUserResponUsername
        {
            get { return Fields.IdUserResponUsername[this]; }
            set { Fields.IdUserResponUsername[this] = value; }
        }

        [DisplayName("User Respon"), Expression("jIdUserRespon.[DisplayName]"),MinSelectLevel(SelectLevel.List)]
        public String IdUserResponDisplayName
        {
            get { return Fields.IdUserResponDisplayName[this]; }
            set { Fields.IdUserResponDisplayName[this] = value; }
        }

        [DisplayName("Id User Respon Email"), Expression("jIdUserRespon.[Email]")]
        public String IdUserResponEmail
        {
            get { return Fields.IdUserResponEmail[this]; }
            set { Fields.IdUserResponEmail[this] = value; }
        }

        [DisplayName("Id User Respon Source"), Expression("jIdUserRespon.[Source]")]
        public String IdUserResponSource
        {
            get { return Fields.IdUserResponSource[this]; }
            set { Fields.IdUserResponSource[this] = value; }
        }

        [DisplayName("Id User Respon Password Hash"), Expression("jIdUserRespon.[PasswordHash]")]
        public String IdUserResponPasswordHash
        {
            get { return Fields.IdUserResponPasswordHash[this]; }
            set { Fields.IdUserResponPasswordHash[this] = value; }
        }

        [DisplayName("Id User Respon Password Salt"), Expression("jIdUserRespon.[PasswordSalt]")]
        public String IdUserResponPasswordSalt
        {
            get { return Fields.IdUserResponPasswordSalt[this]; }
            set { Fields.IdUserResponPasswordSalt[this] = value; }
        }

        [DisplayName("Id User Respon Last Directory Update"), Expression("jIdUserRespon.[LastDirectoryUpdate]")]
        public DateTime? IdUserResponLastDirectoryUpdate
        {
            get { return Fields.IdUserResponLastDirectoryUpdate[this]; }
            set { Fields.IdUserResponLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id User Respon User Image"), Expression("jIdUserRespon.[UserImage]")]
        public String IdUserResponUserImage
        {
            get { return Fields.IdUserResponUserImage[this]; }
            set { Fields.IdUserResponUserImage[this] = value; }
        }

        [DisplayName("Id User Respon Insert Date"), Expression("jIdUserRespon.[InsertDate]")]
        public DateTime? IdUserResponInsertDate
        {
            get { return Fields.IdUserResponInsertDate[this]; }
            set { Fields.IdUserResponInsertDate[this] = value; }
        }

        [DisplayName("Id User Respon Insert User Id"), Expression("jIdUserRespon.[InsertUserId]")]
        public Int32? IdUserResponInsertUserId
        {
            get { return Fields.IdUserResponInsertUserId[this]; }
            set { Fields.IdUserResponInsertUserId[this] = value; }
        }

        [DisplayName("Id User Respon Update Date"), Expression("jIdUserRespon.[UpdateDate]")]
        public DateTime? IdUserResponUpdateDate
        {
            get { return Fields.IdUserResponUpdateDate[this]; }
            set { Fields.IdUserResponUpdateDate[this] = value; }
        }

        [DisplayName("Id User Respon Update User Id"), Expression("jIdUserRespon.[UpdateUserId]")]
        public Int32? IdUserResponUpdateUserId
        {
            get { return Fields.IdUserResponUpdateUserId[this]; }
            set { Fields.IdUserResponUpdateUserId[this] = value; }
        }

        [DisplayName("Id User Respon Is Active"), Expression("jIdUserRespon.[IsActive]")]
        public Int16? IdUserResponIsActive
        {
            get { return Fields.IdUserResponIsActive[this]; }
            set { Fields.IdUserResponIsActive[this] = value; }
        }

        [DisplayName("Id User Respon Address"), Expression("jIdUserRespon.[Address]")]
        public String IdUserResponAddress
        {
            get { return Fields.IdUserResponAddress[this]; }
            set { Fields.IdUserResponAddress[this] = value; }
        }

        [DisplayName("Id User Respon Id Hubungan "), Expression("jIdUserRespon.[IdHubungan ]")]
        public Int32? IdUserResponIdHubungan
        {
            get { return Fields.IdUserResponIdHubungan[this]; }
            set { Fields.IdUserResponIdHubungan[this] = value; }
        }

        [DisplayName("Id User Respon No Ktp"), Expression("jIdUserRespon.[NoKTP]")]
        public String IdUserResponNoKtp
        {
            get { return Fields.IdUserResponNoKtp[this]; }
            set { Fields.IdUserResponNoKtp[this] = value; }
        }

        [DisplayName("Id User Respon No Kk"), Expression("jIdUserRespon.[NoKK]")]
        public String IdUserResponNoKk
        {
            get { return Fields.IdUserResponNoKk[this]; }
            set { Fields.IdUserResponNoKk[this] = value; }
        }

        [DisplayName("Id User Respon Phone Number"), Expression("jIdUserRespon.[PhoneNumber]")]
        public String IdUserResponPhoneNumber
        {
            get { return Fields.IdUserResponPhoneNumber[this]; }
            set { Fields.IdUserResponPhoneNumber[this] = value; }
        }

        [DisplayName("Id User Respon Wa Number"), Expression("jIdUserRespon.[WaNumber]")]
        public String IdUserResponWaNumber
        {
            get { return Fields.IdUserResponWaNumber[this]; }
            set { Fields.IdUserResponWaNumber[this] = value; }
        }

        [DisplayName("Id User Respon Option1"), Expression("jIdUserRespon.[Option1]")]
        public String IdUserResponOption1
        {
            get { return Fields.IdUserResponOption1[this]; }
            set { Fields.IdUserResponOption1[this] = value; }
        }

        [DisplayName("Id User Respon Option2"), Expression("jIdUserRespon.[Option2]")]
        public String IdUserResponOption2
        {
            get { return Fields.IdUserResponOption2[this]; }
            set { Fields.IdUserResponOption2[this] = value; }
        }

        [DisplayName("Id User Respon Option3"), Expression("jIdUserRespon.[Option3]")]
        public String IdUserResponOption3
        {
            get { return Fields.IdUserResponOption3[this]; }
            set { Fields.IdUserResponOption3[this] = value; }
        }

        [DisplayName("Id User Respon Jenis Kelamin"), Expression("jIdUserRespon.[JenisKelamin]")]
        public Int32? IdUserResponJenisKelamin
        {
            get { return Fields.IdUserResponJenisKelamin[this]; }
            set { Fields.IdUserResponJenisKelamin[this] = value; }
        }

        [DisplayName("Id User Respon Tanggal Lahir"), Expression("jIdUserRespon.[TanggalLahir]")]
        public DateTime? IdUserResponTanggalLahir
        {
            get { return Fields.IdUserResponTanggalLahir[this]; }
            set { Fields.IdUserResponTanggalLahir[this] = value; }
        }

        [DisplayName("Id User Respon Description"), Expression("jIdUserRespon.[Description]")]
        public String IdUserResponDescription
        {
            get { return Fields.IdUserResponDescription[this]; }
            set { Fields.IdUserResponDescription[this] = value; }
        }

        [DisplayName("Id User Respon Id Desa"), Expression("jIdUserRespon.[IdDesa]")]
        public Int64? IdUserResponIdDesa
        {
            get { return Fields.IdUserResponIdDesa[this]; }
            set { Fields.IdUserResponIdDesa[this] = value; }
        }

        [DisplayName("Id User Respon Pendidikan"), Expression("jIdUserRespon.[Pendidikan]")]
        public String IdUserResponPendidikan
        {
            get { return Fields.IdUserResponPendidikan[this]; }
            set { Fields.IdUserResponPendidikan[this] = value; }
        }

        [DisplayName("Id User Respon Id Version"), Expression("jIdUserRespon.[IdVersion]")]
        public Int32? IdUserResponIdVersion
        {
            get { return Fields.IdUserResponIdVersion[this]; }
            set { Fields.IdUserResponIdVersion[this] = value; }
        }

        [DisplayName("Id User Respon Fcm Token"), Expression("jIdUserRespon.[FcmToken]")]
        public String IdUserResponFcmToken
        {
            get { return Fields.IdUserResponFcmToken[this]; }
            set { Fields.IdUserResponFcmToken[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailForum; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DetailRespon; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailForumRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailForum;
            public Int32Field IdForum;
            public Int32Field IdUserRespon;
            public StringField DetailRespon;
            public StringField FotoDokumenRespon;
            public DateTimeField Timestamp;

            public Int32Field IdForumIdMasterForum;
            public Int32Field IdForumIdUserInsert;
            public StringField IdForumDetailForum;
            public StringField IdForumFotoDokumenForum;
            public Int32Field IdForumHiddenUser;
            public DateTimeField IdForumTimestamp;

            public StringField IdUserResponUsername;
            public StringField IdUserResponDisplayName;
            public StringField IdUserResponEmail;
            public StringField IdUserResponSource;
            public StringField IdUserResponPasswordHash;
            public StringField IdUserResponPasswordSalt;
            public DateTimeField IdUserResponLastDirectoryUpdate;
            public StringField IdUserResponUserImage;
            public DateTimeField IdUserResponInsertDate;
            public Int32Field IdUserResponInsertUserId;
            public DateTimeField IdUserResponUpdateDate;
            public Int32Field IdUserResponUpdateUserId;
            public Int16Field IdUserResponIsActive;
            public StringField IdUserResponAddress;
            public Int32Field IdUserResponIdHubungan;
            public StringField IdUserResponNoKtp;
            public StringField IdUserResponNoKk;
            public StringField IdUserResponPhoneNumber;
            public StringField IdUserResponWaNumber;
            public StringField IdUserResponOption1;
            public StringField IdUserResponOption2;
            public StringField IdUserResponOption3;
            public Int32Field IdUserResponJenisKelamin;
            public DateTimeField IdUserResponTanggalLahir;
            public StringField IdUserResponDescription;
            public Int64Field IdUserResponIdDesa;
            public StringField IdUserResponPendidikan;
            public Int32Field IdUserResponIdVersion;
            public StringField IdUserResponFcmToken;
        }
    }
}
