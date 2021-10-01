
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.InfoDesa")]
    [BasedOnRow(typeof(Entities.InfoDesaRow), CheckNames = true)]
    public class InfoDesaForm
    {
       // public Int32 IdUser { get; set; }
       
        public String TitleInfo { get; set; }
        [MyCustomEditor]
        public String ShortDescInfo { get; set; }
        [MyCustomEditor]
        public String BodyInfo { get; set; }
        public String Image { get; set; }


        // public DateTime Timestamp { get; set; }
    }
}