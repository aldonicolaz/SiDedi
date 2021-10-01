
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ParentMessage")]
    [BasedOnRow(typeof(Entities.ParentMessageRow), CheckNames = true)]
    public class ParentMessageColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdParentMessage { get; set; }
        [EditLink]
        [Width(300)]
        public String Title { get; set; }
        [Width(500)]
        public String Message { get; set; }
        [Width(500)]
        public String Body { get; set; }
        public DateTime TimeStamp { get; set; }
        [Width(300)]
        public String DisplayName { get; set; }
    }
}