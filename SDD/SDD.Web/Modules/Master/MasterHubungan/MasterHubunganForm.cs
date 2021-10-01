
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterHubungan")]
    [BasedOnRow(typeof(Entities.MasterHubunganRow), CheckNames = true)]
    public class MasterHubunganForm
    {
        public String NamaHubungan { get; set; }
        public String KodeHubungan { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescHubungan { get; set; }
    }
}