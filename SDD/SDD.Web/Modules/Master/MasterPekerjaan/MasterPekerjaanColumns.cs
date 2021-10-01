
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterPekerjaan")]
    [BasedOnRow(typeof(Entities.MasterPekerjaanRow), CheckNames = true)]
    public class MasterPekerjaanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdPekerjaan { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaPekerjaan { get; set; }
        [Width(300)]
        public String Desc { get; set; }
    }
}