
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[AparaturDesa]")]
    [DisplayName("Aparatur Desa"), InstanceName("Aparatur Desa")]
    [ReadPermission("Transaction:AparaturDesa")]
    [ModifyPermission("Transaction:AparaturDesa")]
    public sealed class AparaturDesaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Aparatur Desa"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdAparaturDesa
        {
            get { return Fields.IdAparaturDesa[this]; }
            set { Fields.IdAparaturDesa[this] = value; }
        }

        [DisplayName("Id User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser"), TextualField("IdUserUsername")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }

        [DisplayName("Desa"), ForeignKey("[dbo].[MasterDesa]", "IdDesa"), LeftJoin("jIdDesa"), TextualField("IdDesaNamaDesa")]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Jabatan"), ForeignKey("[dbo].[MasterJabatan]", "IdJabatan"), LeftJoin("jIdJabatan"), TextualField("IdJabatanNamaJabatan")]
        public Int32? IdJabatan
        {
            get { return Fields.IdJabatan[this]; }
            set { Fields.IdJabatan[this] = value; }
        }

        [DisplayName("Status Aparatur")]
        public Int32? StatusAparatur
        {
            get { return Fields.StatusAparatur[this]; }
            set { Fields.StatusAparatur[this] = value; }
        }

        [DisplayName("Periode Awal")]
        public DateTime? PeriodeAwal
        {
            get { return Fields.PeriodeAwal[this]; }
            set { Fields.PeriodeAwal[this] = value; }
        }

        [DisplayName("Periode Akhir")]
        public DateTime? PeriodeAkhir
        {
            get { return Fields.PeriodeAkhir[this]; }
            set { Fields.PeriodeAkhir[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255), QuickSearch]
        public String DescAparaturDesa
        {
            get { return Fields.DescAparaturDesa[this]; }
            set { Fields.DescAparaturDesa[this] = value; }
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

        //[DisplayName("Id User Option4"), Expression("jIdUser.[Option4]")]
        //public String IdUserOption4
        //{
        //    get { return Fields.IdUserOption4[this]; }
        //    set { Fields.IdUserOption4[this] = value; }
        //}

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

        [DisplayName("Id Desa Id Kecamatan"), Expression("jIdDesa.[IdKecamatan]")]
        public Int32? IdDesaIdKecamatan
        {
            get { return Fields.IdDesaIdKecamatan[this]; }
            set { Fields.IdDesaIdKecamatan[this] = value; }
        }

        [DisplayName("Nama Desa"), Expression("jIdDesa.[NamaDesa]")]
        public String IdDesaNamaDesa
        {
            get { return Fields.IdDesaNamaDesa[this]; }
            set { Fields.IdDesaNamaDesa[this] = value; }
        }

        [DisplayName("Id Desa Lantitude Desa"), Expression("jIdDesa.[LantitudeDesa]")]
        public String IdDesaLantitudeDesa
        {
            get { return Fields.IdDesaLantitudeDesa[this]; }
            set { Fields.IdDesaLantitudeDesa[this] = value; }
        }

        [DisplayName("Id Desa Longtitude Desa"), Expression("jIdDesa.[LongtitudeDesa]")]
        public String IdDesaLongtitudeDesa
        {
            get { return Fields.IdDesaLongtitudeDesa[this]; }
            set { Fields.IdDesaLongtitudeDesa[this] = value; }
        }

        [DisplayName("Id Desa Desc Desa"), Expression("jIdDesa.[DescDesa]")]
        public String IdDesaDescDesa
        {
            get { return Fields.IdDesaDescDesa[this]; }
            set { Fields.IdDesaDescDesa[this] = value; }
        }

        [DisplayName("Id Desa Logo Desa"), Expression("jIdDesa.[LogoDesa]")]
        public String IdDesaLogoDesa
        {
            get { return Fields.IdDesaLogoDesa[this]; }
            set { Fields.IdDesaLogoDesa[this] = value; }
        }

        [DisplayName("Nama Jabatan"), Expression("jIdJabatan.[NamaJabatan]")]
        public String IdJabatanNamaJabatan
        {
            get { return Fields.IdJabatanNamaJabatan[this]; }
            set { Fields.IdJabatanNamaJabatan[this] = value; }
        }

        [DisplayName("Id Jabatan Desc"), Expression("jIdJabatan.[Desc]")]
        public String IdJabatanDesc
        {
            get { return Fields.IdJabatanDesc[this]; }
            set { Fields.IdJabatanDesc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdAparaturDesa; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DescAparaturDesa; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AparaturDesaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAparaturDesa;
            public Int32Field IdUser;
            public Int64Field IdDesa;
            public Int32Field IdJabatan;
            public Int32Field StatusAparatur;
            public DateTimeField PeriodeAwal;
            public DateTimeField PeriodeAkhir;
            public StringField DescAparaturDesa;

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

            public Int32Field IdDesaIdKecamatan;
            public StringField IdDesaNamaDesa;
            public StringField IdDesaLantitudeDesa;
            public StringField IdDesaLongtitudeDesa;
            public StringField IdDesaDescDesa;
            public StringField IdDesaLogoDesa;

            public StringField IdJabatanNamaJabatan;
            public StringField IdJabatanDesc;
        }
    }
}
