
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailKapalNelayan]")]
    [DisplayName("Detail Kapal Nelayan"), InstanceName("Detail Kapal Nelayan")]
    [ReadPermission("Transaction:DetailKapalNelayan")]
    [ModifyPermission("Transaction:DetailKapalNelayan")]
    public sealed class DetailKapalNelayanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Kapal Nelayan"), Identity]
        public Int32? IdKapalNelayan
        {
            get { return Fields.IdKapalNelayan[this]; }
            set { Fields.IdKapalNelayan[this] = value; }
        }

        [DisplayName("Id User Nelayan")]
        public Int32? IdUserNelayan
        {
            get { return Fields.IdUserNelayan[this]; }
            set { Fields.IdUserNelayan[this] = value; }
        }

        [DisplayName("Status Kapal")]
        public Int32? StatusKapal
        {
            get { return Fields.StatusKapal[this]; }
            set { Fields.StatusKapal[this] = value; }
        }

        [DisplayName("Type Kapal"), Size(255), QuickSearch]
        public String TypeKapal
        {
            get { return Fields.TypeKapal[this]; }
            set { Fields.TypeKapal[this] = value; }
        }

        [DisplayName("Lokasi Sandar Kapal"), Size(255)]
        public String LokasiSandarKapal
        {
            get { return Fields.LokasiSandarKapal[this]; }
            set { Fields.LokasiSandarKapal[this] = value; }
        }

        [DisplayName("Hasil Bulanan"), Size(19), Scale(4)]
        public Decimal? HasilBulanan
        {
            get { return Fields.HasilBulanan[this]; }
            set { Fields.HasilBulanan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdKapalNelayan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypeKapal; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailKapalNelayanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdKapalNelayan;
            public Int32Field IdUserNelayan;
            public Int32Field StatusKapal;
            public StringField TypeKapal;
            public StringField LokasiSandarKapal;
            public DecimalField HasilBulanan;
        }
    }
}
