
namespace SDD.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MasterKabupaten")]
    [BasedOnRow(typeof(Entities.MasterKabupatenRow), CheckNames = true)]
    public class MasterKabupatenColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdKabupaten { get; set; }
        [Width(300)]
        public String IdPropinsiNamaPropinsi { get; set; }
        [EditLink]
        [Width(300)]
        public String NamaKabupaten { get; set; }
        [Width(200)]
        public String NoKodeKabupaten { get; set; }
        [Width(300)]
        public String Langtitudekabupaten { get; set; }
        [Width(300)]
        public String LongtitudeKabupaten { get; set; }
        [Width(300)]
        public String DescKabupaten { get; set; }
        [Width(300)]
        public String LogoKabupaten { get; set; }
    }
}