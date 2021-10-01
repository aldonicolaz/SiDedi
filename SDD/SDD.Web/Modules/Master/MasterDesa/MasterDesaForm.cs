
namespace SDD.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MasterDesa")]
    [BasedOnRow(typeof(Entities.MasterDesaRow), CheckNames = true)]
    public class MasterDesaForm
    {
        [LookupEditor("Master.MasterKecamatan")]
        public Int32 IdKecamatan { get; set; }
        public String NamaDesa { get; set; }
        public String NoKodeDesa { get; set; }
       
        public String LantitudeDesa { get; set; }
        public String LongtitudeDesa { get; set; }
        public String LogoDesa { get; set; }
        [TextAreaEditor(Rows =6)]
        public String DescDesa { get; set; }
       
    }
}