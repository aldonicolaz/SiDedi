
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterPekerjaan")]
    [BasedOnRow(typeof(Entities.MasterPekerjaanRow), CheckNames = true)]
    public class MasterPekerjaanForm
    {
        public String NamaPekerjaan { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Desc { get; set; }
    }
}