
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterTujuanPengaduan")]
    [BasedOnRow(typeof(Entities.MasterTujuanPengaduanRow), CheckNames = true)]
    public class MasterTujuanPengaduanForm
    {
        public String NamaTujuan { get; set; }
    }
}