
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterKecamatan")]
    [BasedOnRow(typeof(Entities.MasterKecamatanRow), CheckNames = true)]
    public class MasterKecamatanForm
    {
        [LookupEditor("Master.MasterKabupaten")]
        public Int32 IdKabupaten { get; set; }
        public String NamaKecamatan { get; set; }
        public String NoKodeKecamatan { get; set; }
        public String LangtitudeKecamatan { get; set; }
        public String LongtitudeKecamatan { get; set; }
        public String KodePos { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DecKecamatan { get; set; }
        public String LogoKecamatan { get; set; }
    }
}