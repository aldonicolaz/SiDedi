
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterHasilBudidaya")]
    [BasedOnRow(typeof(Entities.MasterHasilBudidayaRow), CheckNames = true)]
    public class MasterHasilBudidayaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdHasilBudidaya { get; set; }
        [Width(300)]
        public String IdMasterBudidayaNamaBudidaya { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaHasil { get; set; }
        [Width(200)]
        public String IdSatuanHasilNamaSatuan { get; set; }
        [Width(300)]
        public String Desc { get; set; }
    }
}