
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.MasterFlowFormulir")]
    [BasedOnRow(typeof(Entities.MasterFlowFormulirRow), CheckNames = true)]
    public class MasterFlowFormulirColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdFormFlow { get; set; }
        [Width(300)]
        public String IdMasterFormNamaFormulir { get; set; }
        [Width(300)]
        public Int32 Slaform { get; set; }
        [EditLink]
        [Width(300)]
        public String DescForm { get; set; }
        [Width(300)]
        public String IdDesaNamaDesa { get; set; }
    }
}