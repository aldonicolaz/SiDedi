
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[MasterFlowFormulir]")]
    [DisplayName("Master Flow Formulir"), InstanceName("Master Flow Formulir")]
    [ReadPermission("Transaction:MasterFlowFormulir")]
    [ModifyPermission("Transaction:MasterFlowFormulir")]
    [LookupScript(Permission ="*")]
    public sealed class MasterFlowFormulirRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Form Flow"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdFormFlow
        {
            get { return Fields.IdFormFlow[this]; }
            set { Fields.IdFormFlow[this] = value; }
        }

        [DisplayName("Master Form"), ForeignKey("[dbo].[MasterFormulir]", "IdFormulir"), LeftJoin("jIdMasterForm"), TextualField("IdMasterFormNamaFormulir")]
        public Int32? IdMasterForm
        {
            get { return Fields.IdMasterForm[this]; }
            set { Fields.IdMasterForm[this] = value; }
        }

        [DisplayName("Sla form (hari)")]
        public Int32? Slaform
        {
            get { return Fields.Slaform[this]; }
            set { Fields.Slaform[this] = value; }
        }

        [DisplayName("Deskripsi Form"), Size(255), QuickSearch]
        public String DescForm
        {
            get { return Fields.DescForm[this]; }
            set { Fields.DescForm[this] = value; }
        }

        [DisplayName("Desa"), ForeignKey("[dbo].[MasterDesa]", "IdDesa"), LeftJoin("jIdDesa"), TextualField("IdDesaNamaDesa")]
        public Int64? IdDesa
        {
            get { return Fields.IdDesa[this]; }
            set { Fields.IdDesa[this] = value; }
        }

        [DisplayName("Nama Formulir"), Expression("jIdMasterForm.[NamaFormulir]")]
        public String IdMasterFormNamaFormulir
        {
            get { return Fields.IdMasterFormNamaFormulir[this]; }
            set { Fields.IdMasterFormNamaFormulir[this] = value; }
        }

        [DisplayName("Id Master Form Desc Formulir"), Expression("jIdMasterForm.[DescFormulir]")]
        public String IdMasterFormDescFormulir
        {
            get { return Fields.IdMasterFormDescFormulir[this]; }
            set { Fields.IdMasterFormDescFormulir[this] = value; }
        }

        [DisplayName("Id Desa Id Kecamatan"), Expression("jIdDesa.[IdKecamatan]")]
        public Int32? IdDesaIdKecamatan
        {
            get { return Fields.IdDesaIdKecamatan[this]; }
            set { Fields.IdDesaIdKecamatan[this] = value; }
        }

        [DisplayName("Nama Desa"), Expression("jIdDesa.[NamaDesa]")]
        public String IdDesaNamaDesa
        {
            get { return Fields.IdDesaNamaDesa[this]; }
            set { Fields.IdDesaNamaDesa[this] = value; }
        }

        [DisplayName("Id Desa Lantitude Desa"), Expression("jIdDesa.[LantitudeDesa]")]
        public String IdDesaLantitudeDesa
        {
            get { return Fields.IdDesaLantitudeDesa[this]; }
            set { Fields.IdDesaLantitudeDesa[this] = value; }
        }

        [DisplayName("Id Desa Longtitude Desa"), Expression("jIdDesa.[LongtitudeDesa]")]
        public String IdDesaLongtitudeDesa
        {
            get { return Fields.IdDesaLongtitudeDesa[this]; }
            set { Fields.IdDesaLongtitudeDesa[this] = value; }
        }

        [DisplayName("Id Desa Desc Desa"), Expression("jIdDesa.[DescDesa]")]
        public String IdDesaDescDesa
        {
            get { return Fields.IdDesaDescDesa[this]; }
            set { Fields.IdDesaDescDesa[this] = value; }
        }

        [DisplayName("Id Desa Logo Desa"), Expression("jIdDesa.[LogoDesa]")]
        public String IdDesaLogoDesa
        {
            get { return Fields.IdDesaLogoDesa[this]; }
            set { Fields.IdDesaLogoDesa[this] = value; }
        }

        [DisplayName("Detail Flow Formulir"), MasterDetailRelation(foreignKey: "IdFormFlow"), NotMapped]
        public List<DetailFlowFormRow> DetailFlowFormulir
        {
            get { return Fields.DetailFlowFormulir[this]; }
            set { Fields.DetailFlowFormulir[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdFormFlow; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DescForm; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterFlowFormulirRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdFormFlow;
            public Int32Field IdMasterForm;
            public Int32Field Slaform;
            public StringField DescForm;
            public Int64Field IdDesa;

            public StringField IdMasterFormNamaFormulir;
            public StringField IdMasterFormDescFormulir;

            public Int32Field IdDesaIdKecamatan;
            public StringField IdDesaNamaDesa;
            public StringField IdDesaLantitudeDesa;
            public StringField IdDesaLongtitudeDesa;
            public StringField IdDesaDescDesa;
            public StringField IdDesaLogoDesa;
            public RowListField<DetailFlowFormRow> DetailFlowFormulir;
        }
    }
}
