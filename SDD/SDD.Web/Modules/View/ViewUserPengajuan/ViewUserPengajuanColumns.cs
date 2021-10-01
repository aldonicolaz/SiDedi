
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.ViewUserPengajuan")]
    [BasedOnRow(typeof(Entities.ViewUserPengajuanRow), CheckNames = true)]
    public class ViewUserPengajuanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 NumberId { get; set; }
        //public Int64 IdNumber { get; set; }
        //public Int32 UserPengaju { get; set; }
        //public Int32 IdFormulir { get; set; }
        [EditLink]
        public String Formulir { get; set; }
        public String Dokumen { get; set; }
    }
}