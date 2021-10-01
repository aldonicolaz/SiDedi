
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterJabatan]")]
    [DisplayName("Master Jabatan"), InstanceName("Master Jabatan")]
    [ReadPermission("Master:MasterJabatan")]
    [ModifyPermission("Master:MasterJabatan")]
    [LookupScript(Permission = "*")]
    public sealed class MasterJabatanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Jabatan"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdJabatan
        {
            get { return Fields.IdJabatan[this]; }
            set { Fields.IdJabatan[this] = value; }
        }

        [DisplayName("Nama Jabatan"), Size(255), QuickSearch]
        public String NamaJabatan
        {
            get { return Fields.NamaJabatan[this]; }
            set { Fields.NamaJabatan[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdJabatan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaJabatan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterJabatanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdJabatan;
            public StringField NamaJabatan;
            public StringField Desc;
        }
    }
}
