
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.ViewTransaksiFormulir")]
    [BasedOnRow(typeof(Entities.ViewTransaksiFormulirRow), CheckNames = true)]
    public class ViewTransaksiFormulirColumns
    {
        [EditLink, DisplayName("ID"), AlignRight]
        public Int32 IdTransaksi { get; set; }
        [Visible(false)]
        public Int32 IdTransaksiForm { get; set; }
        [Visible(false)]
        public Int32 IdUserPengajuan { get; set; }
        [Visible(false)]
        public Int32 IdUserAparat { get; set; }
        [Visible(false),QuickFilter]
        [LookupEditor("Master.MasterFormulir")]
        public Int32 IdMasterForm { get; set; }
        [Visible(false),QuickFilter]
        [LookupEditor("Master.MasterStatus")]
        public Int32 IdStatus { get; set; }
        [Visible(false)]
        public Int32 IdFormulir { get; set; }
        [Width(300)]
        public String Formulir { get; set; }
        [Width(300)]
        public String Dokumen { get; set; }
        [Width(300)]
        public String NamaStatus { get; set; }
        [Width(300)]
        public String Info { get; set; }
        [QuickFilter,Width(200)]
        public DateTime TimeStamp { get; set; }
    }
}