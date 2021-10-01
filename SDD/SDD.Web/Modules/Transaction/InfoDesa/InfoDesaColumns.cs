
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.InfoDesa")]
    [BasedOnRow(typeof(Entities.InfoDesaRow), CheckNames = true)]
    public class InfoDesaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdInfoDesa { get; set; }
        [Visible(false)]
        public Int32 IdUser { get; set; }
        [Width(300),EditLink]
        public String TitleInfo { get; set; }
        [Width(300),EditLink]
        public String ShortDescInfo { get; set; }
        [Width(300)]
        public String BodyInfo { get; set; }
        [Width(300)]
        public String Image { get; set; }
        [Width(300)]
        public String DisplayName { get; set; }
        [QuickFilter]
        public DateTime Timestamp { get; set; }
    }
}