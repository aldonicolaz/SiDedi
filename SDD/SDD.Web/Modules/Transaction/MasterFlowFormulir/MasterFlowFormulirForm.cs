
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.MasterFlowFormulir")]
    [BasedOnRow(typeof(Entities.MasterFlowFormulirRow), CheckNames = true)]
    public class MasterFlowFormulirForm
    {
        [LookupEditor("Master.MasterFormulir")]
        public Int32 IdMasterForm { get; set; }
        public Int32 Slaform { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescForm { get; set; }
        [LookupEditor("Master.MasterDesa")]
        public Int64 IdDesa { get; set; }

        [Category("Detail Flow Formulir")]
        [DetailFlowFormGrid]
        public List<Entities.DetailFlowFormRow> DetailFlowFormulir { get; set; }
    }
}