
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterHubungan]")]
    [DisplayName("Master Hubungan"), InstanceName("Master Hubungan")]
    [ReadPermission("Master:MasterHubungan")]
    [ModifyPermission("Master:MasterHubungan")]
    [LookupScript(Permission = "*")]
    public sealed class MasterHubunganRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Hubungan"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdHubungan
        {
            get { return Fields.IdHubungan[this]; }
            set { Fields.IdHubungan[this] = value; }
        }

        [DisplayName("Nama Hubungan"), Size(255), QuickSearch]
        public String NamaHubungan
        {
            get { return Fields.NamaHubungan[this]; }
            set { Fields.NamaHubungan[this] = value; }
        }

        [DisplayName("Kode Hubungan"), Size(2)]
        public String KodeHubungan
        {
            get { return Fields.KodeHubungan[this]; }
            set { Fields.KodeHubungan[this] = value; }
        }

        [DisplayName("Deskripsi Hubungan"), Size(255)]
        public String DescHubungan
        {
            get { return Fields.DescHubungan[this]; }
            set { Fields.DescHubungan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdHubungan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaHubungan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterHubunganRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdHubungan;
            public StringField NamaHubungan;
            public StringField KodeHubungan;
            public StringField DescHubungan;
        }
    }
}
