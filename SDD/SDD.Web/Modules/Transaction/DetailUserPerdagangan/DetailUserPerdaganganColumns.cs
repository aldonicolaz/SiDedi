
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.DetailUserPerdagangan")]
    [BasedOnRow(typeof(Entities.DetailUserPerdaganganRow), CheckNames = true)]
    public class DetailUserPerdaganganColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDetailPerdagangan { get; set; }
        [Width(300)]
        public String IdUserPerdaganganNamaBrandToko { get; set; }
        [Width(300)]
        public GetTipeLapak TypeLapak { get; set; }
        public Decimal LuasLapak { get; set; }
        [Width(300)]
        public GetStatusLapak StatusLapak { get; set; }
        [EditLink]
        [Width(300)]
        public String AlamatLapak { get; set; }
        [Width(200)]
        public Int32 JumPekerja { get; set; }
        [Width(300)]
        public Decimal SemuaBiayaBulanan { get; set; }
        [Width(300)]
        public Decimal PenghasilanBulanan { get; set; }
        [Width(300)]
        public String Desc { get; set; }
       
    }
}