
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailUserPertanian]")]
    [DisplayName("Detail Pertanian"), InstanceName("Detail Pertanian")]
    [ReadPermission("Transaction:DetailUserPertanian")]
    [ModifyPermission("Transaction:DetailUserPertanian")]
    public sealed class DetailUserPertanianRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Detail Pertanian"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdDetailPertanian
        {
            get { return Fields.IdDetailPertanian[this]; }
            set { Fields.IdDetailPertanian[this] = value; }
        }

        [DisplayName("Satuan Pendukung"), ForeignKey("[dbo].[MasterSatuan]", "IdSatuan"), LeftJoin("jIdSatuanPendukung"), TextualField("IdSatuanPendukungNamaSatuan")]
        public Int32? IdSatuanPendukung
        {
            get { return Fields.IdSatuanPendukung[this]; }
            set { Fields.IdSatuanPendukung[this] = value; }
        }

        [DisplayName("Alat Bahan Pendukung"), Size(255), QuickSearch]
        public String AlatBahanPendukung
        {
            get { return Fields.AlatBahanPendukung[this]; }
            set { Fields.AlatBahanPendukung[this] = value; }
        }

        [DisplayName("Quantity Pendukung")]
        public Int32? QuantityPendukung
        {
            get { return Fields.QuantityPendukung[this]; }
            set { Fields.QuantityPendukung[this] = value; }
        }

        [DisplayName("Nominal Pendukung"), Size(19), Scale(4)]
        public Decimal? NominalPendukung
        {
            get { return Fields.NominalPendukung[this]; }
            set { Fields.NominalPendukung[this] = value; }
        }

        [DisplayName("Total Nominal Pendukung"), Size(19), Scale(4)]
        public Decimal? TotalNominalPendukung
        {
            get { return Fields.TotalNominalPendukung[this]; }
            set { Fields.TotalNominalPendukung[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        [DisplayName("Id User Pertanian"), ForeignKey("[dbo].[UserPertanianPerkebunan]", "IdUserPertanian"), LeftJoin("jIdUserPertanian")]
        public Int32? IdUserPertanian
        {
            get { return Fields.IdUserPertanian[this]; }
            set { Fields.IdUserPertanian[this] = value; }
        }

        [DisplayName("Nama Satuan"), Expression("jIdSatuanPendukung.[NamaSatuan]"),MinSelectLevel(SelectLevel.List)]
        public String IdSatuanPendukungNamaSatuan
        {
            get { return Fields.IdSatuanPendukungNamaSatuan[this]; }
            set { Fields.IdSatuanPendukungNamaSatuan[this] = value; }
        }

        [DisplayName("Id Satuan Pendukung Desc Satuan"), Expression("jIdSatuanPendukung.[DescSatuan]")]
        public String IdSatuanPendukungDescSatuan
        {
            get { return Fields.IdSatuanPendukungDescSatuan[this]; }
            set { Fields.IdSatuanPendukungDescSatuan[this] = value; }
        }

        [DisplayName("Id User Pertanian Id User"), Expression("jIdUserPertanian.[IdUser]")]
        public Int32? IdUserPertanianIdUser
        {
            get { return Fields.IdUserPertanianIdUser[this]; }
            set { Fields.IdUserPertanianIdUser[this] = value; }
        }

        [DisplayName("Id User Pertanian Id Hasil Budidaya"), Expression("jIdUserPertanian.[IdHasilBudidaya]")]
        public Int32? IdUserPertanianIdHasilBudidaya
        {
            get { return Fields.IdUserPertanianIdHasilBudidaya[this]; }
            set { Fields.IdUserPertanianIdHasilBudidaya[this] = value; }
        }

        [DisplayName("Id User Pertanian Luas Lahan"), Expression("jIdUserPertanian.[LuasLahan]")]
        public Decimal? IdUserPertanianLuasLahan
        {
            get { return Fields.IdUserPertanianLuasLahan[this]; }
            set { Fields.IdUserPertanianLuasLahan[this] = value; }
        }

        [DisplayName("Id User Pertanian Jumlah Pekerja"), Expression("jIdUserPertanian.[JumlahPekerja]")]
        public Int32? IdUserPertanianJumlahPekerja
        {
            get { return Fields.IdUserPertanianJumlahPekerja[this]; }
            set { Fields.IdUserPertanianJumlahPekerja[this] = value; }
        }

        [DisplayName("Id User Pertanian Periode Panen"), Expression("jIdUserPertanian.[PeriodePanen]")]
        public Int32? IdUserPertanianPeriodePanen
        {
            get { return Fields.IdUserPertanianPeriodePanen[this]; }
            set { Fields.IdUserPertanianPeriodePanen[this] = value; }
        }

        [DisplayName("Id User Pertanian Hasil Panen"), Expression("jIdUserPertanian.[HasilPanen]")]
        public Decimal? IdUserPertanianHasilPanen
        {
            get { return Fields.IdUserPertanianHasilPanen[this]; }
            set { Fields.IdUserPertanianHasilPanen[this] = value; }
        }

        [DisplayName("Id User Pertanian Nominal Hasil Panen"), Expression("jIdUserPertanian.[NominalHasilPanen]")]
        public Decimal? IdUserPertanianNominalHasilPanen
        {
            get { return Fields.IdUserPertanianNominalHasilPanen[this]; }
            set { Fields.IdUserPertanianNominalHasilPanen[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailPertanian; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AlatBahanPendukung; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailUserPertanianRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailPertanian;
            public Int32Field IdSatuanPendukung;
            public StringField AlatBahanPendukung;
            public Int32Field QuantityPendukung;
            public DecimalField NominalPendukung;
            public DecimalField TotalNominalPendukung;
            public StringField Desc;
            public Int32Field IdUserPertanian;

            public StringField IdSatuanPendukungNamaSatuan;
            public StringField IdSatuanPendukungDescSatuan;

            public Int32Field IdUserPertanianIdUser;
            public Int32Field IdUserPertanianIdHasilBudidaya;
            public DecimalField IdUserPertanianLuasLahan;
            public Int32Field IdUserPertanianJumlahPekerja;
            public Int32Field IdUserPertanianPeriodePanen;
            public DecimalField IdUserPertanianHasilPanen;
            public DecimalField IdUserPertanianNominalHasilPanen;
        }
    }
}
