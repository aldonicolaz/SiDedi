
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.FormulirKk")]
    [BasedOnRow(typeof(Entities.FormulirKkRow), CheckNames = true)]
    public class FormulirKkForm
    {
        //[LookupEditor(typeof(SDD.Transaction.Lookups.LookupFlowForm))]
        //public Int32 IdMasterFlow { get; set; }
        // public Int32 IdUser { get; set; }
        public String AlasanPemohon { get; set; }
        public Int32 JumlahKk { get; set; }
        public String DokPendukungKK { get; set; }

        [Category("Detail Formulir")]
        [DetailFormulirKkGrid]
        public List<Entities.DetailFormulirKkRow> DetailFormulir { get; set; }
        // public DateTime Timestamp { get; set; }
        //  public String LinkDocKk { get; set; }
    }
}