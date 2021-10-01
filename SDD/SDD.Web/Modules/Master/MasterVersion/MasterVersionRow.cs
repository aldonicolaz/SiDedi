
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterVersion]")]
    [DisplayName("Master Version"), InstanceName("Master Version")]
    [ReadPermission("Master:MasterVersion")]
    [ModifyPermission("Master:MasterVersion")]
    public sealed class MasterVersionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Master Version"), Identity]
        public Int32? IdMasterVersion
        {
            get { return Fields.IdMasterVersion[this]; }
            set { Fields.IdMasterVersion[this] = value; }
        }

        [DisplayName("Nama Version"), Size(255), QuickSearch]
        public String NamaVersion
        {
            get { return Fields.NamaVersion[this]; }
            set { Fields.NamaVersion[this] = value; }
        }

        [DisplayName("Number Version"), Size(255)]
        public String NumberVersion
        {
            get { return Fields.NumberVersion[this]; }
            set { Fields.NumberVersion[this] = value; }
        }

        [DisplayName("Description"), Size(255)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Timestamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdMasterVersion; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaVersion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterVersionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdMasterVersion;
            public StringField NamaVersion;
            public StringField NumberVersion;
            public StringField Description;
            public DateTimeField Timestamp;
        }
    }
}
