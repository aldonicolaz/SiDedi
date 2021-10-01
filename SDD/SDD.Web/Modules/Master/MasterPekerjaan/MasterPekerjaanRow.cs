
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterPekerjaan]")]
    [DisplayName("Master Pekerjaan"), InstanceName("Master Pekerjaan")]
    [ReadPermission("Master:MasterPekerjaan")]
    [ModifyPermission("Master:MasterPekerjaan")]
    [LookupScript(Permission ="*")]
    public sealed class MasterPekerjaanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Pekerjaan"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdPekerjaan
        {
            get { return Fields.IdPekerjaan[this]; }
            set { Fields.IdPekerjaan[this] = value; }
        }

        [DisplayName("Nama Pekerjaan"), Size(255), QuickSearch]
        public String NamaPekerjaan
        {
            get { return Fields.NamaPekerjaan[this]; }
            set { Fields.NamaPekerjaan[this] = value; }
        }

        [DisplayName("Desc"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdPekerjaan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaPekerjaan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterPekerjaanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPekerjaan;
            public StringField NamaPekerjaan;
            public StringField Desc;
        }
    }
}
