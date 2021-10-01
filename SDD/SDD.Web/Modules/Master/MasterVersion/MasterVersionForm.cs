
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterVersion")]
    [BasedOnRow(typeof(Entities.MasterVersionRow), CheckNames = true)]
    public class MasterVersionForm
    {
        public String NamaVersion { get; set; }
        public String NumberVersion { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Description { get; set; }

      //  public DateTime Timestamp { get; set; }
    }
}