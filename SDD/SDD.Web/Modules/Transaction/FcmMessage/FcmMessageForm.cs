
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.FcmMessage")]
    [BasedOnRow(typeof(Entities.FcmMessageRow), CheckNames = true)]
    public class FcmMessageForm
    {
        [LookupEditor(typeof(SDD.Transaction.Lookups.LookupUserDesa))]
        [DisplayName("User")]
        public Int32 IdUser { get; set; }
        //public String Message { get; set; }
        //public String Title { get; set; }
        //public String Body { get; set; }
        //public String Action { get; set; }
        //public Int32 Status { get; set; }
        //public String Response { get; set; }
        //public DateTime TimeStamp { get; set; }
        // public Int32 IdParentMessage { get; set; }
    }
}