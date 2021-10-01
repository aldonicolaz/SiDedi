
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailFlowForm")]
    [BasedOnRow(typeof(Entities.DetailFlowFormRow), CheckNames = true)]
    public class DetailFlowFormColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDetailFlowForm { get; set; }
        [Width(300)]
        public String IdFormFlowDescForm { get; set; }
        [Width(300)]
        public String IdJabatanNamaJabatan { get; set; }
        [Width(200)]
        public Int32 UrutanFlow { get; set; }
        [Width(200)]
        public Int32 SlaDetail { get; set; }
    }
}