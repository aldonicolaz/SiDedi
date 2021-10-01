
namespace SDD.View.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("View.ViewUserPengajuan")]
    [BasedOnRow(typeof(Entities.ViewUserPengajuanRow), CheckNames = true)]
    public class ViewUserPengajuanForm
    {
        public Int64 IdNumber { get; set; }
        //public Int32 UserPengaju { get; set; }
        //public Int32 IdFormulir { get; set; }
        public String Formulir { get; set; }
        public String Dokumen { get; set; }
    }
}