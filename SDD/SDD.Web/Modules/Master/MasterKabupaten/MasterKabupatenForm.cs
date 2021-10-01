
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterKabupaten")]
    [BasedOnRow(typeof(Entities.MasterKabupatenRow), CheckNames = true)]
    public class MasterKabupatenForm
    {
        [LookupEditor("Master.MasterPropinsi")]
        public Int32 IdPropinsi { get; set; }
        public String NamaKabupaten { get; set; }
        public String NoKodeKabupaten { get; set; }
        public String Langtitudekabupaten { get; set; }
        public String LongtitudeKabupaten { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescKabupaten { get; set; }
        public String LogoKabupaten { get; set; }
       
    }
}