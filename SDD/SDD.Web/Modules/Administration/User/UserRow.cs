
namespace SDD.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("SDD_Connection"), Module("Administration"), TableName("Users")]
    [DisplayName("Users"), InstanceName("User")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    //[LookupScript(Permission = PermissionKeys.Security)]
    [LookupScript(Permission ="*")]
    public sealed class UserRow : LoggingRow, IIdRow, INameRow, IIsActiveRow
    {
        [DisplayName("User Id"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch, LookupInclude]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Source"), Size(4), NotNull, Insertable(false), Updatable(false), DefaultValue("site")]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull, LookupInclude,QuickSearch]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100),QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get { return Fields.PasswordConfirm[this]; }
            set { Fields.PasswordConfirm[this] = value; }
        }

        [DisplayName("Last Directory Update"), Insertable(false), Updatable(false)]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Alamat"), Size(100),QuickSearch]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }
        [DisplayName("Hubungan"), Size(100), ForeignKey("[dbo].[MasterHubungan]", "IdHubungan"), LeftJoin("jIdHubungan")]
        public Int32? IdHubungan
        {
            get { return Fields.IdHubungan[this]; }
            set { Fields.IdHubungan[this] = value; }
        }
        [DisplayName("Nama Hubungan"),Expression("jIdHubungan.NamaHubungan")]
        public String NamaHubungan
        {
            get { return Fields.NamaHubungan[this]; }
            set { Fields.NamaHubungan[this] = value; }
        }
        [DisplayName("No KTP"), Size(100),QuickSearch]
        public String NoKTP
        {
            get { return Fields.NoKTP[this]; }
            set { Fields.NoKTP[this] = value; }
        }

        [DisplayName("No KK"), Size(100),QuickSearch]
        public String NoKK
        {
            get { return Fields.NoKK[this]; }
            set { Fields.NoKK[this] = value; }
        }

        [DisplayName("Nomor Handphone"), Size(100),QuickSearch]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }
        [DisplayName("Nomor Whatsapp"), Size(100),QuickSearch]
        public String WaNumber
        {
            get { return Fields.WaNumber[this]; }
            set { Fields.WaNumber[this] = value; }
        }

        [DisplayName("Draf Profil"), Size(100)]
        public String Option1
        {
            get { return Fields.Option1[this]; }
            set { Fields.Option1[this] = value; }
        }

        [DisplayName("Option2"), Size(100)]
        public String Option2
        {
            get { return Fields.Option2[this]; }
            set { Fields.Option2[this] = value; }
        }

        [DisplayName("Option3"), Size(100)]
        public String Option3
        {
            get { return Fields.Option3[this]; }
            set { Fields.Option3[this] = value; }
        }

        [DisplayName("Jenis Kelamin"), Size(100)]
        public Int32? JenisKelamin
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

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }


        [DisplayName("Desa"), ForeignKey("[dbo].[MasterDesa]", "IdDesa"), LeftJoin("jIdDesa")]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }
        [DisplayName("Nama Desa"), Expression("jIdDesa.[NamaDesa]")]
        public String IdDesaNamaDesa
        {
            get { return Fields.IdDesaNamaDesa[this]; }
            set { Fields.IdDesaNamaDesa[this] = value; }
        }

        [DisplayName("Pendidikan")]
        public String Pendidikan
        {
            get { return Fields.Pendidikan[this]; }
            set { Fields.Pendidikan[this] = value; }
        }
        [DisplayName("FCM Token"), Size(250)]
        public String FcmToken
        {
            get { return Fields.FcmToken[this]; }
            set { Fields.FcmToken[this] = value; }
        }

        [DisplayName("IdVersion")]
        public Int32? IdVersion
        {
            get { return Fields.IdVersion[this]; }
            set { Fields.IdVersion[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int64Field IdDesa;
            public Int32Field UserId;
            public StringField Username;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public StringField DisplayName;
            public StringField Email;
            public StringField UserImage;
            public DateTimeField LastDirectoryUpdate;
            public Int16Field IsActive;
            public StringField Password;
            public StringField PasswordConfirm;
            public StringField Address;
            public Int32Field IdHubungan;
            public StringField NoKTP;
            public StringField NoKK;
            public StringField PhoneNumber;
            public StringField WaNumber;
            public StringField Option1;
            public StringField Option2;
            public StringField Option3;
            public Int32Field JenisKelamin;
            public DateTimeField TanggalLahir;
            public StringField Description;
            public StringField NamaHubungan;
            public StringField IdDesaNamaDesa;
            public StringField Pendidikan;
            public StringField FcmToken;
            public Int32Field IdVersion;
        }
    }
}