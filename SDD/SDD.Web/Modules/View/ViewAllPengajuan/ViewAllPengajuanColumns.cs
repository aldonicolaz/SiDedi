
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.ViewAllPengajuan")]
    [BasedOnRow(typeof(Entities.ViewAllPengajuanRow), CheckNames = true)]
    public class ViewAllPengajuanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 NumberId { get; set; }
        public Int64 IdNumber { get; set; }
        public Int32 IdUserPengajuan { get; set; }
        public Int32 IdMasterForm { get; set; }
        [EditLink]
        public String FormulirPengajuan { get; set; }
    }
}