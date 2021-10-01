
namespace SDD.View.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("View"), TableName("[dbo].[viewUserPengajuan]")]
    [DisplayName("View User Pengajuan"), InstanceName("View User Pengajuan")]
    [ReadPermission("View:ViewUserPengajuan")]
    [ModifyPermission("View:ViewUserPengajuan")]
    public sealed class ViewUserPengajuanRow : Row, IIdRow, INameRow
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

        [DisplayName("User Pengaju")]
        public Int32? UserPengaju
        {
            get { return Fields.UserPengaju[this]; }
            set { Fields.UserPengaju[this] = value; }
        }

        [DisplayName("Id Formulir")]
        public Int32? IdFormulir
        {
            get { return Fields.IdFormulir[this]; }
            set { Fields.IdFormulir[this] = value; }
        }

        [DisplayName("Formulir"), Size(255), QuickSearch]
        public String Formulir
        {
            get { return Fields.Formulir[this]; }
            set { Fields.Formulir[this] = value; }
        }

        [DisplayName("Dokumen"), Size(255)]
        public String Dokumen
        {
            get { return Fields.Dokumen[this]; }
            set { Fields.Dokumen[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NumberId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Formulir; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewUserPengajuanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NumberId;
            public Int64Field IdNumber;
            public Int32Field UserPengaju;
            public Int32Field IdFormulir;
            public StringField Formulir;
            public StringField Dokumen;
        }
    }
}
