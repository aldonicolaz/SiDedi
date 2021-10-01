
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.Pengaduan")]
    [BasedOnRow(typeof(Entities.PengaduanRow), CheckNames = true)]
    public class PengaduanForm
    {
        [Category("Pengaduan")]
        [Visible(false)]
        public Int32 IdPengaduan { get; set; }
 
        [LookupEditor("Master.MasterTujuanPengaduan"), DisplayName("Lembaga Pengaduan")]
        public Int32 IdMasterTujuan { get; set; }
      
        [MyCustomEditor, DisplayName("Perihal Pengaduan")]
        public String PerihalPengaduan { get; set; }
        [DisplayName("Foto / Dokumen")]
        public String FotoDokumen { get; set; }
        public DateTime Timestamp { get; set; }
        [Category("Detail Pengaduan")]
        [DetailPengaduanGrid]
        public List<Entities.DetailPengaduanRow> DetailPengaduan { get; set; }




    }
}