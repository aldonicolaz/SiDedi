
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailForum")]
    [BasedOnRow(typeof(Entities.DetailForumRow), CheckNames = true)]
    public class DetailForumColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDetailForum { get; set; }
        //public String IdForumDetailForum { get; set; }
     
        [EditLink]
        public String DetailRespon { get; set; }
        [Width(300)]
        public String FotoDokumenRespon { get; set; }
        [Width(200)]
        public DateTime Timestamp { get; set; }
        [Width(300)]
        public String IdUserResponDisplayName { get; set; }
    }
}