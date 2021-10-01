
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.AparaturDesa")]
    [BasedOnRow(typeof(Entities.AparaturDesaRow), CheckNames = true)]
    public class AparaturDesaForm
    {
        //  public Int32 IdUser { get; set; }
        //[LookupEditor("Master.MasterDesa"),Visible(false)]
        //public Int64 IdDesa { get; set; }
        [LookupEditor("Master.MasterJabatan")]
        public Int32 IdJabatan { get; set; }
        public StatusAparat StatusAparatur { get; set; }
        public DateTime PeriodeAwal { get; set; }
        public DateTime PeriodeAkhir { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescAparaturDesa { get; set; }
    }
}