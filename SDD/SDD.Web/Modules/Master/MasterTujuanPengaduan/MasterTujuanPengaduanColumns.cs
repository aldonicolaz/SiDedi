
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterTujuanPengaduan")]
    [BasedOnRow(typeof(Entities.MasterTujuanPengaduanRow), CheckNames = true)]
    public class MasterTujuanPengaduanColumns
    {
        [EditLink, DisplayName("ID"), AlignRight]
        public Int32 IdMasterTujuan { get; set; }
        [EditLink,Width(300)]
        public String NamaTujuan { get; set; }
    }
}