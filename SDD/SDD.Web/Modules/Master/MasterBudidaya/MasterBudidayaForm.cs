
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterBudidaya")]
    [BasedOnRow(typeof(Entities.MasterBudidayaRow), CheckNames = true)]
    public class MasterBudidayaForm
    {
        [LookupEditor("Master.MasterPekerjaan")]
        public Int32 IdPekerjaan { get; set; }

        public String NamaBudidaya { get; set; }

      

        [LookupEditor("Master.MasterSatuan")]
        public Int32 IdSatuanBudidaya { get; set; }

        [Category("Detail Budidaya")]
        [MasterHasilBudidayaGrid]
        public List<Entities.MasterHasilBudidayaRow> DetailBudidaya { get; set; }
    }
}