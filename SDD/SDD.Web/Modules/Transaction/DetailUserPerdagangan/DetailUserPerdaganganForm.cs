
namespace SDD.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.DetailUserPerdagangan")]
    [BasedOnRow(typeof(Entities.DetailUserPerdaganganRow), CheckNames = true)]
    public class DetailUserPerdaganganForm
    {
        //public Int32 IdUserPerdagangan { get; set; }
        public GetTipeLapak TypeLapak { get; set; }
        public Decimal LuasLapak { get; set; }
        
        public GetStatusLapak StatusLapak { get; set; }
        [TextAreaEditor(Rows =6)]
        public String AlamatLapak { get; set; }
        public Int32 JumPekerja { get; set; }
        public Decimal SemuaBiayaBulanan { get; set; }
        public Decimal PenghasilanBulanan { get; set; }
        [TextAreaEditor(Rows =6)]
        public String Desc { get; set; }
        
    }
}