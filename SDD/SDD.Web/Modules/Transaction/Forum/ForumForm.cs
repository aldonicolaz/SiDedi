
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.Forum")]
    [BasedOnRow(typeof(Entities.ForumRow), CheckNames = true)]
    public class ForumForm
    {
        [Category("Forum")]
        [LookupEditor("Master.MasterForum")]
        [DisplayName("Jenis Forum"),Width(150)]
        public Int32 IdMasterForum { get; set; }

        //[Visible(false)]
        //public Int32 IdUserInsert { get; set; }
        [MyCustomEditor]
        [DisplayName("Detail"), Width(300)]

        public String DetailForum { get; set; }
        [DisplayName("Foto")]
        public String FotoDokumenForum { get; set; }
        [RadioButtonEditor(EnumKey = "Transaction.MyEnumStatushide")]
        [Visible (true),Width(150)]
        public MyEnumStatushide HiddenUser { get; set; }

        [Category("Respon Forum")]
        [DetailForumGrid]
        public List<Entities.DetailForumRow> Detail { get; set; }
    }
}