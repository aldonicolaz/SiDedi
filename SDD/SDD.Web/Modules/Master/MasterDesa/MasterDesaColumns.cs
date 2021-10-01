
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterDesa")]
    [BasedOnRow(typeof(Entities.MasterDesaRow), CheckNames = true)]
    public class MasterDesaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 IdDesa { get; set; }
        [Width(300)]
        public String IdKecamatanNamaKecamatan { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaDesa { get; set; }
        [Width(300)]
        public String NoKodeDesa { get; set; }
        [Width(300)]
        public String LantitudeDesa { get; set; }
        [Width(300)]
        public String LongtitudeDesa { get; set; }
        [Width(300)]
        public String DescDesa { get; set; }
        [Width(300)]
        public String LogoDesa { get; set; }
    }
}