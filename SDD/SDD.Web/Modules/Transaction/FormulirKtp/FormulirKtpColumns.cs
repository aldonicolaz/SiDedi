
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.FormulirKtp")]
    [BasedOnRow(typeof(Entities.FormulirKtpRow), CheckNames = true)]
    public class FormulirKtpColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdFormulirKtp { get; set; }
        //public Int32 IdFFowForm { get; set; }
        [EditLink]
        [TypePermohonan]
        [Width(300)]
        public String TypePermohonan { get; set; }
        [Width(300)]
        public String DokPendukung { get; set; }
        [Width(300)]
        public String Desc { get; set; }
        [Width(300)]
        public String LinkDocKTP { get; set; }
        [Width(300)]
        public String IdUserDisplayName { get; set; }
    }
}