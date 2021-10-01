
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.FcmMessage")]
    [BasedOnRow(typeof(Entities.FcmMessageRow), CheckNames = true)]
    public class FcmMessageColumns
    {
       [EditLink, DisplayName("ID"), AlignRight]
        public Int32 IdMessage { get; set; }

        [DisplayName("User")]
        [EditLink]
        [Width(300)]
        public String IdUserUsername { get; set; }

        //public String Message { get; set; }
        //public String Title { get; set; }
        //public String Body { get; set; }
        //public String Action { get; set; }
        //public Int32 Status { get; set; }
        //public String Response { get; set; }
        public DateTime TimeStamp { get; set; }
        // public String IdParentMessageMessage { get; set; }
    }
}