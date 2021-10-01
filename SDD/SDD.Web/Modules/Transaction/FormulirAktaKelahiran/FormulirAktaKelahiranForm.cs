
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.FormulirAktaKelahiran")]
    [BasedOnRow(typeof(Entities.FormulirAktaKelahiranRow), CheckNames = true)]
    public class FormulirAktaKelahiranForm
    {
        //[LookupEditor(typeof(SDD.Transaction.Lookups.LookupFlowForm))]
        //public Int32 IdFormFlow { get; set; }
       // public Int32 IdUserPelapor { get; set; }
        public String NamaBayi { get; set; }
        public Administration.JenisKelamin KelaminBayi { get; set; }
        public String TempatKelahiran { get; set; }
        [HariKelahiran]
        public String HariKelahiran { get; set; }
        public DateTime TglLahir { get; set; }
       // [TimeEditor]
        public TimeSpan WaktuKelahiran { get; set; }
        public JenisKelahiran JenisKelahiran { get; set; }
        public Decimal BeratBayi { get; set; }
        public Decimal PanjangBayi { get; set; }
        public Int32 AnakKe { get; set; }
        public String NamaIbu { get; set; }
        public String NikIbu { get; set; }
        public String PekerjaanIbu { get; set; }
        public DateTime TglLahirIbu { get; set; }
        [TextAreaEditor(Rows =6)]
        public String AlamatIbu { get; set; }
        public String NamaAyah { get; set; }
        public DateTime TglLahirAyah { get; set; }
        public String PekerjaanAyah { get; set; }
        [TextAreaEditor(Rows =6)]
        public String AlamatAyah { get; set; }
        public String NikAyah { get; set; }
        [Category("Detail Formulir")]
        [DetailAktaLahirGrid]
        public List<Entities.DetailAktaLahirRow> DetailFormulir { get; set; }
        //public String LinkDocAkta { get; set; }
    }
}