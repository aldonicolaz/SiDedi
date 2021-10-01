
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailUserPerdagangan]")]
    [DisplayName("Detail Perdagangan"), InstanceName("Detail Perdagangan")]
    [ReadPermission("Transaction:DetailUserPerdagangan")]
    [ModifyPermission("Transaction:DetailUserPerdagangan")]
    public sealed class DetailUserPerdaganganRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Detail Perdagangan"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdDetailPerdagangan
        {
            get { return Fields.IdDetailPerdagangan[this]; }
            set { Fields.IdDetailPerdagangan[this] = value; }
        }

        [DisplayName("Id User Perdagangan"), ForeignKey("[dbo].[UserPerdagangan]", "IdUserPerdagangan"), LeftJoin("jIdUserPerdagangan"), TextualField("IdUserPerdaganganNamaBrandToko")]
        public Int32? IdUserPerdagangan
        {
            get { return Fields.IdUserPerdagangan[this]; }
            set { Fields.IdUserPerdagangan[this] = value; }
        }

        [DisplayName("Type Lapak")]
        public Int32? TypeLapak
        {
            get { return Fields.TypeLapak[this]; }
            set { Fields.TypeLapak[this] = value; }
        }

        [DisplayName("Luas Lapak"), Size(38)]
        public Decimal? LuasLapak
        {
            get { return Fields.LuasLapak[this]; }
            set { Fields.LuasLapak[this] = value; }
        }

        [DisplayName("Status Lapak")]
        public Int32? StatusLapak
        {
            get { return Fields.StatusLapak[this]; }
            set { Fields.StatusLapak[this] = value; }
        }

        [DisplayName("Alamat Lapak"), Size(255), QuickSearch]
        public String AlamatLapak
        {
            get { return Fields.AlamatLapak[this]; }
            set { Fields.AlamatLapak[this] = value; }
        }

        [DisplayName("Jum Pekerja")]
        public Int32? JumPekerja
        {
            get { return Fields.JumPekerja[this]; }
            set { Fields.JumPekerja[this] = value; }
        }

        [DisplayName("Semua Biaya Bulanan"), Size(19), Scale(4)]
        public Decimal? SemuaBiayaBulanan
        {
            get { return Fields.SemuaBiayaBulanan[this]; }
            set { Fields.SemuaBiayaBulanan[this] = value; }
        }

        [DisplayName("Penghasilan Bulanan"), Size(19), Scale(4)]
        public Decimal? PenghasilanBulanan
        {
            get { return Fields.PenghasilanBulanan[this]; }
            set { Fields.PenghasilanBulanan[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        //[DisplayName("Id Satuan Pendukung"), ForeignKey("[dbo].[MasterSatuan]", "IdSatuan"), LeftJoin("jIdSatuanPendukung"), TextualField("IdSatuanPendukungNamaSatuan")]
        //public Int32? IdSatuanPendukung
        //{
        //    get { return Fields.IdSatuanPendukung[this]; }
        //    set { Fields.IdSatuanPendukung[this] = value; }
        //}

        [DisplayName("Id User Perdagangan Iduser"), Expression("jIdUserPerdagangan.[Iduser]")]
        public Int32? IdUserPerdaganganIduser
        {
            get { return Fields.IdUserPerdaganganIduser[this]; }
            set { Fields.IdUserPerdaganganIduser[this] = value; }
        }

        [DisplayName("Nama Brand Toko"), Expression("jIdUserPerdagangan.[NamaBrandToko]"),MinSelectLevel(SelectLevel.List)]
        public String IdUserPerdaganganNamaBrandToko
        {
            get { return Fields.IdUserPerdaganganNamaBrandToko[this]; }
            set { Fields.IdUserPerdaganganNamaBrandToko[this] = value; }
        }

        [DisplayName("Jenis Dagangan"), Expression("jIdUserPerdagangan.[JenisDagangan]")]
        public String IdUserPerdaganganJenisDagangan
        {
            get { return Fields.IdUserPerdaganganJenisDagangan[this]; }
            set { Fields.IdUserPerdaganganJenisDagangan[this] = value; }
        }

        [DisplayName("Id User Perdagangan Desc"), Expression("jIdUserPerdagangan.[Desc]")]
        public String IdUserPerdaganganDesc
        {
            get { return Fields.IdUserPerdaganganDesc[this]; }
            set { Fields.IdUserPerdaganganDesc[this] = value; }
        }

        //[DisplayName("Id Satuan Pendukung Nama Satuan"), Expression("jIdSatuanPendukung.[NamaSatuan]")]
        //public String IdSatuanPendukungNamaSatuan
        //{
        //    get { return Fields.IdSatuanPendukungNamaSatuan[this]; }
        //    set { Fields.IdSatuanPendukungNamaSatuan[this] = value; }
        //}

        //[DisplayName("Id Satuan Pendukung Desc Satuan"), Expression("jIdSatuanPendukung.[DescSatuan]")]
        //public String IdSatuanPendukungDescSatuan
        //{
        //    get { return Fields.IdSatuanPendukungDescSatuan[this]; }
        //    set { Fields.IdSatuanPendukungDescSatuan[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailPerdagangan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AlamatLapak; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailUserPerdaganganRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailPerdagangan;
            public Int32Field IdUserPerdagangan;
            public Int32Field TypeLapak;
            public DecimalField LuasLapak;
            public Int32Field StatusLapak;
            public StringField AlamatLapak;
            public Int32Field JumPekerja;
            public DecimalField SemuaBiayaBulanan;
            public DecimalField PenghasilanBulanan;
            public StringField Desc;
          // public Int32Field IdSatuanPendukung;

            public Int32Field IdUserPerdaganganIduser;
            public StringField IdUserPerdaganganNamaBrandToko;
            public StringField IdUserPerdaganganJenisDagangan;
            public StringField IdUserPerdaganganDesc;

            //public StringField IdSatuanPendukungNamaSatuan;
            //public StringField IdSatuanPendukungDescSatuan;
        }
    }
}
