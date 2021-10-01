
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[viewAllPengajuan]")]
    [DisplayName("View All Pengajuan"), InstanceName("View All Pengajuan")]
    [ReadPermission("View:ViewAllPengajuan")]
    [ModifyPermission("View:ViewAllPengajuan")]
    public sealed class ViewAllPengajuanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Number Id")]
        public Int64? NumberId
        {
            get { return Fields.NumberId[this]; }
            set { Fields.NumberId[this] = value; }
        }

        [DisplayName("Id Number")]
        public Int64? IdNumber
        {
            get { return Fields.IdNumber[this]; }
            set { Fields.IdNumber[this] = value; }
        }

        [DisplayName("Id User Pengajuan")]
        public Int32? IdUserPengajuan
        {
            get { return Fields.IdUserPengajuan[this]; }
            set { Fields.IdUserPengajuan[this] = value; }
        }

        [DisplayName("Id Master Form")]
        public Int32? IdMasterForm
        {
            get { return Fields.IdMasterForm[this]; }
            set { Fields.IdMasterForm[this] = value; }
        }

        [DisplayName("Formulir Pengajuan"), Size(255), QuickSearch]
        public String FormulirPengajuan
        {
            get { return Fields.FormulirPengajuan[this]; }
            set { Fields.FormulirPengajuan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NumberId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FormulirPengajuan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewAllPengajuanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NumberId;
            public Int64Field IdNumber;
            public Int32Field IdUserPengajuan;
            public Int32Field IdMasterForm;
            public StringField FormulirPengajuan;
        }
    }
}
