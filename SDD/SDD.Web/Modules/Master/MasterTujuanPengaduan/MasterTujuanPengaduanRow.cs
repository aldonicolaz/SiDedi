
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterTujuanPengaduan]")]
    [DisplayName("Master Tujuan Pengaduan"), InstanceName("Master Tujuan Pengaduan")]
    [ReadPermission("Master:MasterTujuanPengaduan")]
    [ModifyPermission("Master:MasterTujuanPengaduan")]
    [LookupScript(Permission ="*")]
    public sealed class MasterTujuanPengaduanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Master Tujuan"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdMasterTujuan
        {
            get { return Fields.IdMasterTujuan[this]; }
            set { Fields.IdMasterTujuan[this] = value; }
        }

        [DisplayName("Nama Tujuan"), Size(255), QuickSearch]
        public String NamaTujuan
        {
            get { return Fields.NamaTujuan[this]; }
            set { Fields.NamaTujuan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdMasterTujuan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaTujuan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterTujuanPengaduanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdMasterTujuan;
            public StringField NamaTujuan;
        }
    }
}
