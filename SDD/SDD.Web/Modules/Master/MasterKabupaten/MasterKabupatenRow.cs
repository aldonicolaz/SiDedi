
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterKabupaten]")]
    [DisplayName("Master Kabupaten"), InstanceName("Master Kabupaten")]
    [ReadPermission("Master:MasterKabupaten")]
    [ModifyPermission("Master:MasterKabupaten")]
    [LookupScript(Permission = "*")]
    public sealed class MasterKabupatenRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Kabupaten"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdKabupaten
        {
            get { return Fields.IdKabupaten[this]; }
            set { Fields.IdKabupaten[this] = value; }
        }

        [DisplayName("Propinsi"), ForeignKey("[dbo].[MasterPropinsi]", "IdPropinsi"), LeftJoin("jIdPropinsi"), TextualField("IdPropinsiNamaPropinsi")]
        public Int32? IdPropinsi
        {
            get { return Fields.IdPropinsi[this]; }
            set { Fields.IdPropinsi[this] = value; }
        }

        [DisplayName("Nama Kabupaten"), Size(255), QuickSearch]
        public String NamaKabupaten
        {
            get { return Fields.NamaKabupaten[this]; }
            set { Fields.NamaKabupaten[this] = value; }
        }

        [DisplayName("Langtitudekabupaten"), Size(255)]
        public String Langtitudekabupaten
        {
            get { return Fields.Langtitudekabupaten[this]; }
            set { Fields.Langtitudekabupaten[this] = value; }
        }

        [DisplayName("Longtitude Kabupaten"), Size(255)]
        public String LongtitudeKabupaten
        {
            get { return Fields.LongtitudeKabupaten[this]; }
            set { Fields.LongtitudeKabupaten[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String DescKabupaten
        {
            get { return Fields.DescKabupaten[this]; }
            set { Fields.DescKabupaten[this] = value; }
        }

        [DisplayName("Logo Kabupaten"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "FileUpload/Documents/~")]
        public String LogoKabupaten
        {
            get { return Fields.LogoKabupaten[this]; }
            set { Fields.LogoKabupaten[this] = value; }
        }

        [DisplayName("Nama Propinsi"), Expression("jIdPropinsi.[NamaPropinsi]")]
        public String IdPropinsiNamaPropinsi
        {
            get { return Fields.IdPropinsiNamaPropinsi[this]; }
            set { Fields.IdPropinsiNamaPropinsi[this] = value; }
        }

        [DisplayName("Id Propinsi Ibu Kota Propinsi"), Expression("jIdPropinsi.[IbuKotaPropinsi]")]
        public String IdPropinsiIbuKotaPropinsi
        {
            get { return Fields.IdPropinsiIbuKotaPropinsi[this]; }
            set { Fields.IdPropinsiIbuKotaPropinsi[this] = value; }
        }

        [DisplayName("Id Propinsi Latitude Propinsi"), Expression("jIdPropinsi.[LatitudePropinsi]")]
        public String IdPropinsiLatitudePropinsi
        {
            get { return Fields.IdPropinsiLatitudePropinsi[this]; }
            set { Fields.IdPropinsiLatitudePropinsi[this] = value; }
        }

        [DisplayName("Id Propinsi Longitude Propinsi"), Expression("jIdPropinsi.[LongitudePropinsi]")]
        public String IdPropinsiLongitudePropinsi
        {
            get { return Fields.IdPropinsiLongitudePropinsi[this]; }
            set { Fields.IdPropinsiLongitudePropinsi[this] = value; }
        }

        [DisplayName("Id Propinsi Desc Propinsi"), Expression("jIdPropinsi.[DescPropinsi]")]
        public String IdPropinsiDescPropinsi
        {
            get { return Fields.IdPropinsiDescPropinsi[this]; }
            set { Fields.IdPropinsiDescPropinsi[this] = value; }
        }

        [DisplayName("Id Propinsi Logo Propinsi"), Expression("jIdPropinsi.[LogoPropinsi]")]
        public String IdPropinsiLogoPropinsi
        {
            get { return Fields.IdPropinsiLogoPropinsi[this]; }
            set { Fields.IdPropinsiLogoPropinsi[this] = value; }
        }
        [DisplayName("No Kode Kabupaten"), Size(255), QuickSearch]
        public String NoKodeKabupaten
        {
            get { return Fields.NoKodeKabupaten[this]; }
            set { Fields.NoKodeKabupaten[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdKabupaten; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaKabupaten; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterKabupatenRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdKabupaten;
            public Int32Field IdPropinsi;
            public StringField NamaKabupaten;
            public StringField Langtitudekabupaten;
            public StringField LongtitudeKabupaten;
            public StringField DescKabupaten;
            public StringField LogoKabupaten;
            public StringField NoKodeKabupaten;

            public StringField IdPropinsiNamaPropinsi;
            public StringField IdPropinsiIbuKotaPropinsi;
            public StringField IdPropinsiLatitudePropinsi;
            public StringField IdPropinsiLongitudePropinsi;
            public StringField IdPropinsiDescPropinsi;
            public StringField IdPropinsiLogoPropinsi;
        }
    }
}
