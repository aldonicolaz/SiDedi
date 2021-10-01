
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterSatuan")]
    [BasedOnRow(typeof(Entities.MasterSatuanRow), CheckNames = true)]
    public class MasterSatuanForm
    {
        public String NamaSatuan { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescSatuan { get; set; }
    }
}