
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailFormulirKk")]
    [BasedOnRow(typeof(Entities.DetailFormulirKkRow), CheckNames = true)]
    public class DetailFormulirKkForm
    {
       // public Int32 IdFormulirKk { get; set; }
        [LookupEditor("Master.MasterHubungan")]
        public Int32 IdMasterHub { get; set; }
        public String Nik { get; set; }
        public String NamaLengkap { get; set; }
    }
}