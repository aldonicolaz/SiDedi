
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterStatus")]
    [BasedOnRow(typeof(Entities.MasterStatusRow), CheckNames = true)]
    public class MasterStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdStatus { get; set; }
        [EditLink]
        public String NamaStatus { get; set; }
    }
}