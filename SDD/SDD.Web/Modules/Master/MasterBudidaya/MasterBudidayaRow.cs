
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterBudidaya]")]
    [DisplayName("Master Budidaya"), InstanceName("Master Budidaya")]
    [ReadPermission("Master:MasterBudidaya")]
    [ModifyPermission("Master:MasterBudidaya")]
    [LookupScript(Permission ="*")]
    public sealed class MasterBudidayaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Budidaya"), Identity]
        [SortOrder(1, descending: false)]
        public Int32? IdBudidaya
        {
            get { return Fields.IdBudidaya[this]; }
            set { Fields.IdBudidaya[this] = value; }
        }

        [DisplayName("Satuan Budidaya"), ForeignKey("[dbo].[MasterSatuan]", "IdSatuan"), LeftJoin("jIdSatuanBudidaya"), TextualField("IdSatuanBudidayaNamaSatuan")]
        public Int32? IdSatuanBudidaya
        {
            get { return Fields.IdSatuanBudidaya[this]; }
            set { Fields.IdSatuanBudidaya[this] = value; }
        }

        [DisplayName("Nama Budidaya"), Size(255), QuickSearch,LookupInclude]
        public String NamaBudidaya
        {
            get { return Fields.NamaBudidaya[this]; }
            set { Fields.NamaBudidaya[this] = value; }
        }

        [DisplayName("Pekerjaan"), ForeignKey("[dbo].[MasterPekerjaan]", "IdPekerjaan"), LeftJoin("jIdPekerjaan"), TextualField("IdPekerjaanNamaPekerjaan")]
        public Int32? IdPekerjaan
        {
            get { return Fields.IdPekerjaan[this]; }
            set { Fields.IdPekerjaan[this] = value; }
        }

        [DisplayName("Satuan"), Expression("jIdSatuanBudidaya.[NamaSatuan]")]
        public String IdSatuanBudidayaNamaSatuan
        {
            get { return Fields.IdSatuanBudidayaNamaSatuan[this]; }
            set { Fields.IdSatuanBudidayaNamaSatuan[this] = value; }
        }

        [DisplayName("Id Satuan Budidaya Desc Satuan"), Expression("jIdSatuanBudidaya.[DescSatuan]")]
        public String IdSatuanBudidayaDescSatuan
        {
            get { return Fields.IdSatuanBudidayaDescSatuan[this]; }
            set { Fields.IdSatuanBudidayaDescSatuan[this] = value; }
        }

        [DisplayName("Nama Pekerjaan"), Expression("jIdPekerjaan.[NamaPekerjaan]")]
        public String IdPekerjaanNamaPekerjaan
        {
            get { return Fields.IdPekerjaanNamaPekerjaan[this]; }
            set { Fields.IdPekerjaanNamaPekerjaan[this] = value; }
        }

        [DisplayName("Id Pekerjaan Desc"), Expression("jIdPekerjaan.[Desc]")]
        public String IdPekerjaanDesc
        {
            get { return Fields.IdPekerjaanDesc[this]; }
            set { Fields.IdPekerjaanDesc[this] = value; }
        }

        [DisplayName("Detail Budidaya"), MasterDetailRelation(foreignKey: "IdMasterBudidaya"), NotMapped]
        public List<MasterHasilBudidayaRow> DetailBudidaya
        {
            get { return Fields.DetailBudidaya[this]; }
            set { Fields.DetailBudidaya[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdBudidaya; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaBudidaya; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterBudidayaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBudidaya;
            public Int32Field IdSatuanBudidaya;
            public StringField NamaBudidaya;
            public Int32Field IdPekerjaan;

            public StringField IdSatuanBudidayaNamaSatuan;
            public StringField IdSatuanBudidayaDescSatuan;

            public StringField IdPekerjaanNamaPekerjaan;
            public StringField IdPekerjaanDesc;
            public RowListField<MasterHasilBudidayaRow> DetailBudidaya;
        }
    }
}
