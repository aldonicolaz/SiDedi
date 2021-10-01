
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.UserPerdagangan")]
    [BasedOnRow(typeof(Entities.UserPerdaganganRow), CheckNames = true)]
    public class UserPerdaganganColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdUserPerdagangan { get; set; }
        public String IduserUsername { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaBrandToko { get; set; }
        [Width(300)]
        public String JenisDagangan { get; set; }
        [Width(300)]
        public String Desc { get; set; }
        [Visible(false)]
        public List<Entities.DetailUserPerdaganganRow> DetailPerdagangan { get; set; }
    }
}