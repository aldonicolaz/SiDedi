
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterForum")]
    [BasedOnRow(typeof(Entities.MasterForumRow), CheckNames = true)]
    public class MasterForumColumns
    {
        [EditLink, DisplayName("ID"), AlignRight]
        public Int32 IdMasterForum { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaForum { get; set; }
        [Width(300)]
        public String Deskripsi { get; set; }
    }
}