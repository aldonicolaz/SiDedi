
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.Banner")]
    [BasedOnRow(typeof(Entities.BannerRow), CheckNames = true)]
    public class BannerForm
    {
        public String Image { get; set; }
      //  public String UrlImage { get; set; }
       // public Int32 IdUser { get; set; }
        [RadioButtonEditor(EnumKey = "Transaction.MyEnumStatus")]
        
        public Int32 StatusAktif { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Description { get; set; }
    }
}