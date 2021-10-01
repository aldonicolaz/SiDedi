
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterPropinsi]")]
    [DisplayName("Master Propinsi"), InstanceName("Master Propinsi")]
    [ReadPermission("Master:MasterPropinsi")]
    [ModifyPermission("Master:MasterPropinsi")]
    [LookupScript(Permission ="*")]
    public sealed class MasterPropinsiRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Propinsi"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdPropinsi
        {
            get { return Fields.IdPropinsi[this]; }
            set { Fields.IdPropinsi[this] = value; }
        }

        [DisplayName("Nama Propinsi"), Size(255), QuickSearch]
        public String NamaPropinsi
        {
            get { return Fields.NamaPropinsi[this]; }
            set { Fields.NamaPropinsi[this] = value; }
        }

        [DisplayName("Ibu Kota Propinsi"), Size(255)]
        public String IbuKotaPropinsi
        {
            get { return Fields.IbuKotaPropinsi[this]; }
            set { Fields.IbuKotaPropinsi[this] = value; }
        }

        [DisplayName("Latitude Propinsi"), Size(255)]
        public String LatitudePropinsi
        {
            get { return Fields.LatitudePropinsi[this]; }
            set { Fields.LatitudePropinsi[this] = value; }
        }

        [DisplayName("Longitude Propinsi"), Size(255)]
        public String LongitudePropinsi
        {
            get { return Fields.LongitudePropinsi[this]; }
            set { Fields.LongitudePropinsi[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String DescPropinsi
        {
            get { return Fields.DescPropinsi[this]; }
            set { Fields.DescPropinsi[this] = value; }
        }

        [DisplayName("Logo Propinsi"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "FileUpload/Documents/~")]
        public String LogoPropinsi
        {
            get { return Fields.LogoPropinsi[this]; }
            set { Fields.LogoPropinsi[this] = value; }
        }
        [DisplayName("No Kode Propinsi"), Size(255), QuickSearch]
        public String NoKodePropinsi
        {
            get { return Fields.NoKodePropinsi[this]; }
            set { Fields.NoKodePropinsi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdPropinsi; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaPropinsi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterPropinsiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPropinsi;
            public StringField NamaPropinsi;
            public StringField IbuKotaPropinsi;
            public StringField LatitudePropinsi;
            public StringField LongitudePropinsi;
            public StringField DescPropinsi;
            public StringField LogoPropinsi;
            public StringField NoKodePropinsi;
        }
    }
}
