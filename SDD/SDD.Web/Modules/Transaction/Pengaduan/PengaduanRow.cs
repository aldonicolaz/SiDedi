
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[Pengaduan]")]
    [DisplayName("Pengaduan"), InstanceName("Pengaduan")]
    [ReadPermission("Transaction:Pengaduan")]
    [ModifyPermission("Transaction:Pengaduan")]
    [LookupScript(Permission = "?")]
    public sealed class PengaduanRow : Row, IIdRow, INameRow
    {
        [SortOrder(1, descending: true)]
        [DisplayName("Id Pengaduan"), Identity]
        public Int32? IdPengaduan
        {
            get { return Fields.IdPengaduan[this]; }
            set { Fields.IdPengaduan[this] = value; }
        }

        [DisplayName("Detail Pengaduan"), MasterDetailRelation(foreignKey: "IdPengaduan"), NotMapped]
        public System.Collections.Generic.List<DetailPengaduanRow> DetailPengaduan
        {
            get { return Fields.DetailPengaduan[this]; }
            set { Fields.DetailPengaduan[this] = value; }
        }


        [DisplayName("Id User Pengadu"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserPengadu"), TextualField("IdUserPengaduUsername")]
        public Int32? IdUserPengadu
        {
            get { return Fields.IdUserPengadu[this]; }
            set { Fields.IdUserPengadu[this] = value; }
        }

        [DisplayName("Id Desa"), ForeignKey("[dbo].[MasterDesa]", "IdDesa"), LeftJoin("jIdDesa"), TextualField("IdDesaNamaDesa")]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Id Master Tujuan"), ForeignKey("[dbo].[MasterTujuanPengaduan]", "IdMasterTujuan"), LeftJoin("jIdMasterTujuan"), TextualField("IdMasterTujuanNamaTujuan")]
        public Int32? IdMasterTujuan
        {
            get { return Fields.IdMasterTujuan[this]; }
            set { Fields.IdMasterTujuan[this] = value; }
        }

        [DisplayName("Perihal Pengaduan"), Size(900), QuickSearch]
        public String PerihalPengaduan
        {
            get { return Fields.PerihalPengaduan[this]; }
            set { Fields.PerihalPengaduan[this] = value; }
        }
        [DisplayName("Foto Dokumen "), Size(900)]
        [MultipleFileUploadEditor(FilenameFormat = "FileUpload/Documents/~", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String FotoDokumen
        {
            get { return Fields.FotoDokumen[this]; }
            set { Fields.FotoDokumen[this] = value; }
        }

        [DisplayName("Tanggal & Waktu"),DisplayFormat("dd/mm/yyyy HH:mm")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        [DisplayName("Id User Pengadu Username"), Expression("jIdUserPengadu.[Username]")]
        public String IdUserPengaduUsername
        {
            get { return Fields.IdUserPengaduUsername[this]; }
            set { Fields.IdUserPengaduUsername[this] = value; }
        }

        [DisplayName("Nama Pengadu"), Expression("jIdUserPengadu.[DisplayName]")]
        public String IdUserPengaduDisplayName
        {
            get { return Fields.IdUserPengaduDisplayName[this]; }
            set { Fields.IdUserPengaduDisplayName[this] = value; }
        }

        [DisplayName("Id User Pengadu Email"), Expression("jIdUserPengadu.[Email]")]
        public String IdUserPengaduEmail
        {
            get { return Fields.IdUserPengaduEmail[this]; }
            set { Fields.IdUserPengaduEmail[this] = value; }
        }

        [DisplayName("Id User Pengadu Source"), Expression("jIdUserPengadu.[Source]")]
        public String IdUserPengaduSource
        {
            get { return Fields.IdUserPengaduSource[this]; }
            set { Fields.IdUserPengaduSource[this] = value; }
        }

        [DisplayName("Id User Pengadu Password Hash"), Expression("jIdUserPengadu.[PasswordHash]")]
        public String IdUserPengaduPasswordHash
        {
            get { return Fields.IdUserPengaduPasswordHash[this]; }
            set { Fields.IdUserPengaduPasswordHash[this] = value; }
        }

        [DisplayName("Id User Pengadu Password Salt"), Expression("jIdUserPengadu.[PasswordSalt]")]
        public String IdUserPengaduPasswordSalt
        {
            get { return Fields.IdUserPengaduPasswordSalt[this]; }
            set { Fields.IdUserPengaduPasswordSalt[this] = value; }
        }

        [DisplayName("Id User Pengadu Last Directory Update"), Expression("jIdUserPengadu.[LastDirectoryUpdate]")]
        public DateTime? IdUserPengaduLastDirectoryUpdate
        {
            get { return Fields.IdUserPengaduLastDirectoryUpdate[this]; }
            set { Fields.IdUserPengaduLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id User Pengadu User Image"), Expression("jIdUserPengadu.[UserImage]")]
        public String IdUserPengaduUserImage
        {
            get { return Fields.IdUserPengaduUserImage[this]; }
            set { Fields.IdUserPengaduUserImage[this] = value; }
        }

        [DisplayName("Id User Pengadu Insert Date"), Expression("jIdUserPengadu.[InsertDate]")]
        public DateTime? IdUserPengaduInsertDate
        {
            get { return Fields.IdUserPengaduInsertDate[this]; }
            set { Fields.IdUserPengaduInsertDate[this] = value; }
        }

        [DisplayName("Id User Pengadu Insert User Id"), Expression("jIdUserPengadu.[InsertUserId]")]
        public Int32? IdUserPengaduInsertUserId
        {
            get { return Fields.IdUserPengaduInsertUserId[this]; }
            set { Fields.IdUserPengaduInsertUserId[this] = value; }
        }

        [DisplayName("Id User Pengadu Update Date"), Expression("jIdUserPengadu.[UpdateDate]")]
        public DateTime? IdUserPengaduUpdateDate
        {
            get { return Fields.IdUserPengaduUpdateDate[this]; }
            set { Fields.IdUserPengaduUpdateDate[this] = value; }
        }

        [DisplayName("Id User Pengadu Update User Id"), Expression("jIdUserPengadu.[UpdateUserId]")]
        public Int32? IdUserPengaduUpdateUserId
        {
            get { return Fields.IdUserPengaduUpdateUserId[this]; }
            set { Fields.IdUserPengaduUpdateUserId[this] = value; }
        }

        [DisplayName("Id User Pengadu Is Active"), Expression("jIdUserPengadu.[IsActive]")]
        public Int16? IdUserPengaduIsActive
        {
            get { return Fields.IdUserPengaduIsActive[this]; }
            set { Fields.IdUserPengaduIsActive[this] = value; }
        }

        [DisplayName("Id User Pengadu Address"), Expression("jIdUserPengadu.[Address]")]
        public String IdUserPengaduAddress
        {
            get { return Fields.IdUserPengaduAddress[this]; }
            set { Fields.IdUserPengaduAddress[this] = value; }
        }

        [DisplayName("Id User Pengadu Id Hubungan "), Expression("jIdUserPengadu.[IdHubungan ]")]
        public Int32? IdUserPengaduIdHubungan
        {
            get { return Fields.IdUserPengaduIdHubungan[this]; }
            set { Fields.IdUserPengaduIdHubungan[this] = value; }
        }

        [DisplayName("Id User Pengadu No Ktp"), Expression("jIdUserPengadu.[NoKTP]")]
        public String IdUserPengaduNoKtp
        {
            get { return Fields.IdUserPengaduNoKtp[this]; }
            set { Fields.IdUserPengaduNoKtp[this] = value; }
        }

        [DisplayName("Id User Pengadu No Kk"), Expression("jIdUserPengadu.[NoKK]")]
        public String IdUserPengaduNoKk
        {
            get { return Fields.IdUserPengaduNoKk[this]; }
            set { Fields.IdUserPengaduNoKk[this] = value; }
        }

        [DisplayName("Id User Pengadu Phone Number"), Expression("jIdUserPengadu.[PhoneNumber]")]
        public String IdUserPengaduPhoneNumber
        {
            get { return Fields.IdUserPengaduPhoneNumber[this]; }
            set { Fields.IdUserPengaduPhoneNumber[this] = value; }
        }

        [DisplayName("Id User Pengadu Wa Number"), Expression("jIdUserPengadu.[WaNumber]")]
        public String IdUserPengaduWaNumber
        {
            get { return Fields.IdUserPengaduWaNumber[this]; }
            set { Fields.IdUserPengaduWaNumber[this] = value; }
        }

        [DisplayName("Id User Pengadu Option1"), Expression("jIdUserPengadu.[Option1]")]
        public String IdUserPengaduOption1
        {
            get { return Fields.IdUserPengaduOption1[this]; }
            set { Fields.IdUserPengaduOption1[this] = value; }
        }

        [DisplayName("Id User Pengadu Option2"), Expression("jIdUserPengadu.[Option2]")]
        public String IdUserPengaduOption2
        {
            get { return Fields.IdUserPengaduOption2[this]; }
            set { Fields.IdUserPengaduOption2[this] = value; }
        }

        [DisplayName("Id User Pengadu Option3"), Expression("jIdUserPengadu.[Option3]")]
        public String IdUserPengaduOption3
        {
            get { return Fields.IdUserPengaduOption3[this]; }
            set { Fields.IdUserPengaduOption3[this] = value; }
        }

        [DisplayName("Id User Pengadu Jenis Kelamin"), Expression("jIdUserPengadu.[JenisKelamin]")]
        public Int32? IdUserPengaduJenisKelamin
        {
            get { return Fields.IdUserPengaduJenisKelamin[this]; }
            set { Fields.IdUserPengaduJenisKelamin[this] = value; }
        }

        [DisplayName("Id User Pengadu Tanggal Lahir"), Expression("jIdUserPengadu.[TanggalLahir]")]
        public DateTime? IdUserPengaduTanggalLahir
        {
            get { return Fields.IdUserPengaduTanggalLahir[this]; }
            set { Fields.IdUserPengaduTanggalLahir[this] = value; }
        }

        [DisplayName("Id User Pengadu Description"), Expression("jIdUserPengadu.[Description]")]
        public String IdUserPengaduDescription
        {
            get { return Fields.IdUserPengaduDescription[this]; }
            set { Fields.IdUserPengaduDescription[this] = value; }
        }

        [DisplayName("Id User Pengadu Id Desa"), Expression("jIdUserPengadu.[IdDesa]")]
        public Int64? IdUserPengaduIdDesa
        {
            get { return Fields.IdUserPengaduIdDesa[this]; }
            set { Fields.IdUserPengaduIdDesa[this] = value; }
        }

        [DisplayName("Id User Pengadu Pendidikan"), Expression("jIdUserPengadu.[Pendidikan]")]
        public String IdUserPengaduPendidikan
        {
            get { return Fields.IdUserPengaduPendidikan[this]; }
            set { Fields.IdUserPengaduPendidikan[this] = value; }
        }

        [DisplayName("Id User Pengadu Id Version"), Expression("jIdUserPengadu.[IdVersion]")]
        public Int32? IdUserPengaduIdVersion
        {
            get { return Fields.IdUserPengaduIdVersion[this]; }
            set { Fields.IdUserPengaduIdVersion[this] = value; }
        }

        [DisplayName("Id User Pengadu Fcm Token"), Expression("jIdUserPengadu.[FcmToken]")]
        public String IdUserPengaduFcmToken
        {
            get { return Fields.IdUserPengaduFcmToken[this]; }
            set { Fields.IdUserPengaduFcmToken[this] = value; }
        }

        [DisplayName("Id Desa Id Kecamatan"), Expression("jIdDesa.[IdKecamatan]")]
        public Int32? IdDesaIdKecamatan
        {
            get { return Fields.IdDesaIdKecamatan[this]; }
            set { Fields.IdDesaIdKecamatan[this] = value; }
        }

        [DisplayName("Desa"), Expression("jIdDesa.[NamaDesa]")]
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

        [DisplayName("Id Desa No Kode Desa"), Expression("jIdDesa.[NoKodeDesa]")]
        public String IdDesaNoKodeDesa
        {
            get { return Fields.IdDesaNoKodeDesa[this]; }
            set { Fields.IdDesaNoKodeDesa[this] = value; }
        }

        [DisplayName("Tujuan Pengaduan"), Expression("jIdMasterTujuan.[NamaTujuan]")]
        public String IdMasterTujuanNamaTujuan
        {
            get { return Fields.IdMasterTujuanNamaTujuan[this]; }
            set { Fields.IdMasterTujuanNamaTujuan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdPengaduan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PerihalPengaduan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PengaduanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPengaduan;
            public Int32Field IdUserPengadu;
            public Int64Field IdDesa;
            public Int32Field IdMasterTujuan;
            public StringField PerihalPengaduan;
            public StringField FotoDokumen;
            public DateTimeField Timestamp;
            public RowListField<DetailPengaduanRow> DetailPengaduan;

            public StringField IdUserPengaduUsername;
            public StringField IdUserPengaduDisplayName;
            public StringField IdUserPengaduEmail;
            public StringField IdUserPengaduSource;
            public StringField IdUserPengaduPasswordHash;
            public StringField IdUserPengaduPasswordSalt;
            public DateTimeField IdUserPengaduLastDirectoryUpdate;
            public StringField IdUserPengaduUserImage;
            public DateTimeField IdUserPengaduInsertDate;
            public Int32Field IdUserPengaduInsertUserId;
            public DateTimeField IdUserPengaduUpdateDate;
            public Int32Field IdUserPengaduUpdateUserId;
            public Int16Field IdUserPengaduIsActive;
            public StringField IdUserPengaduAddress;
            public Int32Field IdUserPengaduIdHubungan;
            public StringField IdUserPengaduNoKtp;
            public StringField IdUserPengaduNoKk;
            public StringField IdUserPengaduPhoneNumber;
            public StringField IdUserPengaduWaNumber;
            public StringField IdUserPengaduOption1;
            public StringField IdUserPengaduOption2;
            public StringField IdUserPengaduOption3;
            public Int32Field IdUserPengaduJenisKelamin;
            public DateTimeField IdUserPengaduTanggalLahir;
            public StringField IdUserPengaduDescription;
            public Int64Field IdUserPengaduIdDesa;
            public StringField IdUserPengaduPendidikan;
            public Int32Field IdUserPengaduIdVersion;
            public StringField IdUserPengaduFcmToken;

            public Int32Field IdDesaIdKecamatan;
            public StringField IdDesaNamaDesa;
            public StringField IdDesaLantitudeDesa;
            public StringField IdDesaLongtitudeDesa;
            public StringField IdDesaDescDesa;
            public StringField IdDesaLogoDesa;
            public StringField IdDesaNoKodeDesa;

            public StringField IdMasterTujuanNamaTujuan;
        }
    }
}
