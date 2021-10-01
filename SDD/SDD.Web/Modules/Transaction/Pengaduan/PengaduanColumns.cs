
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.Pengaduan")]
    [BasedOnRow(typeof(Entities.PengaduanRow), CheckNames = true)]
    public class PengaduanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter, Width(50)]
        
        public Int32 IdPengaduan { get; set; }
        [DisplayName("Nama"), Width(120)]
        public String IdUserPengaduDisplayName { get; set; }
        [DisplayName("Desa"), Width(120)]
        
        public String IdDesaNamaDesa { get; set; }
        [DisplayName("Lembaga Pengaduan"), Width(200)]
        public String IdMasterTujuanNamaTujuan { get; set; }
        [EditLink]
        [DisplayName("Perihal"), Width(300)]
        public String PerihalPengaduan { get; set; }
        [DisplayName("Foto"), Width(300)]
        public String FotoDokumen { get; set; }
        [Width(200),QuickFilter]
        public DateTime Timestamp { get; set; }
        [Category("Detail Pengaduan")]
        [Visible(false)]
        public List<Entities.DetailPengaduanRow> DetailPengaduan { get; set; }
    }
}