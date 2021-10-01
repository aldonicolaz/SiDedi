
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ParentMessage")]
    [BasedOnRow(typeof(Entities.ParentMessageRow), CheckNames = true)]
    public class ParentMessageForm
    {
        [Category("Message")]
       
        public String Title { get; set; }
        [MyCustomEditor]
        public String Message { get; set; }

        [MyCustomEditor]
        public String Body { get; set; }
        [Category("Detail Message")]
        [FcmMessageGrid]
        public List<Entities.FcmMessageRow> Detail { get; set; }
        //public DateTime TimeStamp { get; set; }
    }
}