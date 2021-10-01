
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[ViewMaasterForm]")]
    [DisplayName("View Maaster Form"), InstanceName("View Maaster Form")]
    [ReadPermission("View:ViewMaasterForm")]
    [ModifyPermission("View:ViewMaasterForm")]
    [LookupScript(Permission ="*")]
    public sealed class ViewMaasterFormRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Number")]
        public Int64? IdNumber
        {
            get { return Fields.IdNumber[this]; }
            set { Fields.IdNumber[this] = value; }
        }

        [DisplayName("Id Form Flow"), NotNull]
        public Int32? IdFormFlow
        {
            get { return Fields.IdFormFlow[this]; }
            set { Fields.IdFormFlow[this] = value; }
        }

        [DisplayName("Nama Formulir"), Size(255), QuickSearch]
        public String NamaFormulir
        {
            get { return Fields.NamaFormulir[this]; }
            set { Fields.NamaFormulir[this] = value; }
        }

        [DisplayName("Id Formulir"), NotNull]
        public Int32? IdFormulir
        {
            get { return Fields.IdFormulir[this]; }
            set { Fields.IdFormulir[this] = value; }
        }

        [DisplayName("Slaform")]
        public Int32? Slaform
        {
            get { return Fields.Slaform[this]; }
            set { Fields.Slaform[this] = value; }
        }

        [DisplayName("Desc Form"), Size(255)]
        public String DescForm
        {
            get { return Fields.DescForm[this]; }
            set { Fields.DescForm[this] = value; }
        }

        [DisplayName("Nama Desa"), Size(255)]
        public String NamaDesa
        {
            get { return Fields.NamaDesa[this]; }
            set { Fields.NamaDesa[this] = value; }
        }

        [DisplayName("Nama Kecamatan"), Size(255)]
        public String NamaKecamatan
        {
            get { return Fields.NamaKecamatan[this]; }
            set { Fields.NamaKecamatan[this] = value; }
        }

        [DisplayName("Kode Pos"), Size(255)]
        public String KodePos
        {
            get { return Fields.KodePos[this]; }
            set { Fields.KodePos[this] = value; }
        }

        [DisplayName("Req Form"), Size(463)]
        public String ReqForm
        {
            get { return Fields.ReqForm[this]; }
            set { Fields.ReqForm[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdNumber; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaFormulir; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewMaasterFormRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field IdNumber;
            public Int32Field IdFormFlow;
            public StringField NamaFormulir;
            public Int32Field IdFormulir;
            public Int32Field Slaform;
            public StringField DescForm;
            public StringField NamaDesa;
            public StringField NamaKecamatan;
            public StringField KodePos;
            public StringField ReqForm;
        }
    }
}
