
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ForumNew")]
    [BasedOnRow(typeof(Entities.ForumNewRow), CheckNames = true)]
    public class ForumNewForm
    {
        [Category("Forum")]
        [LookupEditor("Master.MasterForum")]
        [DisplayName("Jenis Forum")]
        public Int32 IdMasterForum { get; set; }

        //[Visible(false)]
        //public Int32 IdUserInsert { get; set; }
        [TextAreaEditor(Rows = 6)]
        [DisplayName("Detail")]

        public String DetailForum { get; set; }
        [DisplayName("Foto")]
        public String FotoDokumenForum { get; set; }
        [RadioButtonEditor(EnumKey = "Transaction.MyEnumStatushide")]

        public MyEnumStatushide HiddenUser { get; set; }

        [Category("Respon Forum")]
        [DetailForumGrid]
        public List<Entities.DetailForumRow> Detail { get; set; }
    }
}