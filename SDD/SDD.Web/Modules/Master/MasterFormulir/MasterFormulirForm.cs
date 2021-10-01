
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterFormulir")]
    [BasedOnRow(typeof(Entities.MasterFormulirRow), CheckNames = true)]
    public class MasterFormulirForm
    {
        public String NamaFormulir { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescFormulir { get; set; }
    }
}