
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[DetailAktaLahir]")]
    [DisplayName("Detail Akta Lahir"), InstanceName("Detail Akta Lahir")]
    [ReadPermission("Transaction:DetailAktaLahir")]
    [ModifyPermission("Transaction:DetailAktaLahir")]
    public sealed class DetailAktaLahirRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Detail Akta Lahir"), Identity]
        public Int32? IdDetailAktaLahir
        {
            get { return Fields.IdDetailAktaLahir[this]; }
            set { Fields.IdDetailAktaLahir[this] = value; }
        }

        [DisplayName("Id Akta Lahir"), ForeignKey("[dbo].[FormulirAktaKelahiran]", "IdFormAktaKelahiran"), LeftJoin("jIdAktaLahir"), TextualField("IdAktaLahirNamaBayi")]
        public Int32? IdAktaLahir
        {
            get { return Fields.IdAktaLahir[this]; }
            set { Fields.IdAktaLahir[this] = value; }
        }

        [DisplayName("Nama Saksi"), Size(255), QuickSearch]
        public String NamaSaksi
        {
            get { return Fields.NamaSaksi[this]; }
            set { Fields.NamaSaksi[this] = value; }
        }

        [DisplayName("Tgl Lahir Saksi")]
        public DateTime? TglLahirSaksi
        {
            get { return Fields.TglLahirSaksi[this]; }
            set { Fields.TglLahirSaksi[this] = value; }
        }

        [DisplayName("Pekerjaan Saksi"), Size(255)]
        public String PekerjaanSaksi
        {
            get { return Fields.PekerjaanSaksi[this]; }
            set { Fields.PekerjaanSaksi[this] = value; }
        }

        [DisplayName("Nik Saksi"), Column("NIKSaksi"), Size(255)]
        public String NikSaksi
        {
            get { return Fields.NikSaksi[this]; }
            set { Fields.NikSaksi[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        [DisplayName("Id Akta Lahir Id Form Flow"), Expression("jIdAktaLahir.[IdFormFlow]")]
        public Int32? IdAktaLahirIdFormFlow
        {
            get { return Fields.IdAktaLahirIdFormFlow[this]; }
            set { Fields.IdAktaLahirIdFormFlow[this] = value; }
        }

        [DisplayName("Id Akta Lahir Id User Pelapor"), Expression("jIdAktaLahir.[IdUserPelapor]")]
        public Int32? IdAktaLahirIdUserPelapor
        {
            get { return Fields.IdAktaLahirIdUserPelapor[this]; }
            set { Fields.IdAktaLahirIdUserPelapor[this] = value; }
        }

        [DisplayName("Nama Bayi"), Expression("jIdAktaLahir.[NamaBayi]"),MinSelectLevel(SelectLevel.List)]
        public String IdAktaLahirNamaBayi
        {
            get { return Fields.IdAktaLahirNamaBayi[this]; }
            set { Fields.IdAktaLahirNamaBayi[this] = value; }
        }

        [DisplayName("Id Akta Lahir Kelamin Bayi"), Expression("jIdAktaLahir.[KelaminBayi]")]
        public Int32? IdAktaLahirKelaminBayi
        {
            get { return Fields.IdAktaLahirKelaminBayi[this]; }
            set { Fields.IdAktaLahirKelaminBayi[this] = value; }
        }

        [DisplayName("Id Akta Lahir Tempat Kelahiran"), Expression("jIdAktaLahir.[TempatKelahiran]")]
        public String IdAktaLahirTempatKelahiran
        {
            get { return Fields.IdAktaLahirTempatKelahiran[this]; }
            set { Fields.IdAktaLahirTempatKelahiran[this] = value; }
        }

        [DisplayName("Id Akta Lahir Hari Kelahiran"), Expression("jIdAktaLahir.[HariKelahiran]")]
        public String IdAktaLahirHariKelahiran
        {
            get { return Fields.IdAktaLahirHariKelahiran[this]; }
            set { Fields.IdAktaLahirHariKelahiran[this] = value; }
        }

        [DisplayName("Id Akta Lahir Tgl Lahir"), Expression("jIdAktaLahir.[TglLahir]")]
        public DateTime? IdAktaLahirTglLahir
        {
            get { return Fields.IdAktaLahirTglLahir[this]; }
            set { Fields.IdAktaLahirTglLahir[this] = value; }
        }

        [DisplayName("Id Akta Lahir Waktu Kelahiran"), Expression("jIdAktaLahir.[WaktuKelahiran]")]
        public TimeSpan? IdAktaLahirWaktuKelahiran
        {
            get { return Fields.IdAktaLahirWaktuKelahiran[this]; }
            set { Fields.IdAktaLahirWaktuKelahiran[this] = value; }
        }

        [DisplayName("Id Akta Lahir Jenis Kelahiran"), Expression("jIdAktaLahir.[JenisKelahiran]")]
        public Int32? IdAktaLahirJenisKelahiran
        {
            get { return Fields.IdAktaLahirJenisKelahiran[this]; }
            set { Fields.IdAktaLahirJenisKelahiran[this] = value; }
        }

        [DisplayName("Id Akta Lahir Berat Bayi"), Expression("jIdAktaLahir.[BeratBayi]")]
        public Decimal? IdAktaLahirBeratBayi
        {
            get { return Fields.IdAktaLahirBeratBayi[this]; }
            set { Fields.IdAktaLahirBeratBayi[this] = value; }
        }

        [DisplayName("Id Akta Lahir Panjang Bayi"), Expression("jIdAktaLahir.[PanjangBayi]")]
        public Decimal? IdAktaLahirPanjangBayi
        {
            get { return Fields.IdAktaLahirPanjangBayi[this]; }
            set { Fields.IdAktaLahirPanjangBayi[this] = value; }
        }

        [DisplayName("Id Akta Lahir Anak Ke"), Expression("jIdAktaLahir.[AnakKe]")]
        public Int32? IdAktaLahirAnakKe
        {
            get { return Fields.IdAktaLahirAnakKe[this]; }
            set { Fields.IdAktaLahirAnakKe[this] = value; }
        }

        [DisplayName("Id Akta Lahir Nama Ibu"), Expression("jIdAktaLahir.[NamaIbu]")]
        public String IdAktaLahirNamaIbu
        {
            get { return Fields.IdAktaLahirNamaIbu[this]; }
            set { Fields.IdAktaLahirNamaIbu[this] = value; }
        }

        [DisplayName("Id Akta Lahir Nik Ibu"), Expression("jIdAktaLahir.[NikIbu]")]
        public String IdAktaLahirNikIbu
        {
            get { return Fields.IdAktaLahirNikIbu[this]; }
            set { Fields.IdAktaLahirNikIbu[this] = value; }
        }

        [DisplayName("Id Akta Lahir Pekerjaan Ibu"), Expression("jIdAktaLahir.[PekerjaanIbu]")]
        public String IdAktaLahirPekerjaanIbu
        {
            get { return Fields.IdAktaLahirPekerjaanIbu[this]; }
            set { Fields.IdAktaLahirPekerjaanIbu[this] = value; }
        }

        [DisplayName("Id Akta Lahir Tgl Lahir Ibu"), Expression("jIdAktaLahir.[TglLahirIbu]")]
        public DateTime? IdAktaLahirTglLahirIbu
        {
            get { return Fields.IdAktaLahirTglLahirIbu[this]; }
            set { Fields.IdAktaLahirTglLahirIbu[this] = value; }
        }

        [DisplayName("Id Akta Lahir Alamat Ibu"), Expression("jIdAktaLahir.[AlamatIbu]")]
        public String IdAktaLahirAlamatIbu
        {
            get { return Fields.IdAktaLahirAlamatIbu[this]; }
            set { Fields.IdAktaLahirAlamatIbu[this] = value; }
        }

        [DisplayName("Id Akta Lahir Nama Ayah"), Expression("jIdAktaLahir.[NamaAyah]")]
        public String IdAktaLahirNamaAyah
        {
            get { return Fields.IdAktaLahirNamaAyah[this]; }
            set { Fields.IdAktaLahirNamaAyah[this] = value; }
        }

        [DisplayName("Id Akta Lahir Tgl Lahir Ayah"), Expression("jIdAktaLahir.[TglLahirAyah]")]
        public DateTime? IdAktaLahirTglLahirAyah
        {
            get { return Fields.IdAktaLahirTglLahirAyah[this]; }
            set { Fields.IdAktaLahirTglLahirAyah[this] = value; }
        }

        [DisplayName("Id Akta Lahir Pekerjaan Ayah"), Expression("jIdAktaLahir.[PekerjaanAyah]")]
        public String IdAktaLahirPekerjaanAyah
        {
            get { return Fields.IdAktaLahirPekerjaanAyah[this]; }
            set { Fields.IdAktaLahirPekerjaanAyah[this] = value; }
        }

        [DisplayName("Id Akta Lahir Alamat Ayah"), Expression("jIdAktaLahir.[AlamatAyah]")]
        public String IdAktaLahirAlamatAyah
        {
            get { return Fields.IdAktaLahirAlamatAyah[this]; }
            set { Fields.IdAktaLahirAlamatAyah[this] = value; }
        }

        [DisplayName("Id Akta Lahir Nik Ayah"), Expression("jIdAktaLahir.[NikAyah]")]
        public String IdAktaLahirNikAyah
        {
            get { return Fields.IdAktaLahirNikAyah[this]; }
            set { Fields.IdAktaLahirNikAyah[this] = value; }
        }

        [DisplayName("Id Akta Lahir Link Doc Akta"), Expression("jIdAktaLahir.[LinkDocAkta]")]
        public String IdAktaLahirLinkDocAkta
        {
            get { return Fields.IdAktaLahirLinkDocAkta[this]; }
            set { Fields.IdAktaLahirLinkDocAkta[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDetailAktaLahir; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaSaksi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailAktaLahirRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDetailAktaLahir;
            public Int32Field IdAktaLahir;
            public StringField NamaSaksi;
            public DateTimeField TglLahirSaksi;
            public StringField PekerjaanSaksi;
            public StringField NikSaksi;
            public StringField Desc;

            public Int32Field IdAktaLahirIdFormFlow;
            public Int32Field IdAktaLahirIdUserPelapor;
            public StringField IdAktaLahirNamaBayi;
            public Int32Field IdAktaLahirKelaminBayi;
            public StringField IdAktaLahirTempatKelahiran;
            public StringField IdAktaLahirHariKelahiran;
            public DateTimeField IdAktaLahirTglLahir;
            public TimeSpanField IdAktaLahirWaktuKelahiran;
            public Int32Field IdAktaLahirJenisKelahiran;
            public DecimalField IdAktaLahirBeratBayi;
            public DecimalField IdAktaLahirPanjangBayi;
            public Int32Field IdAktaLahirAnakKe;
            public StringField IdAktaLahirNamaIbu;
            public StringField IdAktaLahirNikIbu;
            public StringField IdAktaLahirPekerjaanIbu;
            public DateTimeField IdAktaLahirTglLahirIbu;
            public StringField IdAktaLahirAlamatIbu;
            public StringField IdAktaLahirNamaAyah;
            public DateTimeField IdAktaLahirTglLahirAyah;
            public StringField IdAktaLahirPekerjaanAyah;
            public StringField IdAktaLahirAlamatAyah;
            public StringField IdAktaLahirNikAyah;
            public StringField IdAktaLahirLinkDocAkta;
        }
    }
}
