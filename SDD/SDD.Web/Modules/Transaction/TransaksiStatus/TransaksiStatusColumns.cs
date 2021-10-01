
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.TransaksiStatus")]
    [BasedOnRow(typeof(Entities.TransaksiStatusRow), CheckNames = false)]
    public class TransaksiStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 IdTransaksi { get; set; }
        [Visible(false),  LookupEditor("Master.MasterDesa"),QuickFilter]
        public Int64 IdDesa { get; set; }
        [EditLink]
        public String IdMasterFormNamaFormulir { get; set; }
        [Visible(false),QuickFilter]
        [LookupEditor("Master.MasterStatus")]
        public Int32 IdStatus { get; set; }
        public String NamaStatus { get; set; }

        [Width(300)]
        public String Info { get; set; }
        [Visible(false)]
        public Int32 IdUserPengajuan { get; set; }
        [Width(200)]
        public String DisplayName { get; set; }
        [Width(300)]
        public String NamaDesa { get; set; }
        [Width(200)]
        public String LinkFormulir { get; set; }
        [Width(200)]
        public String DisplayName1 { get; set; }
        [Width(200)]
        public String Jabatan { get; set; }
        [Width(300)]
        public String Keterangan { get; set; }


        [Visible(false)]
        [LookupEditor("Master.MasterFormulir"), QuickFilter]
        public Int32 IdFormulir { get; set; }
        [Visible(false)]
        public Int32 IdUserAparat { get; set; }
        [Width(200),QuickFilter]
        public DateTime TimeStamp { get; set; }
    }
}