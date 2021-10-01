
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterStatus]")]
    [DisplayName("Master Status"), InstanceName("Master Status")]
    [ReadPermission("Master:MasterStatus")]
    [ModifyPermission("Master:MasterStatus")]
    [LookupScript(Permission ="*")]
    public sealed class MasterStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Status"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdStatus
        {
            get { return Fields.IdStatus[this]; }
            set { Fields.IdStatus[this] = value; }
        }

        [DisplayName("Nama Status"), Size(255), QuickSearch]
        public String NamaStatus
        {
            get { return Fields.NamaStatus[this]; }
            set { Fields.NamaStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdStatus; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaStatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdStatus;
            public StringField NamaStatus;
        }
    }
}
