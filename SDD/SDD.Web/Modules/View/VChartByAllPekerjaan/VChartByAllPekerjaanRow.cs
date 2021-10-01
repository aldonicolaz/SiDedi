
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[VChartByAllPekerjaan]")]
    [DisplayName("V Chart By All Pekerjaan"), InstanceName("V Chart By All Pekerjaan")]
    [ReadPermission("View:VChartByAllPekerjaan")]
    [ModifyPermission("View:VChartByAllPekerjaan")]
    public sealed class VChartByAllPekerjaanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Number")]
        public Int64? IdNumber
        {
            get { return Fields.IdNumber[this]; }
            set { Fields.IdNumber[this] = value; }
        }

        [DisplayName("Count Transaksi")]
        public Int32? CountTransaksi
        {
            get { return Fields.CountTransaksi[this]; }
            set { Fields.CountTransaksi[this] = value; }
        }

        [DisplayName("Total Penghasilan"), Size(19), Scale(4)]
        public Decimal? TotalPenghasilan
        {
            get { return Fields.TotalPenghasilan[this]; }
            set { Fields.TotalPenghasilan[this] = value; }
        }

        [DisplayName("Id Pekerjaan"), NotNull]
        public Int32? IdPekerjaan
        {
            get { return Fields.IdPekerjaan[this]; }
            set { Fields.IdPekerjaan[this] = value; }
        }

        [DisplayName("Nama Pekerjaan"), Size(255), QuickSearch]
        public String NamaPekerjaan
        {
            get { return Fields.NamaPekerjaan[this]; }
            set { Fields.NamaPekerjaan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdNumber; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaPekerjaan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VChartByAllPekerjaanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field IdNumber;
            public Int32Field CountTransaksi;
            public DecimalField TotalPenghasilan;
            public Int32Field IdPekerjaan;
            public StringField NamaPekerjaan;
        }
    }
}
