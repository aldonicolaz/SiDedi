
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[ParentMessage]")]
    [DisplayName("Broadcast Message"), InstanceName("Broadcast Message")]
    [ReadPermission("Transaction:ParentMessage")]
    [ModifyPermission("Transaction:ParentMessage")]
    public sealed class ParentMessageRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Parent Message"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdParentMessage
        {
            get { return Fields.IdParentMessage[this]; }
            set { Fields.IdParentMessage[this] = value; }
        }

        [DisplayName("Message"), Size(900), QuickSearch]
        public String Message
        {
            get { return Fields.Message[this]; }
            set { Fields.Message[this] = value; }
        }

        [DisplayName("Title"), Size(255)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Body"), Size(900)]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("Time Stamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss"), Width(200)]
        public DateTime? TimeStamp
        {
            get { return Fields.TimeStamp[this]; }
            set { Fields.TimeStamp[this] = value; }
        }

        [DisplayName("Option1")]
        public Int32? Option1
        {
            get { return Fields.Option1[this]; }
            set { Fields.Option1[this] = value; }
        }

        [DisplayName("Option2")]
        public Int32? Option2
        {
            get { return Fields.Option2[this]; }
            set { Fields.Option2[this] = value; }
        }
        [DisplayName("Detail"), MasterDetailRelation(foreignKey: "IdParentMessage"), NotMapped]
        public System.Collections.Generic.List<FcmMessageRow> Detail
        {
            get { return Fields.Detail[this]; }
            set { Fields.Detail[this] = value; }
        }

        [DisplayName("Admin Share"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("JUsers")]
        public Int32? IdUserShare
        {
            get { return Fields.IdUserShare[this]; }
            set { Fields.IdUserShare[this] = value; }
        }

        [DisplayName("Admin Share"), Size(255), QuickSearch, Expression("JUsers.[DisplayName]")]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdParentMessage; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Message; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ParentMessageRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdParentMessage;
            public StringField Message;
            public StringField Title;
            public StringField Body;
            public DateTimeField TimeStamp;
            public Int32Field Option1;
            public Int32Field Option2;
            public RowListField<FcmMessageRow> Detail;
            public Int32Field IdUserShare;
            public StringField DisplayName;
        }
    }
}
