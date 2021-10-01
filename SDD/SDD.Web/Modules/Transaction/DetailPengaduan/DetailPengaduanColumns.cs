
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailPengaduan")]
    [BasedOnRow(typeof(Entities.DetailPengaduanRow), CheckNames = true)]
    public class DetailPengaduanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter, Width(50)]
        public Int32 IdDetailPengaduan { get; set; }
        
        [Width(300)]
        public String Tanggapan { get; set; }
        [LookupEditor("Master.MasterTujuanPengaduan")]
        [Width(300)]
        public String DisplayName { get; set; }
        [EditLink, Width(300)]
        [Visible(true)]
        public DateTime Timestamp { get; set; }
    }
}