
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

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[UserPerdagangan]")]
    [DisplayName("Perdagangan"), InstanceName("Perdagangan")]
    [ReadPermission("Transaction:UserPerdagangan")]
    [ModifyPermission("Transaction:UserPerdagangan")]

    public sealed class UserPerdaganganRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id User Perdagangan"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdUserPerdagangan
        {
            get { return Fields.IdUserPerdagangan[this]; }
            set { Fields.IdUserPerdagangan[this] = value; }
        }

        [DisplayName("Iduser"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIduser"), TextualField("IduserUsername")]
        public Int32? Iduser
        {
            get { return Fields.Iduser[this]; }
            set { Fields.Iduser[this] = value; }
        }

        [DisplayName("Nama Brand Toko"), Size(255), QuickSearch]
        public String NamaBrandToko
        {
            get { return Fields.NamaBrandToko[this]; }
            set { Fields.NamaBrandToko[this] = value; }
        }

        [DisplayName("Jenis Dagangan"), Size(255)]
        public String JenisDagangan
        {
            get { return Fields.JenisDagangan[this]; }
            set { Fields.JenisDagangan[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        [DisplayName("Username"), Expression("jIduser.[Username]")]
        public String IduserUsername
        {
            get { return Fields.IduserUsername[this]; }
            set { Fields.IduserUsername[this] = value; }
        }

        [DisplayName("Display Name"), Expression("jIduser.[DisplayName]")]
        public String IduserDisplayName
        {
            get { return Fields.IduserDisplayName[this]; }
            set { Fields.IduserDisplayName[this] = value; }
        }

        [DisplayName("Iduser Email"), Expression("jIduser.[Email]")]
        public String IduserEmail
        {
            get { return Fields.IduserEmail[this]; }
            set { Fields.IduserEmail[this] = value; }
        }

        [DisplayName("Iduser Source"), Expression("jIduser.[Source]")]
        public String IduserSource
        {
            get { return Fields.IduserSource[this]; }
            set { Fields.IduserSource[this] = value; }
        }

        [DisplayName("Iduser Password Hash"), Expression("jIduser.[PasswordHash]")]
        public String IduserPasswordHash
        {
            get { return Fields.IduserPasswordHash[this]; }
            set { Fields.IduserPasswordHash[this] = value; }
        }

        [DisplayName("Iduser Password Salt"), Expression("jIduser.[PasswordSalt]")]
        public String IduserPasswordSalt
        {
            get { return Fields.IduserPasswordSalt[this]; }
            set { Fields.IduserPasswordSalt[this] = value; }
        }

        [DisplayName("Iduser Last Directory Update"), Expression("jIduser.[LastDirectoryUpdate]")]
        public DateTime? IduserLastDirectoryUpdate
        {
            get { return Fields.IduserLastDirectoryUpdate[this]; }
            set { Fields.IduserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Iduser User Image"), Expression("jIduser.[UserImage]")]
        public String IduserUserImage
        {
            get { return Fields.IduserUserImage[this]; }
            set { Fields.IduserUserImage[this] = value; }
        }

        [DisplayName("Iduser Insert Date"), Expression("jIduser.[InsertDate]")]
        public DateTime? IduserInsertDate
        {
            get { return Fields.IduserInsertDate[this]; }
            set { Fields.IduserInsertDate[this] = value; }
        }

        [DisplayName("Iduser Insert User Id"), Expression("jIduser.[InsertUserId]")]
        public Int32? IduserInsertUserId
        {
            get { return Fields.IduserInsertUserId[this]; }
            set { Fields.IduserInsertUserId[this] = value; }
        }

        [DisplayName("Iduser Update Date"), Expression("jIduser.[UpdateDate]")]
        public DateTime? IduserUpdateDate
        {
            get { return Fields.IduserUpdateDate[this]; }
            set { Fields.IduserUpdateDate[this] = value; }
        }

        [DisplayName("Iduser Update User Id"), Expression("jIduser.[UpdateUserId]")]
        public Int32? IduserUpdateUserId
        {
            get { return Fields.IduserUpdateUserId[this]; }
            set { Fields.IduserUpdateUserId[this] = value; }
        }

        [DisplayName("Iduser Is Active"), Expression("jIduser.[IsActive]")]
        public Int16? IduserIsActive
        {
            get { return Fields.IduserIsActive[this]; }
            set { Fields.IduserIsActive[this] = value; }
        }

        [DisplayName("Iduser Address"), Expression("jIduser.[Address]")]
        public String IduserAddress
        {
            get { return Fields.IduserAddress[this]; }
            set { Fields.IduserAddress[this] = value; }
        }

        [DisplayName("Iduser Id Hubungan "), Expression("jIduser.[IdHubungan ]")]
        public Int32? IduserIdHubungan
        {
            get { return Fields.IduserIdHubungan[this]; }
            set { Fields.IduserIdHubungan[this] = value; }
        }

        [DisplayName("Iduser No Ktp"), Expression("jIduser.[NoKTP]")]
        public String IduserNoKtp
        {
            get { return Fields.IduserNoKtp[this]; }
            set { Fields.IduserNoKtp[this] = value; }
        }

        [DisplayName("Iduser No Kk"), Expression("jIduser.[NoKK]")]
        public String IduserNoKk
        {
            get { return Fields.IduserNoKk[this]; }
            set { Fields.IduserNoKk[this] = value; }
        }

        [DisplayName("Iduser Phone Number"), Expression("jIduser.[PhoneNumber]")]
        public String IduserPhoneNumber
        {
            get { return Fields.IduserPhoneNumber[this]; }
            set { Fields.IduserPhoneNumber[this] = value; }
        }

        [DisplayName("Iduser Wa Number"), Expression("jIduser.[WaNumber]")]
        public String IduserWaNumber
        {
            get { return Fields.IduserWaNumber[this]; }
            set { Fields.IduserWaNumber[this] = value; }
        }

        [DisplayName("Iduser Option1"), Expression("jIduser.[Option1]")]
        public String IduserOption1
        {
            get { return Fields.IduserOption1[this]; }
            set { Fields.IduserOption1[this] = value; }
        }

        [DisplayName("Iduser Option2"), Expression("jIduser.[Option2]")]
        public String IduserOption2
        {
            get { return Fields.IduserOption2[this]; }
            set { Fields.IduserOption2[this] = value; }
        }

        [DisplayName("Iduser Option3"), Expression("jIduser.[Option3]")]
        public String IduserOption3
        {
            get { return Fields.IduserOption3[this]; }
            set { Fields.IduserOption3[this] = value; }
        }

        //[DisplayName("Iduser Option4"), Expression("jIduser.[Option4]")]
        //public String IduserOption4
        //{
        //    get { return Fields.IduserOption4[this]; }
        //    set { Fields.IduserOption4[this] = value; }
        //}

        [DisplayName("Iduser Tanggal Lahir"), Expression("jIduser.[TanggalLahir]")]
        public DateTime? IduserTanggalLahir
        {
            get { return Fields.IduserTanggalLahir[this]; }
            set { Fields.IduserTanggalLahir[this] = value; }
        }

        [DisplayName("Iduser Description"), Expression("jIduser.[Description]")]
        public String IduserDescription
        {
            get { return Fields.IduserDescription[this]; }
            set { Fields.IduserDescription[this] = value; }
        }

        [DisplayName("Detail Perdagangan"), MasterDetailRelation(foreignKey: "IdUserPerdagangan"), NotMapped]
        public List<DetailUserPerdaganganRow> DetailPerdagangan
        {
            get { return Fields.DetailPerdagangan[this]; }
            set { Fields.DetailPerdagangan[this] = value; }
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
            get { return Fields.IdUserPerdagangan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaBrandToko; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserPerdaganganRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdUserPerdagangan;
            public Int32Field Iduser;
            public StringField NamaBrandToko;
            public StringField JenisDagangan;
            public StringField Desc;

            public StringField IduserUsername;
            public StringField IduserDisplayName;
            public StringField IduserEmail;
            public StringField IduserSource;
            public StringField IduserPasswordHash;
            public StringField IduserPasswordSalt;
            public DateTimeField IduserLastDirectoryUpdate;
            public StringField IduserUserImage;
            public DateTimeField IduserInsertDate;
            public Int32Field IduserInsertUserId;
            public DateTimeField IduserUpdateDate;
            public Int32Field IduserUpdateUserId;
            public Int16Field IduserIsActive;
            public StringField IduserAddress;
            public Int32Field IduserIdHubungan;
            public StringField IduserNoKtp;
            public StringField IduserNoKk;
            public StringField IduserPhoneNumber;
            public StringField IduserWaNumber;
            public StringField IduserOption1;
            public StringField IduserOption2;
            public StringField IduserOption3;
           // public StringField IduserOption4;
            public DateTimeField IduserTanggalLahir;
            public StringField IduserDescription;
            public RowListField<DetailUserPerdaganganRow> DetailPerdagangan;
            public Int32Field IdPekerjaan;
            public StringField IdPekerjaanNamaPekerjaan;

        }
    }
}
