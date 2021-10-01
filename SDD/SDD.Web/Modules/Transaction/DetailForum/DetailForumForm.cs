
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailForum")]
    [BasedOnRow(typeof(Entities.DetailForumRow), CheckNames = true)]
    public class DetailForumForm
    {
       // public Int32 IdForum { get; set; }
        //public Int32 IdUserRespon { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DetailRespon { get; set; }
        public String FotoDokumenRespon { get; set; }
      //  public DateTime Timestamp { get; set; }
    }
}