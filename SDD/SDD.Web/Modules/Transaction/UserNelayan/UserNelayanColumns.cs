
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.UserNelayan")]
    [BasedOnRow(typeof(Entities.UserNelayanRow), CheckNames = true)]
    public class UserNelayanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdUserNelayan { get; set; }
       // public Int32 IdUser { get; set; }
        [EditLink]
        [Width(300)]
        public String Desc { get; set; }
        [Width(300)]
        public String IduserDisplayName { get; set; }
        [Visible(false)]
        public List<Entities.DetailKapalNelayanRow> DetailNelayan { get; set; }
    }
}