
namespace SDD.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Master"), TableName("[dbo].[MasterHasilBudidaya]")]
    [DisplayName("Master Hasil Budidaya"), InstanceName("Master Hasil Budidaya")]
    [ReadPermission("Master:MasterHasilBudidaya")]
    [ModifyPermission("Master:MasterHasilBudidaya")]
    [LookupScript(Permission ="*")]
    public sealed class MasterHasilBudidayaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Hasil Budidaya"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdHasilBudidaya
        {
            get { return Fields.IdHasilBudidaya[this]; }
            set { Fields.IdHasilBudidaya[this] = value; }
        }

        [DisplayName("Master Budidaya"), ForeignKey("[dbo].[MasterBudidaya]", "IdBudidaya"), LeftJoin("jIdMasterBudidaya"), TextualField("IdMasterBudidayaNamaBudidaya"),LookupInclude]
        public Int32? IdMasterBudidaya
        {
            get { return Fields.IdMasterBudidaya[this]; }
            set { Fields.IdMasterBudidaya[this] = value; }
        }

        [DisplayName("Nama Hasil"), Size(255), QuickSearch]
        public String NamaHasil
        {
            get { return Fields.NamaHasil[this]; }
            set { Fields.NamaHasil[this] = value; }
        }

        [DisplayName("Satuan"), ForeignKey("[dbo].[MasterSatuan]", "IdSatuan"), LeftJoin("jIdSatuanHasil"), TextualField("IdSatuanHasilNamaSatuan")]
        public Int32? IdSatuanHasil
        {
            get { return Fields.IdSatuanHasil[this]; }
            set { Fields.IdSatuanHasil[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        [DisplayName("Id Master Budidaya Id Satuan Budidaya"), Expression("jIdMasterBudidaya.[IdSatuanBudidaya]")]
        public Int32? IdMasterBudidayaIdSatuanBudidaya
        {
            get { return Fields.IdMasterBudidayaIdSatuanBudidaya[this]; }
            set { Fields.IdMasterBudidayaIdSatuanBudidaya[this] = value; }
        }

        [DisplayName("Nama Budidaya"), Expression("jIdMasterBudidaya.[NamaBudidaya]"),MinSelectLevel(SelectLevel.List)]
        public String IdMasterBudidayaNamaBudidaya
        {
            get { return Fields.IdMasterBudidayaNamaBudidaya[this]; }
            set { Fields.IdMasterBudidayaNamaBudidaya[this] = value; }
        }

        [DisplayName("Id Master Budidaya Id Pekerjaan"), Expression("jIdMasterBudidaya.[IdPekerjaan]")]
        public Int32? IdMasterBudidayaIdPekerjaan
        {
            get { return Fields.IdMasterBudidayaIdPekerjaan[this]; }
            set { Fields.IdMasterBudidayaIdPekerjaan[this] = value; }
        }

        [DisplayName("Satuan"), Expression("jIdSatuanHasil.[NamaSatuan]"), MinSelectLevel(SelectLevel.List)]
        public String IdSatuanHasilNamaSatuan
        {
            get { return Fields.IdSatuanHasilNamaSatuan[this]; }
            set { Fields.IdSatuanHasilNamaSatuan[this] = value; }
        }

        [DisplayName("Id Satuan Hasil Desc Satuan"), Expression("jIdSatuanHasil.[DescSatuan]")]
        public String IdSatuanHasilDescSatuan
        {
            get { return Fields.IdSatuanHasilDescSatuan[this]; }
            set { Fields.IdSatuanHasilDescSatuan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdHasilBudidaya; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaHasil; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterHasilBudidayaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdHasilBudidaya;
            public Int32Field IdMasterBudidaya;
            public StringField NamaHasil;
            public Int32Field IdSatuanHasil;
            public StringField Desc;

            public Int32Field IdMasterBudidayaIdSatuanBudidaya;
            public StringField IdMasterBudidayaNamaBudidaya;
            public Int32Field IdMasterBudidayaIdPekerjaan;

            public StringField IdSatuanHasilNamaSatuan;
            public StringField IdSatuanHasilDescSatuan;
        }
    }
}
