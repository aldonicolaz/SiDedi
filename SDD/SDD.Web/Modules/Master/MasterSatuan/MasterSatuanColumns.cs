
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterSatuan")]
    [BasedOnRow(typeof(Entities.MasterSatuanRow), CheckNames = true)]
    public class MasterSatuanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdSatuan { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaSatuan { get; set; }
        [Width(300)]
        public String DescSatuan { get; set; }
    }
}