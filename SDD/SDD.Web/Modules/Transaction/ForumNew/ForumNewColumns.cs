
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ForumNew")]
    [BasedOnRow(typeof(Entities.ForumNewRow), CheckNames = true)]
    public class ForumNewColumns
    {
        [EditLink, DisplayName("ID"), AlignRight]
        public Int32 IdForum { get; set; }
        [Width(300)]
        [EditLink]
        public String IdMasterForumNamaForum { get; set; }
        [Width(300)]
        public String IdUserInsertDisplayName { get; set; }
        [Width(300)]
        public String DetailForum { get; set; }
        [Width(300)]
        public String FotoDokumenForum { get; set; }
        [Width(300)]
        public MyEnumStatushide HiddenUser { get; set; }
        [Width(200)]
        public DateTime Timestamp { get; set; }
    }
}