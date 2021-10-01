
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailFlowForm]")]
    [DisplayName("Detail Flow Form"), InstanceName("Detail Flow Form")]
    [ReadPermission("Transaction:DetailFlowForm")]
    [ModifyPermission("Transaction:DetailFlowForm")]
    public sealed class DetailFlowFormRow : Row, IIdRow
    {
        [DisplayName("Id Detail Flow Form"), Identity]
        public Int32? IdDetailFlowForm
        {
            get { return Fields.IdDetailFlowForm[this]; }
            set { Fields.IdDetailFlowForm[this] = value; }
        }

        [DisplayName("Id Form Flow"), ForeignKey("[dbo].[MasterFlowFormulir]", "IdFormFlow"), LeftJoin("jIdFormFlow"), TextualField("IdFormFlowDescForm")]
        public Int32? IdFormFlow
        {
            get { return Fields.IdFormFlow[this]; }
            set { Fields.IdFormFlow[this] = value; }
        }

        [DisplayName("Id Jabatan"), ForeignKey("[dbo].[MasterJabatan]", "IdJabatan"), LeftJoin("jIdJabatan"), TextualField("IdJabatanNamaJabatan")]
        public Int32? IdJabatan
        {
            get { return Fields.IdJabatan[this]; }
            set { Fields.IdJabatan[this] = value; }
        }

        [DisplayName("Urutan Flow")]
        public Int32? UrutanFlow
        {
            get { return Fields.UrutanFlow[this]; }
            set { Fields.UrutanFlow[this] = value; }
        }

        [DisplayName("Sla Detail ( hari )")]
        public Int32? SlaDetail
        {
            get { return Fields.SlaDetail[this]; }
            set { Fields.SlaDetail[this] = value; }
        }

        [DisplayName("Id Form Flow Id Master Form"), Expression("jIdFormFlow.[IdMasterForm]")]
        public Int32? IdFormFlowIdMasterForm
        {
            get { return Fields.IdFormFlowIdMasterForm[this]; }
            set { Fields.IdFormFlowIdMasterForm[this] = value; }
        }

        [DisplayName("Id Form Flow Slaform"), Expression("jIdFormFlow.[Slaform]")]
        public Int32? IdFormFlowSlaform
        {
            get { return Fields.IdFormFlowSlaform[this]; }
            set { Fields.IdFormFlowSlaform[this] = value; }
        }

        [DisplayName("Desc Form"), Expression("jIdFormFlow.[DescForm]"),MinSelectLevel(SelectLevel.List)]
        public String IdFormFlowDescForm
        {
            get { return Fields.IdFormFlowDescForm[this]; }
            set { Fields.IdFormFlowDescForm[this] = value; }
        }

        [DisplayName("Id Form Flow Id Desa"), Expression("jIdFormFlow.[IdDesa]")]
        public Int64? IdFormFlowIdDesa
        {
            get { return Fields.IdFormFlowIdDesa[this]; }
            set { Fields.IdFormFlowIdDesa[this] = value; }
        }

        [DisplayName("Nama Jabatan"), Expression("jIdJabatan.[NamaJabatan]"),MinSelectLevel(SelectLevel.List)]
        public String IdJabatanNamaJabatan
        {
            get { return Fields.IdJabatanNamaJabatan[this]; }
            set { Fields.IdJabatanNamaJabatan[this] = value; }
        }

        [DisplayName("Id Jabatan Desc"), Expression("jIdJabatan.[Desc]")]
        public String IdJabatanDesc
        {
            get { return Fields.IdJabatanDesc[this]; }
            set { Fields.IdJabatanDesc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailFlowForm; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailFlowFormRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailFlowForm;
            public Int32Field IdFormFlow;
            public Int32Field IdJabatan;
            public Int32Field UrutanFlow;
            public Int32Field SlaDetail;

            public Int32Field IdFormFlowIdMasterForm;
            public Int32Field IdFormFlowSlaform;
            public StringField IdFormFlowDescForm;
            public Int64Field IdFormFlowIdDesa;

            public StringField IdJabatanNamaJabatan;
            public StringField IdJabatanDesc;
        }
    }
}
