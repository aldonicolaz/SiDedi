
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterJabatan")]
    [BasedOnRow(typeof(Entities.MasterJabatanRow), CheckNames = true)]
    public class MasterJabatanForm
    {
        public String NamaJabatan { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
    }
}