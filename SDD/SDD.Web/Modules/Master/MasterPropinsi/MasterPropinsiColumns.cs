
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterPropinsi")]
    [BasedOnRow(typeof(Entities.MasterPropinsiRow), CheckNames = true)]
    public class MasterPropinsiColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdPropinsi { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaPropinsi { get; set; }
        [Width(300)]
        public String IbuKotaPropinsi { get; set; }
        [Width(300)]
        public String NoKodePropinsi { get; set; }
        [Width(300)]
        public String LatitudePropinsi { get; set; }
        [Width(300)]
        public String LongitudePropinsi { get; set; }
        [Width(300)]
        public String DescPropinsi { get; set; }
        [Width(300)]
        public String LogoPropinsi { get; set; }
    }
}