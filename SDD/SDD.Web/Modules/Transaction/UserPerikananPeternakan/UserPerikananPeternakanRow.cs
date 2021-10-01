
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

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[UserPerikananPeternakan]")]
    [DisplayName("Perikanan Peternakan"), InstanceName("Perikanan Peternakan")]
    [ReadPermission("Transaction:UserPerikananPeternakan")]
    [ModifyPermission("Transaction:UserPerikananPeternakan")]
    public sealed class UserPerikananPeternakanRow : Row, IIdRow
    {
        [DisplayName("Id User Perikanan"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdUserPerikanan
        {
            get { return Fields.IdUserPerikanan[this]; }
            set { Fields.IdUserPerikanan[this] = value; }
        }
       
        [DisplayName("Id User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser"), TextualField("IdUserUsername")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }

        [DisplayName("Jenis Budidaya"), ForeignKey("[dbo].[MasterHasilBudidaya]", "IdHasilBudidaya"), LeftJoin("jIdHasilBudidaya"), TextualField("IdHasilBudidayaNamaHasil"),LookupInclude]
        public Int32? IdHasilBudidaya
        {
            get { return Fields.IdHasilBudidaya[this]; }
            set { Fields.IdHasilBudidaya[this] = value; }
        }

        [DisplayName("Total Bibit"), Size(38)]
        public Decimal? TotalBibit
        {
            get { return Fields.TotalBibit[this]; }
            set { Fields.TotalBibit[this] = value; }
        }

        [DisplayName("Luas Lahan"), Size(38)]
        public Decimal? LuasLahan
        {
            get { return Fields.LuasLahan[this]; }
            set { Fields.LuasLahan[this] = value; }
        }

        [DisplayName("Jumlah Pekerja")]
        public Int32? JumlahPekerja
        {
            get { return Fields.JumlahPekerja[this]; }
            set { Fields.JumlahPekerja[this] = value; }
        }

        [DisplayName("Periode Panen")]
        public Int32? PeriodePanen
        {
            get { return Fields.PeriodePanen[this]; }
            set { Fields.PeriodePanen[this] = value; }
        }

        [DisplayName("Hasil Panen"), Size(38)]
        public Decimal? HasilPanen
        {
            get { return Fields.HasilPanen[this]; }
            set { Fields.HasilPanen[this] = value; }
        }

        [DisplayName("Nominal Hasil Panen"), Size(19), Scale(4)]
        public Decimal? NominalHasilPanen
        {
            get { return Fields.NominalHasilPanen[this]; }
            set { Fields.NominalHasilPanen[this] = value; }
        }

        [DisplayName("Id User Username"), Expression("jIdUser.[Username]")]
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

        [DisplayName("Id Hasil Budidaya Id Master Budidaya"), Expression("jIdHasilBudidaya.[IdMasterBudidaya]")]
        public Int32? IdHasilBudidayaIdMasterBudidaya
        {
            get { return Fields.IdHasilBudidayaIdMasterBudidaya[this]; }
            set { Fields.IdHasilBudidayaIdMasterBudidaya[this] = value; }
        }

        [DisplayName("Nama Hasil"), Expression("jIdHasilBudidaya.[NamaHasil]")]
        public String IdHasilBudidayaNamaHasil
        {
            get { return Fields.IdHasilBudidayaNamaHasil[this]; }
            set { Fields.IdHasilBudidayaNamaHasil[this] = value; }
        }

        [DisplayName("Id Hasil Budidaya Id Satuan Hasil"), Expression("jIdHasilBudidaya.[IdSatuanHasil]")]
        public Int32? IdHasilBudidayaIdSatuanHasil
        {
            get { return Fields.IdHasilBudidayaIdSatuanHasil[this]; }
            set { Fields.IdHasilBudidayaIdSatuanHasil[this] = value; }
        }

        [DisplayName("Id Hasil Budidaya Desc"), Expression("jIdHasilBudidaya.[Desc]")]
        public String IdHasilBudidayaDesc
        {
            get { return Fields.IdHasilBudidayaDesc[this]; }
            set { Fields.IdHasilBudidayaDesc[this] = value; }
        }
        [DisplayName("Detail Peternakan"), MasterDetailRelation(foreignKey: "IdUserPerikanan"), NotMapped]
        public List<DetailUserPeternakanPerikananRow> DetailPeternakan
        {
            get { return Fields.DetailPeternakan[this]; }
            set { Fields.DetailPeternakan[this] = value; }
        }
        [DisplayName("Budidaya"), ForeignKey("[dbo].[MasterBudidaya]", "IdBudidaya"), LeftJoin("jIdBudidaya")]
     
        public Int32? Option1
        {
            get { return Fields.Option1[this]; }
            set { Fields.Option1[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdUserPerikanan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserPerikananPeternakanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdUserPerikanan;
            public Int32Field IdUser;
            public Int32Field IdHasilBudidaya;
            public DecimalField TotalBibit;
            public DecimalField LuasLahan;
            public Int32Field JumlahPekerja;
            public Int32Field PeriodePanen;
            public DecimalField HasilPanen;
            public DecimalField NominalHasilPanen;
            public Int32Field Option1;

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

            public Int32Field IdHasilBudidayaIdMasterBudidaya;
            public StringField IdHasilBudidayaNamaHasil;
            public Int32Field IdHasilBudidayaIdSatuanHasil;
            public StringField IdHasilBudidayaDesc;
            public RowListField<DetailUserPeternakanPerikananRow> DetailPeternakan;
        }
    }
}
