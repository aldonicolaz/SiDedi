
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterDesa]")]
    [DisplayName("Master Desa"), InstanceName("Master Desa")]
    [ReadPermission("Master:MasterDesa")]
    [ModifyPermission("Master:MasterDesa")]
    [LookupScript(Permission ="*")]
    public sealed class MasterDesaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Desa"), Identity]
        [SortOrder(1, descending: false)]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Kecamatan"), ForeignKey("[dbo].[MasterKecamatan]", "idKecamatan"), LeftJoin("jIdKecamatan"), TextualField("IdKecamatanNamaKecamatan")]
        public Int32? IdKecamatan
        {
            get { return Fields.IdKecamatan[this]; }
            set { Fields.IdKecamatan[this] = value; }
        }

        [DisplayName("Nama Desa"), Size(255), QuickSearch]
        public String NamaDesa
        {
            get { return Fields.NamaDesa[this]; }
            set { Fields.NamaDesa[this] = value; }
        }

        [DisplayName("Lantitude Desa"), Size(255)]
        public String LantitudeDesa
        {
            get { return Fields.LantitudeDesa[this]; }
            set { Fields.LantitudeDesa[this] = value; }
        }

        [DisplayName("Longtitude Desa"), Size(255)]
        public String LongtitudeDesa
        {
            get { return Fields.LongtitudeDesa[this]; }
            set { Fields.LongtitudeDesa[this] = value; }
        }

        [DisplayName("Deskripsi Desa"), Size(255)]
        public String DescDesa
        {
            get { return Fields.DescDesa[this]; }
            set { Fields.DescDesa[this] = value; }
        }

        [DisplayName("Logo Desa"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "FileUpload/Documents/~")]
        public String LogoDesa
        {
            get { return Fields.LogoDesa[this]; }
            set { Fields.LogoDesa[this] = value; }
        }

        [DisplayName("Id Kecamatan Id Kabupaten"), Expression("jIdKecamatan.[IdKabupaten]")]
        public Int32? IdKecamatanIdKabupaten
        {
            get { return Fields.IdKecamatanIdKabupaten[this]; }
            set { Fields.IdKecamatanIdKabupaten[this] = value; }
        }

        [DisplayName("Nama Kecamatan"), Expression("jIdKecamatan.[NamaKecamatan]")]
        public String IdKecamatanNamaKecamatan
        {
            get { return Fields.IdKecamatanNamaKecamatan[this]; }
            set { Fields.IdKecamatanNamaKecamatan[this] = value; }
        }

        [DisplayName("Id Kecamatan Langtitude Kecamatan"), Expression("jIdKecamatan.[LangtitudeKecamatan]")]
        public String IdKecamatanLangtitudeKecamatan
        {
            get { return Fields.IdKecamatanLangtitudeKecamatan[this]; }
            set { Fields.IdKecamatanLangtitudeKecamatan[this] = value; }
        }

        [DisplayName("Id Kecamatan Longtitude Kecamatan"), Expression("jIdKecamatan.[LongtitudeKecamatan]")]
        public String IdKecamatanLongtitudeKecamatan
        {
            get { return Fields.IdKecamatanLongtitudeKecamatan[this]; }
            set { Fields.IdKecamatanLongtitudeKecamatan[this] = value; }
        }

        [DisplayName("Id Kecamatan Kode Pos"), Expression("jIdKecamatan.[KodePos]")]
        public String IdKecamatanKodePos
        {
            get { return Fields.IdKecamatanKodePos[this]; }
            set { Fields.IdKecamatanKodePos[this] = value; }
        }

        [DisplayName("Id Kecamatan Dec Kecamatan"), Expression("jIdKecamatan.[DecKecamatan]")]
        public String IdKecamatanDecKecamatan
        {
            get { return Fields.IdKecamatanDecKecamatan[this]; }
            set { Fields.IdKecamatanDecKecamatan[this] = value; }
        }

        [DisplayName("Id Kecamatan Logo Kecamatan"), Expression("jIdKecamatan.[LogoKecamatan]")]
        public String IdKecamatanLogoKecamatan
        {
            get { return Fields.IdKecamatanLogoKecamatan[this]; }
            set { Fields.IdKecamatanLogoKecamatan[this] = value; }
        }
        [DisplayName("No Kode Desa"), Size(255), QuickSearch]
        public String NoKodeDesa
        {
            get { return Fields.NoKodeDesa[this]; }
            set { Fields.NoKodeDesa[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.IdDesa; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaDesa; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterDesaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field IdDesa;
            public Int32Field IdKecamatan;
            public StringField NamaDesa;
            public StringField LantitudeDesa;
            public StringField LongtitudeDesa;
            public StringField DescDesa;
            public StringField LogoDesa;
            public StringField NoKodeDesa;
            public Int32Field IdKecamatanIdKabupaten;
            public StringField IdKecamatanNamaKecamatan;
            public StringField IdKecamatanLangtitudeKecamatan;
            public StringField IdKecamatanLongtitudeKecamatan;
            public StringField IdKecamatanKodePos;
            public StringField IdKecamatanDecKecamatan;
            public StringField IdKecamatanLogoKecamatan;
        }
    }
}
