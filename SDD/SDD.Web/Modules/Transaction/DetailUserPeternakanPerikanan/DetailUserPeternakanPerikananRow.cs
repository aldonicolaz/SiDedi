
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailUserPeternakanPerikanan]")]
    [DisplayName("Detail Peternakan Perikanan"), InstanceName("Detail Peternakan Perikanan")]
    [ReadPermission("Transaction:DetailUserPeternakanPerikanan")]
    [ModifyPermission("Transaction:DetailUserPeternakanPerikanan")]
    public sealed class DetailUserPeternakanPerikananRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Detail Peternakan"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdDetailPeternakan
        {
            get { return Fields.IdDetailPeternakan[this]; }
            set { Fields.IdDetailPeternakan[this] = value; }
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

        [DisplayName("Id User Perikanan"), ForeignKey("[dbo].[UserPerikananPeternakan]", "IdUserPerikanan"), LeftJoin("jIdUserPerikanan")]
        public Int32? IdUserPerikanan
        {
            get { return Fields.IdUserPerikanan[this]; }
            set { Fields.IdUserPerikanan[this] = value; }
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

        [DisplayName("Id User Perikanan Id User"), Expression("jIdUserPerikanan.[IdUser]")]
        public Int32? IdUserPerikananIdUser
        {
            get { return Fields.IdUserPerikananIdUser[this]; }
            set { Fields.IdUserPerikananIdUser[this] = value; }
        }

        [DisplayName("Id User Perikanan Id Hasil Budidaya"), Expression("jIdUserPerikanan.[IdHasilBudidaya]")]
        public Int32? IdUserPerikananIdHasilBudidaya
        {
            get { return Fields.IdUserPerikananIdHasilBudidaya[this]; }
            set { Fields.IdUserPerikananIdHasilBudidaya[this] = value; }
        }

        [DisplayName("Id User Perikanan Total Bibit"), Expression("jIdUserPerikanan.[TotalBibit]")]
        public Decimal? IdUserPerikananTotalBibit
        {
            get { return Fields.IdUserPerikananTotalBibit[this]; }
            set { Fields.IdUserPerikananTotalBibit[this] = value; }
        }

        [DisplayName("Id User Perikanan Luas Lahan"), Expression("jIdUserPerikanan.[LuasLahan]")]
        public Decimal? IdUserPerikananLuasLahan
        {
            get { return Fields.IdUserPerikananLuasLahan[this]; }
            set { Fields.IdUserPerikananLuasLahan[this] = value; }
        }

        [DisplayName("Id User Perikanan Jumlah Pekerja"), Expression("jIdUserPerikanan.[JumlahPekerja]")]
        public Int32? IdUserPerikananJumlahPekerja
        {
            get { return Fields.IdUserPerikananJumlahPekerja[this]; }
            set { Fields.IdUserPerikananJumlahPekerja[this] = value; }
        }

        [DisplayName("Id User Perikanan Periode Panen"), Expression("jIdUserPerikanan.[PeriodePanen]")]
        public Int32? IdUserPerikananPeriodePanen
        {
            get { return Fields.IdUserPerikananPeriodePanen[this]; }
            set { Fields.IdUserPerikananPeriodePanen[this] = value; }
        }

        [DisplayName("Id User Perikanan Hasil Panen"), Expression("jIdUserPerikanan.[HasilPanen]")]
        public Decimal? IdUserPerikananHasilPanen
        {
            get { return Fields.IdUserPerikananHasilPanen[this]; }
            set { Fields.IdUserPerikananHasilPanen[this] = value; }
        }

        [DisplayName("Id User Perikanan Nominal Hasil Panen"), Expression("jIdUserPerikanan.[NominalHasilPanen]")]
        public Decimal? IdUserPerikananNominalHasilPanen
        {
            get { return Fields.IdUserPerikananNominalHasilPanen[this]; }
            set { Fields.IdUserPerikananNominalHasilPanen[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailPeternakan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AlatBahanPendukung; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailUserPeternakanPerikananRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailPeternakan;
            public Int32Field IdSatuanPendukung;
            public StringField AlatBahanPendukung;
            public Int32Field QuantityPendukung;
            public DecimalField NominalPendukung;
            public DecimalField TotalNominalPendukung;
            public StringField Desc;
            public Int32Field IdUserPerikanan;

            public StringField IdSatuanPendukungNamaSatuan;
            public StringField IdSatuanPendukungDescSatuan;

            public Int32Field IdUserPerikananIdUser;
            public Int32Field IdUserPerikananIdHasilBudidaya;
            public DecimalField IdUserPerikananTotalBibit;
            public DecimalField IdUserPerikananLuasLahan;
            public Int32Field IdUserPerikananJumlahPekerja;
            public Int32Field IdUserPerikananPeriodePanen;
            public DecimalField IdUserPerikananHasilPanen;
            public DecimalField IdUserPerikananNominalHasilPanen;
        }
    }
}
