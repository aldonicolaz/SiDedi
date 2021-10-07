
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.Forum")]
    [BasedOnRow(typeof(Entities.ForumRow), CheckNames = true)]
    public class ForumColumns
    {
        [EditLink, DisplayName("ID"), AlignCenter]
        public Int32 IdForum { get; set; }
        [Width(150)]
        [EditLink]
        public String IdMasterForumNamaForum { get; set; }
        [Width(150)]
        public String IdUserInsertDisplayName { get; set; }
        [Width(300)]
        public String DetailForum { get; set; }
        [Width(300),Visible(false)]
        public String FotoDokumenForum { get; set; }
        [Width(300),Visible(false)]
        public MyEnumStatushide HiddenUser { get; set; }
        [Width(200),QuickFilter]
        public DateTime Timestamp { get; set; }
        [Visible(false)]
        public List<Entities.DetailForumRow> Detail { get; set; }
    }
}