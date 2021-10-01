
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterStatus")]
    [BasedOnRow(typeof(Entities.MasterStatusRow), CheckNames = true)]
    public class MasterStatusForm
    {
        public String NamaStatus { get; set; }
    }
}