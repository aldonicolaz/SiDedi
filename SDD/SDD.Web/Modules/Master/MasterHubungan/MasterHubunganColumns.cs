
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterHubungan")]
    [BasedOnRow(typeof(Entities.MasterHubunganRow), CheckNames = true)]
    public class MasterHubunganColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdHubungan { get; set; }
        [EditLink]
        public String NamaHubungan { get; set; }
        public String KodeHubungan { get; set; }
        [Width(300)]
        public String DescHubungan { get; set; }
    }
}