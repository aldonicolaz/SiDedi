
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[FcmMessage]")]
    [DisplayName("Fcm Message"), InstanceName("Fcm Message")]
    [ReadPermission("Transaction:FcmMessage")]
    [ModifyPermission("Transaction:FcmMessage")]
    public sealed class FcmMessageRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Message"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdMessage
        {
            get { return Fields.IdMessage[this]; }
            set { Fields.IdMessage[this] = value; }
        }

        [DisplayName("Id User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser"), TextualField("IdUserUsername")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }

        [DisplayName("Message"), Size(900), QuickSearch]
        public String Message
        {
            get { return Fields.Message[this]; }
            set { Fields.Message[this] = value; }
        }

        [DisplayName("Title"), Size(255)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Body"), Size(900)]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("Action"), Size(255)]
        public String Action
        {
            get { return Fields.Action[this]; }
            set { Fields.Action[this] = value; }
        }

        [DisplayName("Status")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Response"), Size(255)]
        public String Response
        {
            get { return Fields.Response[this]; }
            set { Fields.Response[this] = value; }
        }

        [DisplayName("Time Stamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss"), Width(200)]
        public DateTime? TimeStamp
        {
            get { return Fields.TimeStamp[this]; }
            set { Fields.TimeStamp[this] = value; }
        }

        [DisplayName("Id Parent Message"), ForeignKey("[dbo].[ParentMessage]", "IdParentMessage"), LeftJoin("jIdParentMessage"), TextualField("IdParentMessageMessage")]
        public Int32? IdParentMessage
        {
            get { return Fields.IdParentMessage[this]; }
            set { Fields.IdParentMessage[this] = value; }
        }

        [DisplayName("Status Wa"), Column("statusWa")]
        public Int32? StatusWa
        {
            get { return Fields.StatusWa[this]; }
            set { Fields.StatusWa[this] = value; }
        }

        [DisplayName("Id User Username"), Expression("jIdUser.[Username]"), MinSelectLevel(SelectLevel.List)]
        public String IdUserUsername
        {
            get { return Fields.IdUserUsername[this]; }
            set { Fields.IdUserUsername[this] = value; }
        }

        [DisplayName("Id User Display Name"), Expression("jIdUser.[DisplayName]"), MinSelectLevel(SelectLevel.List)]
        public String IdUserDisplayName
        {
            get { return Fields.IdUserDisplayName[this]; }
            set { Fields.IdUserDisplayName[this] = value; }
        }

        [DisplayName("Id User Email"), Expression("jIdUser.[Email]")]
        public String IdUserEmail
        {
            get { return Fields.IdUserEmail[this]; }
            set { Fields.IdUserEmail[this] = value; }
        }

        [DisplayName("Id User Source"), Expression("jIdUser.[Source]")]
        public String IdUserSource
        {
            get { return Fields.IdUserSource[this]; }
            set { Fields.IdUserSource[this] = value; }
        }

        [DisplayName("Id User Password Hash"), Expression("jIdUser.[PasswordHash]")]
        public String IdUserPasswordHash
        {
            get { return Fields.IdUserPasswordHash[this]; }
            set { Fields.IdUserPasswordHash[this] = value; }
        }

        [DisplayName("Id User Password Salt"), Expression("jIdUser.[PasswordSalt]")]
        public String IdUserPasswordSalt
        {
            get { return Fields.IdUserPasswordSalt[this]; }
            set { Fields.IdUserPasswordSalt[this] = value; }
        }

        [DisplayName("Id User Last Directory Update"), Expression("jIdUser.[LastDirectoryUpdate]")]
        public DateTime? IdUserLastDirectoryUpdate
        {
            get { return Fields.IdUserLastDirectoryUpdate[this]; }
            set { Fields.IdUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id User User Image"), Expression("jIdUser.[UserImage]")]
        public String IdUserUserImage
        {
            get { return Fields.IdUserUserImage[this]; }
            set { Fields.IdUserUserImage[this] = value; }
        }

        [DisplayName("Id User Insert Date"), Expression("jIdUser.[InsertDate]")]
        public DateTime? IdUserInsertDate
        {
            get { return Fields.IdUserInsertDate[this]; }
            set { Fields.IdUserInsertDate[this] = value; }
        }

        [DisplayName("Id User Insert User Id"), Expression("jIdUser.[InsertUserId]")]
        public Int32? IdUserInsertUserId
        {
            get { return Fields.IdUserInsertUserId[this]; }
            set { Fields.IdUserInsertUserId[this] = value; }
        }

        [DisplayName("Id User Update Date"), Expression("jIdUser.[UpdateDate]")]
        public DateTime? IdUserUpdateDate
        {
            get { return Fields.IdUserUpdateDate[this]; }
            set { Fields.IdUserUpdateDate[this] = value; }
        }

        [DisplayName("Id User Update User Id"), Expression("jIdUser.[UpdateUserId]")]
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

        [DisplayName("Id User Address"), Expression("jIdUser.[Address]")]
        public String IdUserAddress
        {
            get { return Fields.IdUserAddress[this]; }
            set { Fields.IdUserAddress[this] = value; }
        }

        [DisplayName("Id User Id Hubungan "), Expression("jIdUser.[IdHubungan ]")]
        public Int32? IdUserIdHubungan
        {
            get { return Fields.IdUserIdHubungan[this]; }
            set { Fields.IdUserIdHubungan[this] = value; }
        }

        [DisplayName("Id User No Ktp"), Expression("jIdUser.[NoKTP]")]
        public String IdUserNoKtp
        {
            get { return Fields.IdUserNoKtp[this]; }
            set { Fields.IdUserNoKtp[this] = value; }
        }

        [DisplayName("Id User No Kk"), Expression("jIdUser.[NoKK]")]
        public String IdUserNoKk
        {
            get { return Fields.IdUserNoKk[this]; }
            set { Fields.IdUserNoKk[this] = value; }
        }

        [DisplayName("Id User Phone Number"), Expression("jIdUser.[PhoneNumber]")]
        public String IdUserPhoneNumber
        {
            get { return Fields.IdUserPhoneNumber[this]; }
            set { Fields.IdUserPhoneNumber[this] = value; }
        }

        [DisplayName("Id User Wa Number"), Expression("jIdUser.[WaNumber]")]
        public String IdUserWaNumber
        {
            get { return Fields.IdUserWaNumber[this]; }
            set { Fields.IdUserWaNumber[this] = value; }
        }

        [DisplayName("Id User Option1"), Expression("jIdUser.[Option1]")]
        public String IdUserOption1
        {
            get { return Fields.IdUserOption1[this]; }
            set { Fields.IdUserOption1[this] = value; }
        }

        [DisplayName("Id User Option2"), Expression("jIdUser.[Option2]")]
        public String IdUserOption2
        {
            get { return Fields.IdUserOption2[this]; }
            set { Fields.IdUserOption2[this] = value; }
        }

        [DisplayName("Id User Option3"), Expression("jIdUser.[Option3]")]
        public String IdUserOption3
        {
            get { return Fields.IdUserOption3[this]; }
            set { Fields.IdUserOption3[this] = value; }
        }

        [DisplayName("Id User Jenis Kelamin"), Expression("jIdUser.[JenisKelamin]")]
        public Int32? IdUserJenisKelamin
        {
            get { return Fields.IdUserJenisKelamin[this]; }
            set { Fields.IdUserJenisKelamin[this] = value; }
        }

        [DisplayName("Id User Tanggal Lahir"), Expression("jIdUser.[TanggalLahir]")]
        public DateTime? IdUserTanggalLahir
        {
            get { return Fields.IdUserTanggalLahir[this]; }
            set { Fields.IdUserTanggalLahir[this] = value; }
        }

        [DisplayName("Id User Description"), Expression("jIdUser.[Description]")]
        public String IdUserDescription
        {
            get { return Fields.IdUserDescription[this]; }
            set { Fields.IdUserDescription[this] = value; }
        }

        [DisplayName("Id User Id Desa"), Expression("jIdUser.[IdDesa]")]
        public Int64? IdUserIdDesa
        {
            get { return Fields.IdUserIdDesa[this]; }
            set { Fields.IdUserIdDesa[this] = value; }
        }

        [DisplayName("Id User Pendidikan"), Expression("jIdUser.[Pendidikan]")]
        public String IdUserPendidikan
        {
            get { return Fields.IdUserPendidikan[this]; }
            set { Fields.IdUserPendidikan[this] = value; }
        }

        [DisplayName("Id User Id Version"), Expression("jIdUser.[IdVersion]")]
        public Int32? IdUserIdVersion
        {
            get { return Fields.IdUserIdVersion[this]; }
            set { Fields.IdUserIdVersion[this] = value; }
        }

        [DisplayName("Id User Fcm Token"), Expression("jIdUser.[FcmToken]")]
        public String IdUserFcmToken
        {
            get { return Fields.IdUserFcmToken[this]; }
            set { Fields.IdUserFcmToken[this] = value; }
        }

        [DisplayName("Id Parent Message Message"), Expression("jIdParentMessage.[Message]")]
        public String IdParentMessageMessage
        {
            get { return Fields.IdParentMessageMessage[this]; }
            set { Fields.IdParentMessageMessage[this] = value; }
        }

        [DisplayName("Id Parent Message Title"), Expression("jIdParentMessage.[Title]")]
        public String IdParentMessageTitle
        {
            get { return Fields.IdParentMessageTitle[this]; }
            set { Fields.IdParentMessageTitle[this] = value; }
        }

        [DisplayName("Id Parent Message Body"), Expression("jIdParentMessage.[Body]")]
        public String IdParentMessageBody
        {
            get { return Fields.IdParentMessageBody[this]; }
            set { Fields.IdParentMessageBody[this] = value; }
        }

        [DisplayName("Id Parent Message Time Stamp"), Expression("jIdParentMessage.[TimeStamp]")]
        public DateTime? IdParentMessageTimeStamp
        {
            get { return Fields.IdParentMessageTimeStamp[this]; }
            set { Fields.IdParentMessageTimeStamp[this] = value; }
        }

        [DisplayName("Id Parent Message Option1"), Expression("jIdParentMessage.[Option1]")]
        public Int32? IdParentMessageOption1
        {
            get { return Fields.IdParentMessageOption1[this]; }
            set { Fields.IdParentMessageOption1[this] = value; }
        }

        [DisplayName("Id Parent Message Option2"), Expression("jIdParentMessage.[Option2]")]
        public Int32? IdParentMessageOption2
        {
            get { return Fields.IdParentMessageOption2[this]; }
            set { Fields.IdParentMessageOption2[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdMessage; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Message; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FcmMessageRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdMessage;
            public Int32Field IdUser;
            public StringField Message;
            public StringField Title;
            public StringField Body;
            public StringField Action;
            public Int32Field Status;
            public StringField Response;
            public DateTimeField TimeStamp;
            public Int32Field IdParentMessage;
            public Int32Field StatusWa;

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
            public Int32Field IdUserJenisKelamin;
            public DateTimeField IdUserTanggalLahir;
            public StringField IdUserDescription;
            public Int64Field IdUserIdDesa;
            public StringField IdUserPendidikan;
            public Int32Field IdUserIdVersion;
            public StringField IdUserFcmToken;

            public StringField IdParentMessageMessage;
            public StringField IdParentMessageTitle;
            public StringField IdParentMessageBody;
            public DateTimeField IdParentMessageTimeStamp;
            public Int32Field IdParentMessageOption1;
            public Int32Field IdParentMessageOption2;
        }
    }
}
