
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterSatuan]")]
    [DisplayName("Master Satuan"), InstanceName("Master Satuan")]
    [ReadPermission("Master:MasterSatuan")]
    [ModifyPermission("Master:MasterSatuan")]
    [LookupScript(Permission = "*")]
    public sealed class MasterSatuanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Satuan"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdSatuan
        {
            get { return Fields.IdSatuan[this]; }
            set { Fields.IdSatuan[this] = value; }
        }

        [DisplayName("Nama Satuan"), Size(255), QuickSearch]
        public String NamaSatuan
        {
            get { return Fields.NamaSatuan[this]; }
            set { Fields.NamaSatuan[this] = value; }
        }

        [DisplayName("Deskripsi Satuan"), Size(255)]
        public String DescSatuan
        {
            get { return Fields.DescSatuan[this]; }
            set { Fields.DescSatuan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdSatuan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaSatuan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterSatuanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdSatuan;
            public StringField NamaSatuan;
            public StringField DescSatuan;
        }
    }
}
