
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.FcmMessageUser")]
    [BasedOnRow(typeof(Entities.FcmMessageUserRow), CheckNames = true)]
    public class FcmMessageUserColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdMessage { get; set; }
        public String IdUserUsername { get; set; }
        [EditLink]
        public String Message { get; set; }
        public String Title { get; set; }
        public String Body { get; set; }
        public String Action { get; set; }
        public Int32 Status { get; set; }
        public String Response { get; set; }
        public DateTime TimeStamp { get; set; }
        public String IdParentMessageMessage { get; set; }
        public Int32 StatusWa { get; set; }
    }
}