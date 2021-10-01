
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterForum")]
    [BasedOnRow(typeof(Entities.MasterForumRow), CheckNames = true)]
    public class MasterForumForm
    {
        public String NamaForum { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Deskripsi { get; set; }
    }
}