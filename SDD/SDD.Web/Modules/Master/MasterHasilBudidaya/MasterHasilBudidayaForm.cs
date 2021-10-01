
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterHasilBudidaya")]
    [BasedOnRow(typeof(Entities.MasterHasilBudidayaRow), CheckNames = true)]
    public class MasterHasilBudidayaForm
    {
       // public Int32 IdMasterBudidaya { get; set; }
        public String NamaHasil { get; set; }
        [LookupEditor("Master.MasterSatuan")]
        public Int32 IdSatuanHasil { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
    }
}