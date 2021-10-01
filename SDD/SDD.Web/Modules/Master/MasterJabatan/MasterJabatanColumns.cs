
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterJabatan")]
    [BasedOnRow(typeof(Entities.MasterJabatanRow), CheckNames = true)]
    public class MasterJabatanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdJabatan { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaJabatan { get; set; }
        [Width(300)]
        public String Desc { get; set; }
    }
}