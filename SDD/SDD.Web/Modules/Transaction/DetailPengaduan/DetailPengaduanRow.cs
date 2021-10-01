
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailPengaduan]")]
    [DisplayName("Detail Pengaduan"), InstanceName("Detail Pengaduan")]
    [ReadPermission("Transaction:DetailPengaduan")]
    [ModifyPermission("Transaction:DetailPengaduan")]
    [LookupScript(Permission = "*")]
    public sealed class DetailPengaduanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Detail Pengaduan"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdDetailPengaduan
        {
            get { return Fields.IdDetailPengaduan[this]; }
            set { Fields.IdDetailPengaduan[this] = value; }
        }

        [DisplayName("Id Pengaduan"), ForeignKey("[dbo].[Pengaduan]", "IdPengaduan"), LeftJoin("jIdPengaduan"), TextualField("IdPengaduanPerihalPengaduan"),LookupInclude]
        public Int32? IdPengaduan
        {
            get { return Fields.IdPengaduan[this]; }
            set { Fields.IdPengaduan[this] = value; }
        }

        [DisplayName("User Penanggap"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserPenanggap")]
        public Int32? IdUserPenanggap
        {
            get { return Fields.IdUserPenanggap[this]; }
            set { Fields.IdUserPenanggap[this] = value; }
        }

        [DisplayName("Tanggapan"), Size(900), QuickSearch]
        public String Tanggapan
        {
            get { return Fields.Tanggapan[this]; }
            set { Fields.Tanggapan[this] = value; }
        }

        [DisplayName("Tanggal"), DisplayFormat("dd/mm/yyyy HH:mm")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        [DisplayName("Id Pengaduan Id User Pengadu"), Expression("jIdPengaduan.[IdUserPengadu]")]
        public Int32? IdPengaduanIdUserPengadu
        {
            get { return Fields.IdPengaduanIdUserPengadu[this]; }
            set { Fields.IdPengaduanIdUserPengadu[this] = value; }
        }

        [DisplayName("Id Pengaduan Id Desa"), Expression("jIdPengaduan.[IdDesa]")]
        public Int64? IdPengaduanIdDesa
        {
            get { return Fields.IdPengaduanIdDesa[this]; }
            set { Fields.IdPengaduanIdDesa[this] = value; }
        }

        [DisplayName("Id Pengaduan Id Master Tujuan"), Expression("jIdPengaduan.[IdMasterTujuan]")]
        public Int32? IdPengaduanIdMasterTujuan
        {
            get { return Fields.IdPengaduanIdMasterTujuan[this]; }
            set { Fields.IdPengaduanIdMasterTujuan[this] = value; }
        }

        [DisplayName("Id Pengaduan Perihal Pengaduan"), Expression("jIdPengaduan.[PerihalPengaduan]")]
        public String IdPengaduanPerihalPengaduan
        {
            get { return Fields.IdPengaduanPerihalPengaduan[this]; }
            set { Fields.IdPengaduanPerihalPengaduan[this] = value; }
        }

        [DisplayName("Id Pengaduan Foto Dokumen"), Expression("jIdPengaduan.[FotoDokumen]")]
        public String IdPengaduanFotoDokumen
        {
            get { return Fields.IdPengaduanFotoDokumen[this]; }
            set { Fields.IdPengaduanFotoDokumen[this] = value; }
        }

        [DisplayName("Id Pengaduan Timestamp"), Expression("jIdPengaduan.[Timestamp]")]
        public DateTime? IdPengaduanTimestamp
        {
            get { return Fields.IdPengaduanTimestamp[this]; }
            set { Fields.IdPengaduanTimestamp[this] = value; }
        }

        [DisplayName("Id User Penanggap Username"), Expression("jIdUserPenanggap.[Username]")]
        public String IdUserPenanggapUsername
        {
            get { return Fields.IdUserPenanggapUsername[this]; }
            set { Fields.IdUserPenanggapUsername[this] = value; }
        }

        [DisplayName("Nama Penanggap"),Expression("jIdUserPenanggap.[DisplayName]"),MinSelectLevel(SelectLevel.List)]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Id User Penanggap Email"), Expression("jIdUserPenanggap.[Email]")]
        public String IdUserPenanggapEmail
        {
            get { return Fields.IdUserPenanggapEmail[this]; }
            set { Fields.IdUserPenanggapEmail[this] = value; }
        }

        [DisplayName("Id User Penanggap Source"), Expression("jIdUserPenanggap.[Source]")]
        public String IdUserPenanggapSource
        {
            get { return Fields.IdUserPenanggapSource[this]; }
            set { Fields.IdUserPenanggapSource[this] = value; }
        }

        [DisplayName("Id User Penanggap Password Hash"), Expression("jIdUserPenanggap.[PasswordHash]")]
        public String IdUserPenanggapPasswordHash
        {
            get { return Fields.IdUserPenanggapPasswordHash[this]; }
            set { Fields.IdUserPenanggapPasswordHash[this] = value; }
        }

        [DisplayName("Id User Penanggap Password Salt"), Expression("jIdUserPenanggap.[PasswordSalt]")]
        public String IdUserPenanggapPasswordSalt
        {
            get { return Fields.IdUserPenanggapPasswordSalt[this]; }
            set { Fields.IdUserPenanggapPasswordSalt[this] = value; }
        }

        [DisplayName("Id User Penanggap Last Directory Update"), Expression("jIdUserPenanggap.[LastDirectoryUpdate]")]
        public DateTime? IdUserPenanggapLastDirectoryUpdate
        {
            get { return Fields.IdUserPenanggapLastDirectoryUpdate[this]; }
            set { Fields.IdUserPenanggapLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id User Penanggap User Image"), Expression("jIdUserPenanggap.[UserImage]")]
        public String IdUserPenanggapUserImage
        {
            get { return Fields.IdUserPenanggapUserImage[this]; }
            set { Fields.IdUserPenanggapUserImage[this] = value; }
        }

        [DisplayName("Id User Penanggap Insert Date"), Expression("jIdUserPenanggap.[InsertDate]")]
        public DateTime? IdUserPenanggapInsertDate
        {
            get { return Fields.IdUserPenanggapInsertDate[this]; }
            set { Fields.IdUserPenanggapInsertDate[this] = value; }
        }

        [DisplayName("Id User Penanggap Insert User Id"), Expression("jIdUserPenanggap.[InsertUserId]")]
        public Int32? IdUserPenanggapInsertUserId
        {
            get { return Fields.IdUserPenanggapInsertUserId[this]; }
            set { Fields.IdUserPenanggapInsertUserId[this] = value; }
        }

        [DisplayName("Id User Penanggap Update Date"), Expression("jIdUserPenanggap.[UpdateDate]")]
        public DateTime? IdUserPenanggapUpdateDate
        {
            get { return Fields.IdUserPenanggapUpdateDate[this]; }
            set { Fields.IdUserPenanggapUpdateDate[this] = value; }
        }

        [DisplayName("Id User Penanggap Update User Id"), Expression("jIdUserPenanggap.[UpdateUserId]")]
        public Int32? IdUserPenanggapUpdateUserId
        {
            get { return Fields.IdUserPenanggapUpdateUserId[this]; }
            set { Fields.IdUserPenanggapUpdateUserId[this] = value; }
        }

        [DisplayName("Id User Penanggap Is Active"), Expression("jIdUserPenanggap.[IsActive]")]
        public Int16? IdUserPenanggapIsActive
        {
            get { return Fields.IdUserPenanggapIsActive[this]; }
            set { Fields.IdUserPenanggapIsActive[this] = value; }
        }

        [DisplayName("Id User Penanggap Address"), Expression("jIdUserPenanggap.[Address]")]
        public String IdUserPenanggapAddress
        {
            get { return Fields.IdUserPenanggapAddress[this]; }
            set { Fields.IdUserPenanggapAddress[this] = value; }
        }

        [DisplayName("Id User Penanggap Id Hubungan "), Expression("jIdUserPenanggap.[IdHubungan ]")]
        public Int32? IdUserPenanggapIdHubungan
        {
            get { return Fields.IdUserPenanggapIdHubungan[this]; }
            set { Fields.IdUserPenanggapIdHubungan[this] = value; }
        }

        [DisplayName("Id User Penanggap No Ktp"), Expression("jIdUserPenanggap.[NoKTP]")]
        public String IdUserPenanggapNoKtp
        {
            get { return Fields.IdUserPenanggapNoKtp[this]; }
            set { Fields.IdUserPenanggapNoKtp[this] = value; }
        }

        [DisplayName("Id User Penanggap No Kk"), Expression("jIdUserPenanggap.[NoKK]")]
        public String IdUserPenanggapNoKk
        {
            get { return Fields.IdUserPenanggapNoKk[this]; }
            set { Fields.IdUserPenanggapNoKk[this] = value; }
        }

        [DisplayName("Id User Penanggap Phone Number"), Expression("jIdUserPenanggap.[PhoneNumber]")]
        public String IdUserPenanggapPhoneNumber
        {
            get { return Fields.IdUserPenanggapPhoneNumber[this]; }
            set { Fields.IdUserPenanggapPhoneNumber[this] = value; }
        }

        [DisplayName("Id User Penanggap Wa Number"), Expression("jIdUserPenanggap.[WaNumber]")]
        public String IdUserPenanggapWaNumber
        {
            get { return Fields.IdUserPenanggapWaNumber[this]; }
            set { Fields.IdUserPenanggapWaNumber[this] = value; }
        }

        [DisplayName("Id User Penanggap Option1"), Expression("jIdUserPenanggap.[Option1]")]
        public String IdUserPenanggapOption1
        {
            get { return Fields.IdUserPenanggapOption1[this]; }
            set { Fields.IdUserPenanggapOption1[this] = value; }
        }

        [DisplayName("Id User Penanggap Option2"), Expression("jIdUserPenanggap.[Option2]")]
        public String IdUserPenanggapOption2
        {
            get { return Fields.IdUserPenanggapOption2[this]; }
            set { Fields.IdUserPenanggapOption2[this] = value; }
        }

        [DisplayName("Id User Penanggap Option3"), Expression("jIdUserPenanggap.[Option3]")]
        public String IdUserPenanggapOption3
        {
            get { return Fields.IdUserPenanggapOption3[this]; }
            set { Fields.IdUserPenanggapOption3[this] = value; }
        }

        [DisplayName("Id User Penanggap Jenis Kelamin"), Expression("jIdUserPenanggap.[JenisKelamin]")]
        public Int32? IdUserPenanggapJenisKelamin
        {
            get { return Fields.IdUserPenanggapJenisKelamin[this]; }
            set { Fields.IdUserPenanggapJenisKelamin[this] = value; }
        }

        [DisplayName("Id User Penanggap Tanggal Lahir"), Expression("jIdUserPenanggap.[TanggalLahir]")]
        public DateTime? IdUserPenanggapTanggalLahir
        {
            get { return Fields.IdUserPenanggapTanggalLahir[this]; }
            set { Fields.IdUserPenanggapTanggalLahir[this] = value; }
        }

        [DisplayName("Id User Penanggap Description"), Expression("jIdUserPenanggap.[Description]")]
        public String IdUserPenanggapDescription
        {
            get { return Fields.IdUserPenanggapDescription[this]; }
            set { Fields.IdUserPenanggapDescription[this] = value; }
        }

        [DisplayName("Id User Penanggap Id Desa"), Expression("jIdUserPenanggap.[IdDesa]")]
        public Int64? IdUserPenanggapIdDesa
        {
            get { return Fields.IdUserPenanggapIdDesa[this]; }
            set { Fields.IdUserPenanggapIdDesa[this] = value; }
        }

        [DisplayName("Id User Penanggap Pendidikan"), Expression("jIdUserPenanggap.[Pendidikan]")]
        public String IdUserPenanggapPendidikan
        {
            get { return Fields.IdUserPenanggapPendidikan[this]; }
            set { Fields.IdUserPenanggapPendidikan[this] = value; }
        }

        [DisplayName("Id User Penanggap Id Version"), Expression("jIdUserPenanggap.[IdVersion]")]
        public Int32? IdUserPenanggapIdVersion
        {
            get { return Fields.IdUserPenanggapIdVersion[this]; }
            set { Fields.IdUserPenanggapIdVersion[this] = value; }
        }

        [DisplayName("Id User Penanggap Fcm Token"), Expression("jIdUserPenanggap.[FcmToken]")]
        public String IdUserPenanggapFcmToken
        {
            get { return Fields.IdUserPenanggapFcmToken[this]; }
            set { Fields.IdUserPenanggapFcmToken[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailPengaduan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Tanggapan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailPengaduanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailPengaduan;
            public Int32Field IdPengaduan;
            public Int32Field IdUserPenanggap;
            public StringField Tanggapan;
            public DateTimeField Timestamp;

            public Int32Field IdPengaduanIdUserPengadu;
            public Int64Field IdPengaduanIdDesa;
            public Int32Field IdPengaduanIdMasterTujuan;
            public StringField IdPengaduanPerihalPengaduan;
            public StringField IdPengaduanFotoDokumen;
            public DateTimeField IdPengaduanTimestamp;

            public StringField IdUserPenanggapUsername;
            public StringField DisplayName;
            public StringField IdUserPenanggapEmail;
            public StringField IdUserPenanggapSource;
            public StringField IdUserPenanggapPasswordHash;
            public StringField IdUserPenanggapPasswordSalt;
            public DateTimeField IdUserPenanggapLastDirectoryUpdate;
            public StringField IdUserPenanggapUserImage;
            public DateTimeField IdUserPenanggapInsertDate;
            public Int32Field IdUserPenanggapInsertUserId;
            public DateTimeField IdUserPenanggapUpdateDate;
            public Int32Field IdUserPenanggapUpdateUserId;
            public Int16Field IdUserPenanggapIsActive;
            public StringField IdUserPenanggapAddress;
            public Int32Field IdUserPenanggapIdHubungan;
            public StringField IdUserPenanggapNoKtp;
            public StringField IdUserPenanggapNoKk;
            public StringField IdUserPenanggapPhoneNumber;
            public StringField IdUserPenanggapWaNumber;
            public StringField IdUserPenanggapOption1;
            public StringField IdUserPenanggapOption2;
            public StringField IdUserPenanggapOption3;
            public Int32Field IdUserPenanggapJenisKelamin;
            public DateTimeField IdUserPenanggapTanggalLahir;
            public StringField IdUserPenanggapDescription;
            public Int64Field IdUserPenanggapIdDesa;
            public StringField IdUserPenanggapPendidikan;
            public Int32Field IdUserPenanggapIdVersion;
            public StringField IdUserPenanggapFcmToken;
        }
    }
}
