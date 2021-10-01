
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.FormulirAktaKelahiran")]
    [BasedOnRow(typeof(Entities.FormulirAktaKelahiranRow), CheckNames = true)]
    public class FormulirAktaKelahiranColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdFormAktaKelahiran { get; set; }
        //[Width(300)]
        //public String IdFormFlowDescForm { get; set; }
        [Width(300)]
        public String IdUserPelaporDisplayName { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaBayi { get; set; }
        public Administration.JenisKelamin KelaminBayi { get; set; }
        [Width(300)]
        public String TempatKelahiran { get; set; }
        [Width(300)]
        public String HariKelahiran { get; set; }
        [Width(200)]
        public DateTime TglLahir { get; set; }
        [Width(200)]
        public TimeSpan WaktuKelahiran { get; set; }
        [Width(300)]
        public JenisKelahiran JenisKelahiran { get; set; }
        [Width(200)]
        public Decimal BeratBayi { get; set; }
        [Width(200)]
        public Decimal PanjangBayi { get; set; }
        [Width(200)]
        public Int32 AnakKe { get; set; }
        [Width(300)]
        public String NamaIbu { get; set; }
        [Width(300)]
        public String NikIbu { get; set; }
        [Width(300)]
        public String PekerjaanIbu { get; set; }
        [Width(200)]
        public DateTime TglLahirIbu { get; set; }
        [Width(300)]
        public String AlamatIbu { get; set; }
        [Width(300)]
        public String NamaAyah { get; set; }
        [Width(200)]
        public DateTime TglLahirAyah { get; set; }
        [Width(300)]
        public String PekerjaanAyah { get; set; }
        [Width(300)]
        public String AlamatAyah { get; set; }
        [Width(300)]
        public String NikAyah { get; set; }
        [Width(300)]
        public String LinkDocAkta { get; set; }
        [Visible(false)]
        public List<Entities.DetailAktaLahirRow> DetailFormulir { get; set; }
    }
}