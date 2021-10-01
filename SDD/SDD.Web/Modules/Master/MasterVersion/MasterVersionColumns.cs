
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterVersion")]
    [BasedOnRow(typeof(Entities.MasterVersionRow), CheckNames = true)]
    public class MasterVersionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdMasterVersion { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaVersion { get; set; }
        [Width(300)]
        public String NumberVersion { get; set; }
        [Width(300)]
        public String Description { get; set; }
        [Width(300)]
        public DateTime Timestamp { get; set; }
    }
}