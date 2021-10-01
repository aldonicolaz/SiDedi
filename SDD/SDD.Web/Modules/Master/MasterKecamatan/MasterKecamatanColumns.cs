
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterKecamatan")]
    [BasedOnRow(typeof(Entities.MasterKecamatanRow), CheckNames = true)]
    public class MasterKecamatanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdKecamatan { get; set; }
        [Width(300)]
        public String IdKabupatenNamaKabupaten { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaKecamatan { get; set; }
        [Width(300)]
        public String NoKodeKecamatan { get; set; }
        [Width(300)]
        public String LangtitudeKecamatan { get; set; }
        [Width(300)]
        public String LongtitudeKecamatan { get; set; }
        [Width(300)]
        public String KodePos { get; set; }
        [Width(300)]
        public String DecKecamatan { get; set; }
        [Width(300)]
        public String LogoKecamatan { get; set; }
    }
}