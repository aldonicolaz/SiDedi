
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterFormulir]")]
    [DisplayName("Master Formulir"), InstanceName("Master Formulir")]
    [ReadPermission("Master:MasterFormulir")]
    [ModifyPermission("Master:MasterFormulir")]
    [LookupScript(Permission ="*")]
    public sealed class MasterFormulirRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Formulir"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdFormulir
        {
            get { return Fields.IdFormulir[this]; }
            set { Fields.IdFormulir[this] = value; }
        }

        [DisplayName("Nama Formulir"), Size(255), QuickSearch]
        public String NamaFormulir
        {
            get { return Fields.NamaFormulir[this]; }
            set { Fields.NamaFormulir[this] = value; }
        }

        [DisplayName("Deskripsi Formulir"), Size(255)]
        public String DescFormulir
        {
            get { return Fields.DescFormulir[this]; }
            set { Fields.DescFormulir[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdFormulir; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaFormulir; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterFormulirRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdFormulir;
            public StringField NamaFormulir;
            public StringField DescFormulir;
        }
    }
}
