
namespace SDD.View.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("View.ViewAllPengajuan")]
    [BasedOnRow(typeof(Entities.ViewAllPengajuanRow), CheckNames = true)]
    public class ViewAllPengajuanForm
    {
        public Int64 IdNumber { get; set; }
        public Int32 IdUserPengajuan { get; set; }
        public Int32 IdMasterForm { get; set; }
        public String FormulirPengajuan { get; set; }
    }
}