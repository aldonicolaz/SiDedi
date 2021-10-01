
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterForum]")]
    [DisplayName("Master Forum"), InstanceName("Master Forum")]
    [ReadPermission("Master:MasterForum")]
    [ModifyPermission("Master:MasterForum")]
    [LookupScript(Permission ="*")]
    public sealed class MasterForumRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Master Forum"), Identity]
        public Int32? IdMasterForum
        {
            get { return Fields.IdMasterForum[this]; }
            set { Fields.IdMasterForum[this] = value; }
        }

        [DisplayName("Nama Forum"), Size(255), QuickSearch]
        public String NamaForum
        {
            get { return Fields.NamaForum[this]; }
            set { Fields.NamaForum[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdMasterForum; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaForum; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterForumRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdMasterForum;
            public StringField NamaForum;
            public StringField Deskripsi;
        }
    }
}
