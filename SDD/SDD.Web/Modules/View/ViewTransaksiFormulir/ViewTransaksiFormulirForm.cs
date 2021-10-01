
namespace SDD.View.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("View.ViewTransaksiFormulir")]
    [BasedOnRow(typeof(Entities.ViewTransaksiFormulirRow), CheckNames = false)]
    public class ViewTransaksiFormulirForm
    {
        //public Int32 IdTransaksiForm { get; set; }
        //public Int32 IdUserPengajuan { get; set; }
        //public Int32 IdUserAparat { get; set; }

        //public Int32 IdMasterForm { get; set; }
        //public Int32 IdStatus { get; set; }
        //public Int32 IdFormulir { get; set; }
        public String NamaStatus { get; set; }
        [Visible(false)]
        public String Formulir { get; set; }
        [DisplayName("Link Formulir")]
        [StaticTextBlock(Text = "", IsHtml = true)]
        public String DokumenFormulir { get; set; }
        public String Dokumen { get; set; }
      [TextAreaEditor(Rows =6)]
        public String Info { get; set; }
       // public DateTime TimeStamp { get; set; }
    }
}