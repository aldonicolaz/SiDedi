
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailFlowForm")]
    [BasedOnRow(typeof(Entities.DetailFlowFormRow), CheckNames = true)]
    public class DetailFlowFormForm
    {
       // public Int32 IdFormFlow { get; set; }
        [LookupEditor("Master.MasterJabatan")]
        public Int32 IdJabatan { get; set; }
        public Int32 UrutanFlow { get; set; }
        public Int32 SlaDetail { get; set; }
    }
}