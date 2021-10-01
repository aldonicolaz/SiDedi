
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.ViewMaasterForm")]
    [BasedOnRow(typeof(Entities.ViewMaasterFormRow), CheckNames = true)]
    public class ViewMaasterFormColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 IdNumber { get; set; }
        public Int32 IdFormFlow { get; set; }
        [EditLink]
        public String NamaFormulir { get; set; }
        public Int32 IdFormulir { get; set; }
        public Int32 Slaform { get; set; }
        public String DescForm { get; set; }
        public String NamaDesa { get; set; }
        public String NamaKecamatan { get; set; }
        public String KodePos { get; set; }
        public String ReqForm { get; set; }
    }
}