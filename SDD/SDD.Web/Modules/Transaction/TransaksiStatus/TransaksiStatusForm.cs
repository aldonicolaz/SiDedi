
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.TransaksiStatus")]
    [BasedOnRow(typeof(Entities.TransaksiStatusRow), CheckNames = false)]
    public class TransaksiStatusForm
    {
        [DisplayName("Formulir")]
        [LookupEditor("Master.MasterFormulir")]
        public Int32 IdMasterForm { get; set; }
        [DisplayName("User Pengaju")]
        [LookupEditor(typeof(SDD.Transaction.Lookups.LookupUserDesa))]
        public Int32 IdUserPengajuan { get; set; }
        [DisplayName("Status")]
        [LookupEditor("Master.MasterStatus")]
        public Int32 IdStatus { get; set; }
        [Visible(false)]
        public String LinkFormulir { get; set; }
        [DisplayName("Link Formulir")]
        [StaticTextBlock(Text = "", IsHtml = true)]
        public String DokumenFormulir { get; set; }
        [ReadOnly(true)]
        public String Dokumen { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Keterangan { get; set; }
        [DisplayName("User Aparat"),Visible(false)]
        public Int32 IdUserAparat { get; set; }
        [DisplayName("Tanggal"), HalfWidth,Visible(false)]
        public DateTime TimeStamp { get; set; }
    }
}