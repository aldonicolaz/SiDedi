
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterFormulir")]
    [BasedOnRow(typeof(Entities.MasterFormulirRow), CheckNames = true)]
    public class MasterFormulirColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdFormulir { get; set; }
        [EditLink]
        public String NamaFormulir { get; set; }
        public String DescFormulir { get; set; }
    }
}