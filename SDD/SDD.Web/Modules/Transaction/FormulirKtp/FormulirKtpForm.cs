
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.FormulirKtp")]
    [BasedOnRow(typeof(Entities.FormulirKtpRow), CheckNames = true)]
    public class FormulirKtpForm
    {
        [Visible(false)]
        public Int32 IdFFowForm { get; set; }
        [TypePermohonan]
        public String TypePermohonan { get; set; }
        public String DokPendukung { get; set; }

        [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
    }
}