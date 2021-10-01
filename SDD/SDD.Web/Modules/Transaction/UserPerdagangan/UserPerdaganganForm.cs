
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.UserPerdagangan")]
    [BasedOnRow(typeof(Entities.UserPerdaganganRow), CheckNames = true)]
    public class UserPerdaganganForm
    {
      //  public Int32 Iduser { get; set; }
        public String NamaBrandToko { get; set; }
        [JenisDagangan]
        public String JenisDagangan { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
        [DefaultValue(4), Visible(false)]
        public Int32 IdPekerjaan { get; set; }
        [Category("Detail Perdagangan")]
        [DetailUserPerdaganganGrid]
        public List<Entities.DetailUserPerdaganganRow> DetailPerdagangan { get; set; }
    }
}