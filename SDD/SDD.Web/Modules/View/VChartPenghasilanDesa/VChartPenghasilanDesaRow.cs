
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[vChartPenghasilanDesa]")]
    [DisplayName("Penghasilan Desa"), InstanceName("Penghasilan Desa")]
    [ReadPermission("View:VChartPenghasilanDesa")]
    [ModifyPermission("View:VChartPenghasilanDesa")]
    public sealed class VChartPenghasilanDesaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Number")]
        [SortOrder(1, descending: true)]
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

        [DisplayName("Total Penghasilan"), Size(19), Scale(2), DisplayFormat("#,###.00")]
        public Decimal? TotalPenghasilan
        {
            get { return Fields.TotalPenghasilan[this]; }
            set { Fields.TotalPenghasilan[this] = value; }
        }

        [DisplayName("Desa")]
        public Int64? IdDesa
        { 
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Namadesa"), Column("namadesa"), Size(255), QuickSearch]
        public String Namadesa
        {
            get { return Fields.Namadesa[this]; }
            set { Fields.Namadesa[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdNumber; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Namadesa; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VChartPenghasilanDesaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field IdNumber;
            public Int32Field CountTransaksi;
            public DecimalField TotalPenghasilan;
            public StringField Namadesa;
            public Int64Field IdDesa;
        }
    }
}
