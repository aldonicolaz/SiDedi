
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterBudidaya")]
    [BasedOnRow(typeof(Entities.MasterBudidayaRow), CheckNames = true)]
    public class MasterBudidayaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdBudidaya { get; set; }
        [Width(200)]
        public String IdSatuanBudidayaNamaSatuan { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaBudidaya { get; set; }
        [Width(300)]
        public String IdPekerjaanNamaPekerjaan { get; set; }
    }
}