
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.FormulirKk")]
    [BasedOnRow(typeof(Entities.FormulirKkRow), CheckNames = true)]
    public class FormulirKkColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdFormulirKk { get; set; }
        //[Width(200)]
        //public String IdMasterFlowDescForm { get; set; }
       
        [EditLink]
        [Width(300)]
        public String AlasanPemohon { get; set; }
        [Width(200)]
        public Int32 JumlahKk { get; set; }
        [Width(300)]
        public String DokPendukungKK { get; set; }
        [Width(300)]
        public String LinkDocKk { get; set; }
        [Width(300),QuickFilter]
        public DateTime Timestamp { get; set; }
        [Width(200)]
        public String IdUserDisplayName { get; set; }
        [Visible(false)]
        public List<Entities.DetailFormulirKkRow> DetailFormulir { get; set; }

    }
}