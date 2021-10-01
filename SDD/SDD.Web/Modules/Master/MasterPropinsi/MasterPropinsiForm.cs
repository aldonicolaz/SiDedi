
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterPropinsi")]
    [BasedOnRow(typeof(Entities.MasterPropinsiRow), CheckNames = true)]
    public class MasterPropinsiForm
    {
        public String NamaPropinsi { get; set; }
        public String IbuKotaPropinsi { get; set; }
        public String NoKodePropinsi { get; set; }
        public String LatitudePropinsi { get; set; }
        public String LongitudePropinsi { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescPropinsi { get; set; }
        public String LogoPropinsi { get; set; }
        
    }
}