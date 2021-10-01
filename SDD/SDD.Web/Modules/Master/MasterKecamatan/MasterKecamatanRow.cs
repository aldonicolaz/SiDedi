
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterKecamatan]")]
    [DisplayName("Master Kecamatan"), InstanceName("Master Kecamatan")]
    [ReadPermission("Master:MasterKecamatan")]
    [ModifyPermission("Master:MasterKecamatan")]
    [LookupScript(Permission = "*")]
    public sealed class MasterKecamatanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Kecamatan"), Column("idKecamatan"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdKecamatan
        {
            get { return Fields.IdKecamatan[this]; }
            set { Fields.IdKecamatan[this] = value; }
        }

        [DisplayName("Kabupaten"), NotNull, ForeignKey("[dbo].[MasterKabupaten]", "IdKabupaten"), LeftJoin("jIdKabupaten"), TextualField("IdKabupatenNamaKabupaten")]
        public Int32? IdKabupaten
        {
            get { return Fields.IdKabupaten[this]; }
            set { Fields.IdKabupaten[this] = value; }
        }

        [DisplayName("Nama Kecamatan"), Size(255), QuickSearch]
        public String NamaKecamatan
        {
            get { return Fields.NamaKecamatan[this]; }
            set { Fields.NamaKecamatan[this] = value; }
        }

        [DisplayName("Langtitude Kecamatan"), Size(255)]
        public String LangtitudeKecamatan
        {
            get { return Fields.LangtitudeKecamatan[this]; }
            set { Fields.LangtitudeKecamatan[this] = value; }
        }

        [DisplayName("Longtitude Kecamatan"), Size(255)]
        public String LongtitudeKecamatan
        {
            get { return Fields.LongtitudeKecamatan[this]; }
            set { Fields.LongtitudeKecamatan[this] = value; }
        }

        [DisplayName("Kode Pos"), Size(255)]
        public String KodePos
        {
            get { return Fields.KodePos[this]; }
            set { Fields.KodePos[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String DecKecamatan
        {
            get { return Fields.DecKecamatan[this]; }
            set { Fields.DecKecamatan[this] = value; }
        }

        [DisplayName("Logo Kecamatan"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "FileUpload/Documents/~")]
        public String LogoKecamatan
        {
            get { return Fields.LogoKecamatan[this]; }
            set { Fields.LogoKecamatan[this] = value; }
        }

        [DisplayName("Id Kabupaten Id Propinsi"), Expression("jIdKabupaten.[IdPropinsi]")]
        public Int32? IdKabupatenIdPropinsi
        {
            get { return Fields.IdKabupatenIdPropinsi[this]; }
            set { Fields.IdKabupatenIdPropinsi[this] = value; }
        }

        [DisplayName("Nama Kabupaten"), Expression("jIdKabupaten.[NamaKabupaten]")]
        public String IdKabupatenNamaKabupaten
        {
            get { return Fields.IdKabupatenNamaKabupaten[this]; }
            set { Fields.IdKabupatenNamaKabupaten[this] = value; }
        }

        [DisplayName("Id Kabupaten Langtitudekabupaten"), Expression("jIdKabupaten.[Langtitudekabupaten]")]
        public String IdKabupatenLangtitudekabupaten
        {
            get { return Fields.IdKabupatenLangtitudekabupaten[this]; }
            set { Fields.IdKabupatenLangtitudekabupaten[this] = value; }
        }

        [DisplayName("Id Kabupaten Longtitude Kabupaten"), Expression("jIdKabupaten.[LongtitudeKabupaten]")]
        public String IdKabupatenLongtitudeKabupaten
        {
            get { return Fields.IdKabupatenLongtitudeKabupaten[this]; }
            set { Fields.IdKabupatenLongtitudeKabupaten[this] = value; }
        }

        [DisplayName("Id Kabupaten Desc Kabupaten"), Expression("jIdKabupaten.[DescKabupaten]")]
        public String IdKabupatenDescKabupaten
        {
            get { return Fields.IdKabupatenDescKabupaten[this]; }
            set { Fields.IdKabupatenDescKabupaten[this] = value; }
        }

        [DisplayName("Id Kabupaten Logo Kabupaten"), Expression("jIdKabupaten.[LogoKabupaten]")]
        public String IdKabupatenLogoKabupaten
        {
            get { return Fields.IdKabupatenLogoKabupaten[this]; }
            set { Fields.IdKabupatenLogoKabupaten[this] = value; }
        }
        [DisplayName("No Kode Kecamatan"), Size(255), QuickSearch]
        public String NoKodeKecamatan
        {
            get { return Fields.NoKodeKecamatan[this]; }
            set { Fields.NoKodeKecamatan[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.IdKecamatan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaKecamatan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterKecamatanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdKecamatan;
            public Int32Field IdKabupaten;
            public StringField NamaKecamatan;
            public StringField LangtitudeKecamatan;
            public StringField LongtitudeKecamatan;
            public StringField KodePos;
            public StringField DecKecamatan;
            public StringField LogoKecamatan;
            public StringField NoKodeKecamatan;


            public Int32Field IdKabupatenIdPropinsi;
            public StringField IdKabupatenNamaKabupaten;
            public StringField IdKabupatenLangtitudekabupaten;
            public StringField IdKabupatenLongtitudeKabupaten;
            public StringField IdKabupatenDescKabupaten;
            public StringField IdKabupatenLogoKabupaten;
        }
    }
}
