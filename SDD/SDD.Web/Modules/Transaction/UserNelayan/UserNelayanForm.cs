
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.UserNelayan")]
    [BasedOnRow(typeof(Entities.UserNelayanRow), CheckNames = true)]
    public class UserNelayanForm
    {
      //  public Int32 IdUser { get; set; }
      [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
        [DefaultValue(5), Visible(false)]
        public Int32 IdPekerjaan { get; set; }
        [Category("Detail Nelayan")]
        [DetailKapalNelayanGrid]
        public List<Entities.DetailKapalNelayanRow> DetailNelayan { get; set; }
    }
}