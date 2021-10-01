
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.AparaturDesa")]
    [BasedOnRow(typeof(Entities.AparaturDesaRow), CheckNames = true)]
    public class AparaturDesaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdAparaturDesa { get; set; }
        [Visible(false)]
        [LookupEditor("Master.MasterDesa"),QuickFilter]
        public Int64 IdDesa { get; set; }
        [Width(300)]
        public String IdUserDisplayName { get; set; }
        [EditLink]
        [Width(300)]
        public String IdDesaNamaDesa { get; set; }
        [Width(300)]
        public String IdJabatanNamaJabatan { get; set; }
        [Width(300)]
        public StatusAparat StatusAparatur { get; set; }
        [Width(300)]
        public DateTime PeriodeAwal { get; set; }
        [Width(300)]
        public DateTime PeriodeAkhir { get; set; }
 
        [Width(300)]
        public String DescAparaturDesa { get; set; }
    }
}