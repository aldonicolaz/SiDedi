
namespace SDD.View.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("View.ViewUserPenghasilan")]
    [BasedOnRow(typeof(Entities.ViewUserPenghasilanRow), CheckNames = true)]
    public class ViewUserPenghasilanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 NumberId { get; set; }
        [EditLink]
        [Width(300)]
        public String DisplayName { get; set; }
        [Width(300)]
        public String Email { get; set; }
        //public String NoKtp { get; set; }
        //public String NoKk { get; set; }
        //public String PhoneNumber { get; set; }
        [Width(300)]
        public String WaNumber { get; set; }
        [Width(300)]
        public Decimal TotalHasil { get; set; }
        [Visible(false)]

        [LookupEditor("Master.MasterPekerjaan"),QuickFilter]
        public Int32 IdPekerjaan { get; set; }
        [Width(300)]
        public String NamaPekerjaan { get; set; }
        [LookupEditor("Master.MasterDesa"), Visible(false),QuickFilter]
        public Int64 IdDesa { get; set; }
        [Width(300)]
        public String NamaDesa { get; set; }
        [LookupEditor("Master.MasterKecamatan"), Visible(false), QuickFilter]
        public Int32 IdKecamatan { get; set; }
        [Width(300)]
        public String NamaKecamatan { get; set; }
        [LookupEditor("Master.MasterKabupaten"), Visible(false), QuickFilter]
        public Int32 IdKabupaten { get; set; }
        [Width(300)]
        public String NamaKabupaten { get; set; }
        [LookupEditor("Master.MasterPropinsi"), Visible(false), QuickFilter]
        public Int32 IdPropinsi { get; set; }
        [Width(300)]
        public String NamaPropinsi { get; set; }
    }
}